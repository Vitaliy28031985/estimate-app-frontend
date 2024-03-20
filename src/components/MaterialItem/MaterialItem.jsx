import { useParams, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useGetProjectByIdQuery } from '../../redux/projectSlice/projectSlice';
import {useDeleteMaterialMutation, useUpdateMaterialMutation} from "../../redux/material/materialApi";
import {useCurrentQuery} from "../../redux/auth/authApi";
import {projectsApi} from "../../redux/projectSlice/projectSlice";
import AddEstimate from "../AddMaterial/AddMaterial";
import Modal from '../Modal/Modal';
import Add from '../Icons/Add/Add';
import Delete from '../Icons/Delete/Delete';
import Update from '../Icons/Update/UpdateIcon';
import UpdateOk from '../Icons/Update/UpdateOk';
import s from "./MaterialItem.module.scss";

function MaterialItem() {
    const { id } = useParams();
    const { data: project} = useGetProjectByIdQuery(id);
    const { data: userData } = useCurrentQuery(); 
    const [deleteMaterial] = useDeleteMaterialMutation();
    const [mutate] = useUpdateMaterialMutation();
    const [data, setData] = useState(project);
    const [userRole, setUserRole] = useState(false);
    
    const dispatch = useDispatch();

    const [isShowAdd, setIsShowAdd] = useState(false);

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
     const newMaterials = newData.materials.map(material => {
      if(material.id === id) {
        if(name === 'update') {
        return { ...material, isShow: currentIsShow };
      }
      if(name === 'delete') {
        return { ...material, isDelete: currentIsShow };
    } 
      }
      return material;
     })
     newData.materials = newMaterials;
     return newData;
  });
}

const onChange = (e) => {
  const { name, value, id } = e.currentTarget;
  setData(prevData => {
    const newData = { ...prevData };
     const newMaterials = newData.materials.map(material => {
      if(material.id === id) {
        switch (name) {
          case name:
              return  {...material, [name]: value};
          default:
            return material;
        }
      }
      return material;
     })
     newData.materials = newMaterials;
     return newData;
  });
     };

     const handleSubmit = async (projId, matId, updateMaterial) => {
      await mutate([projId, matId, updateMaterial]);
      dispatch(projectsApi.util.resetApiState());
     }

    return (
        <div>
           <ul className={s.linksList}>
        <li className={s.buttonNav}><NavLink className={s.buttonNavLink} to={`/projects/${data?._id}`}>Кошторис</NavLink></li>
        <li className={s.buttonNavCurrent}>Матеріали</li>
        <li className={s.buttonNav}><NavLink className={s.buttonNavLink} to={`/advances/${data?._id}`}>Аванс</NavLink></li>
      </ul>
<div className={s.buttonsContainer}>
      <h1 className={s.title}>Матеріали</h1>
      {userRole && (
        <button onClick={handleToggleAdd}><Add width={'24'} height={'24'}/></button>
      )}
      
</div>
      <table className={s.iksweb}>
                <tbody>
                <tr className={s.titleRow}>
           <td className={s.oneRow}>№ з/п.</td>
                 <td className={s.twoRow}>Назва</td>
                 <td className={s.threeRow}>№ рахунку</td>
                 <td className={s.threeRow}>Дата</td>
                 <td className={s.threeRow}>Сума в грн.</td>
             </tr>

                  {data?.materials &&
                    data?.materials.map(({id, title, order, date, sum, isShow = false, isDelete = false }, index) => (
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
                       handleSubmit(data?._id, id, {title, order, date, sum})
                    }
                    }}
                  >
                    {isShow ? (<UpdateOk width='22' height='22'/>) :
                    (<Update width='22' height='22'/>)
                    }
                  
                  </button>
                  )}
                 
                    </td>
                <td>
                  {!isShow ? 
                (<p>{title}</p>) :
                ( <input id={id} name='title' className={s.inputTitle} value={title} disabled={!isShow} onChange={onChange} />) 
                }</td>                 
                <td className={s.threeRow}>
                {!isShow ? 
                (<p>{order}</p>) :
                (<input id={id} name='order'  className={s.input} value={order} disabled={!isShow} onChange={onChange} />)  
              }</td>
                <td className={s.threeRow}>
                {!isShow ? 
                (<p>{date}</p>) : 
                (<input id={id} name='date' className={s.input} value={date} disabled={!isShow} onChange={onChange} />)
              }</td>
                <td className={s.threeRow}>
                {!isShow ? 
                 (<p>{sum}</p>) :
                 (<input id={id} name='sum' className={s.input} value={sum} disabled={!isShow} onChange={onChange} />)
              }   
                {userRole && (
                   <button type='button' className={s.buttonAddTitle}  onClick={() => 
                  {
                    isDelete = !isDelete;
                   addIsToggle(id, isDelete, 'delete');
                  }
                  }
                    >
                <Delete width={"24"} height={"24"}/>
                </button>
                )}
               
               {isDelete && (
                  <div className={s.deleteModalContainer}>
                    <h4>{`Ви справді бажаєте видалити: ${title}`}</h4>
                    <ul className={s.buttonContainer }>
                        <li><button
                        onClick={async() => {
                            isDelete = !isDelete;
                            addIsToggle(id, isDelete, 'delete');
                            await deleteMaterial({idPro: data?._id, idMat: id});
                            dispatch(projectsApi.util.resetApiState());
                        }}
                        >Так</button></li>
                        <li><button
                        onClick={ () => {
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
                    <td colSpan='4'>Всього:</td>
                    <td className={s.threeSix}>{data?.materialsTotal}</td>
                  </tr>
                </tbody>
              </table>

{isShowAdd && (<Modal><AddEstimate isShowModal={handleToggleAdd }/></Modal>)}

        </div>
    )
}

export default MaterialItem;

