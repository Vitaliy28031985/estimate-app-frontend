import { useParams, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetProjectByIdQuery } from '../../redux/projectSlice/projectSlice';
import { useUpdateAdvanceMutation, useDeleteAdvanceMutation} from '../../redux/advances/advancesApi';
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
    const [data, setData] = useState(project);
    const dispatch = useDispatch();
    const [mutate] = useUpdateAdvanceMutation();
    const [deleteAdvance] = useDeleteAdvanceMutation();

    const [isShowAdd, setIsShowAdd] = useState(false);

    const handleToggleAdd = () => {

        setIsShowAdd(isShowAdd => !isShowAdd);
      }

  useEffect(() => {
    setData(project); 
}, [project]); 

const addIsToggle = (id, currentIsShow) => {
  setData(prevData => {
    const newData = { ...prevData };
     const newAdvances = newData.advances.map(advance => {
      if(advance.id === id) {
        return { ...advance, isShow: currentIsShow }; 
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
      <button onClick={handleToggleAdd}><Add width={'24'} height={'24'}/></button>
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
                    data?.advances.map(({id, comment, date, sum, isShow = false }, index) => (
                <tr key={id} className={s.dataRow}>
                <td className={s.oneRow}>
                  {index + 1}
                  <button  
                  className={s.buttonUpdate}
                  onClick={() => {
                    isShow = !isShow;
                    addIsToggle(id, isShow);
                    if(!isShow) {
                       handleSubmit(data?._id, id, {comment, date, sum})
                    }
                    }}
                  >
                    {isShow ? (<UpdateOk width='22' height='22'/>) :
                    (<Update width='22' height='22'/>)
                    }
                  
                  </button>
                    </td>
                       
                <td className={s.threeRow}><input id={id} name='comment'  className={s.input} value={comment} disabled={true} onChange={onChange}/></td>
                <td className={s.threeRow}><input id={id} name='date' className={s.input} value={date} disabled={!isShow} onChange={onChange}/></td>
                <td className={s.threeRow}><input id={id} name='sum' className={s.input} value={sum} disabled={!isShow} onChange={onChange}/>
                <button type='button' className={s.buttonAddTitle}  onClick={ async () => 
                  {
                    
                   await deleteAdvance({idPro: data?._id, idAdv: id});
                    dispatch(projectsApi.util.resetApiState());
                }
                  }
                    >
                <Delete width={"24"} height={"24"}/>
                </button>
                </td>
                      </tr>
                    ))}

                  <tr className='title-row'>
                    <td colSpan='3'>Всього:</td>
                    <td className={s.threeSix}>{data?.advancesTotal}</td>
                  </tr>
                </tbody>
              </table>
              {isShowAdd && (<Modal><AddAdvance isShowModal={handleToggleAdd }/></Modal>)}
        </div>
    )
}

export default AdvancesItem;