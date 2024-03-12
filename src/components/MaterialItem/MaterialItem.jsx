import { useParams, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useGetProjectByIdQuery } from '../../redux/projectSlice/projectSlice';
import {useDeleteMaterialMutation} from "../../redux/material/materialApi";
import {projectsApi} from "../../redux/projectSlice/projectSlice";
import AddEstimate from "../AddMaterial/AddMaterial";
import Modal from '../Modal/Modal';
import Add from '../Icons/Add/Add';
import Delete from '../Icons/Delete/Delete';
import s from "./MaterialItem.module.scss";

function MaterialItem() {
    const { id } = useParams();
    const { data: project} = useGetProjectByIdQuery(id);
    const [deleteMaterial] = useDeleteMaterialMutation();
    const [data, setData] = useState(project);
    
    const dispatch = useDispatch();

    const [isShowAdd, setIsShowAdd] = useState(false);

    const handleToggleAdd = () => {

        setIsShowAdd(isShowAdd => !isShowAdd);
      }

  useEffect(() => {
    setData(project); 
}, [project]); 


    return (
        <div>
           <ul className={s.linksList}>
        <li><NavLink to={`/projects/${data?._id}`}>Кошторис</NavLink></li>
        <li><NavLink to={`/advances/${data?._id}`}>Аванс</NavLink></li>
      </ul>
<div className={s.buttonsContainer}>
      <h1 className={s.title}>Матеріали</h1>

      <button onClick={handleToggleAdd}><Add width={'24'} height={'24'}/></button>
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
                    data?.materials.map(({id, title, order, date, sum, isShow = false }, index) => (
                <tr key={id} className={s.dataRow}>
                <td className={s.oneRow}>
                  {index + 1}
                  <button type='button' className={s.buttonAddTitle}  onClick={ async () => 
                  {
                    
                   await deleteMaterial({idPro: data?._id, idMat: id});
                    dispatch(projectsApi.util.resetApiState());
                }
                  }
                    >
                <Delete width={"24"} height={"24"}/>
                </button>
                    </td>
                <td><input id={id} name='title' className={s.inputTitle} value={title} disabled={!isShow} /></td>                 
                <td className={s.threeRow}><input id={id} name='order'  className={s.input} value={order} disabled={!isShow} /></td>
                <td className={s.threeRow}><input id={id} name='date' className={s.input} value={date} disabled={!isShow} /></td>
                <td className={s.threeRow}><input id={id} name='sum' className={s.input} value={sum} disabled={!isShow} /></td>
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