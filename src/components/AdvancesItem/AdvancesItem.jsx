import { useParams, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetProjectByIdQuery } from '../../redux/projectSlice/projectSlice';
import { useUpdateAdvanceMutation, useDeleteAdvanceMutation} from '../../redux/advances/advancesApi';
import {useCurrentQuery} from "../../redux/auth/authApi";
import {projectsApi} from "../../redux/projectSlice/projectSlice";
import Modal from '../Modal/Modal';
import AddAdvance from '../AddAdvance/AddAdvance';
import Add from '../Icons/Add/Add';
import Delete from '../Icons/Delete/Delete';
import Update from '../Icons/Update/UpdateIcon';
import UpdateOk from '../Icons/Update/UpdateOk';
import s from "./AdvancesItem.module.scss";

function AdvancesItem() {
    const { id } = useParams();
    const { data: project} = useGetProjectByIdQuery(id);
    const { data: userData } = useCurrentQuery(); 
    const [data, setData] = useState(project);
    const dispatch = useDispatch();
    const [mutate] = useUpdateAdvanceMutation();
    const [deleteAdvance] = useDeleteAdvanceMutation();

    const [isShowAdd, setIsShowAdd] = useState(false);
    const [userRole, setUserRole] = useState(false);

    const handleToggleAdd = () => {

        setIsShowAdd(isShowAdd => !isShowAdd);
      }

  useEffect(() => {
    setData(project);
    if (userData) {
      const role = userData?.user?.role;
      const isUserRole = role !== "customer";
         setUserRole(isUserRole);
    }   
}, [project, userData, userRole]); 

const addIsToggle = (id, currentIsShow, name) => {
  setData(prevData => {
    const newData = { ...prevData };
     const newAdvances = newData.advances.map(advance => {
      if(advance.id === id) {
        if(name === 'update') {
        return { ...advance, isShow: currentIsShow }; 
      }
      if(name === 'delete') {
        return { ...advance, isDelete: currentIsShow };
    }
      }
      return advance;
     })
     newData.advances = newAdvances;
     return newData;
  });
}

const onChange = (e) => {
  const { name, value, id } = e.currentTarget;
  setData(prevData => {
    const newData = { ...prevData };
     const newAdvances  = newData.advances.map(advance => {
      if(advance.id === id) {
        switch (name) {
          case name:
              return  {...advance, [name]: value};
          default:
            return advance;
        }
      }
      return advance;
     })
     newData.advances = newAdvances ;
     return newData;
  });
     };

     const handleSubmit = async (projId, advId, updateAdvance) => {
     
      await mutate([projId, advId, updateAdvance]);
      dispatch(projectsApi.util.resetApiState());
     }

    return (
        <div>
           <ul className={s.linksList}>
        <li className={s.buttonNav}><NavLink className={s.buttonNavLink} to={`/projects/${data?._id}`}>Кошторис</NavLink></li>
        <li className={s.buttonNav}><NavLink className={s.buttonNavLink} to={`/materials/${data?._id}`}>Матеріали</NavLink></li>
        <li className={s.buttonNavCurrent}>Аванс</li>
      </ul>

      

      <div className={s.buttonsContainer}>
      <h1 className={s.title}>Аванс</h1>
      {userRole && (
            <button onClick={handleToggleAdd}><Add width={'24'} height={'24'}/></button>
      )}
  
      </div>
      <table className={s.iksweb}>
                <tbody>
                <tr className={s.titleRow}>
           <td className={s.oneRow}>№ з/п.</td>
                 <td className={s.threeRow}>Коментар</td>
                 <td className={s.threeRow}>Дата</td>
                 <td className={s.threeRow}>Сума в грн.</td>
             </tr>

                  {data?.advances &&
                    data?.advances.map(({id, comment, date, sum, isShow = false, isDelete = false }, index) => (
                <tr key={id} className={s.dataRow}>
                <td className={s.oneRow}>
                  {index + 1}
                  {userRole && (
                    <button  
                  className={s.buttonUpdate}
                  onClick={() => {
                    isShow = !isShow;
                    addIsToggle(id, isShow, 'update');
                    if(!isShow) {
                       handleSubmit(data?._id, id, {comment, date, sum})
                    }
                    }}>
                    {isShow ? (<UpdateOk width='22' height='22'/>) :
                    (<Update width='22' height='22'/>)
                    }
                  
                  </button> 
                  )}
                    </td>
                       
                <td className={s.threeRow}>
                {!isShow ?
                (<p>{comment}</p>) :
                (<input id={id} name='comment'  className={s.input} value={comment} disabled={!isShow} onChange={onChange}/>) 
              }</td>
                <td className={s.threeRow}>
                {!isShow ?
                (<p>{date}</p>) :
                (<input id={id} name='date' className={s.input} value={date} disabled={!isShow} onChange={onChange}/>)
                }</td>
                <td className={s.threeRow}>
                {!isShow ?
                (<p>{sum}</p>) :
                (<input id={id} name='sum' className={s.input} value={sum} disabled={!isShow} onChange={onChange}/>)  
              }  
                {userRole && (
                 <button type='button' className={s.buttonAddTitle}  onClick={() => 
                  {
                    isDelete = !isDelete;
                    addIsToggle(id, isDelete, 'delete')
                }
                  }>
                <Delete width={"24"} height={"24"}/>
                </button> 
                )}

                 {isDelete && (
                  <div className={s.deleteModalContainer}>
                    <h4>{`Ви справді бажаєте видалити: ${comment}`}</h4>
                    <ul className={s.buttonContainer }>
                        <li><button
                        className={s.onDelete}
                        onClick={async () => {
                            isDelete = !isDelete;
                            addIsToggle(id, isDelete, 'delete');
                            await deleteAdvance({idPro: data?._id, idAdv: id});
                            dispatch(projectsApi.util.resetApiState());
                        }}
                        >Так</button></li>
                        <li><button
                        className={s.noDelete}
                        onClick={() => {
                            isDelete = !isDelete;
                            addIsToggle(id, isDelete, 'delete');
                        }}
                        >Ні</button></li>
                    </ul>
                </div>   
                )}
                </td>
                      </tr>
                    ))}

                  <tr className='title-row'>
                    <td colSpan='3'>Всього:</td>
                    <td className={s.threeSix}>{data?.advancesTotal}</td>
                  </tr>
                </tbody>
              </table>
              {isShowAdd && (<Modal onModal={handleToggleAdd}><AddAdvance isShowModal={handleToggleAdd }/></Modal>)}
        </div>
    )
}

export default AdvancesItem;

