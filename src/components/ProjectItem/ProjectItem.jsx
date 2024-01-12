import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGetProjectByIdQuery } from '../../redux/projectSlice/projectSlice';
import {projectsApi} from "../../redux/projectSlice/projectSlice";
import {useDeleteEstimateMutation} from '../../redux/estimate/estimateApi';
import {useAddPositionMutation, useDeletePositionMutation} from '../../redux/position/positionApi';
import Add from '../Icons/Add/Add';
import Delete from '../Icons/Delete/Delete';
import AddPosition from "../AddPosition/AddPosition";
import AddEstimate from "../AddEstimate/AddEstimate"
import s from './ProjectItem.module.scss';
import Modal from '../Modal/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProjectItem() {
  const [showPosition, setShowPosition] = useState(false);
  const [showEstimate, setShowEstimate] = useState(false);
  
  const [currentId, setCurrentId] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, error } = useGetProjectByIdQuery(id);
  const [deleteEstimate] = useDeleteEstimateMutation();
  const [deletePosition] = useDeletePositionMutation();

  const[addPosition] = useAddPositionMutation();


let idOne = '';
let idTwo = '';

  if (error) {
    return <div>Помилка завантаження проекту</div>;
  }

  const handleTogglePosition = async (idEst, idPro) => {
      if(!showPosition) {
    idOne =  await idEst;
       idTwo = await idPro;
       await setCurrentId({idEst: idOne, idPos: idTwo});
}

 setShowPosition(showPosition => !showPosition);   
  
}

const handleToggleEstimate = () => {
  setShowEstimate(showEstimate => !showEstimate);
}

const addFunction = async(position) => {
  const newPosition = {idEst: currentId.idEst, idPos: currentId.idPos, position: position}
  await addPosition(newPosition);
  dispatch(projectsApi.util.resetApiState());
  toast("Позицію додано");
}

const deletePositionFn = async (idEst, idPro, idPos) => {
await deletePosition({idPro, idEst, idPos});
dispatch(projectsApi.util.resetApiState());
toast("Позицію видалено");
}

const onDeleteEstimate = async (idPro, idEst ) => {

await deleteEstimate({idPro, idEst})
dispatch(projectsApi.util.resetApiState());
toast("Таблицю кошторису видалено");
};

  return (
    <div>
      <ToastContainer draggable={true} />
      {data && (
        <>
        <div className={s.buttonAddContainer}>
          <p className={s.title}>Назва об'єкту: {data.title}</p>
          <button type='button' className={s.buttonAddTitle} onClick={handleToggleEstimate}><Add width={"24"} height={"24"}/></button>
          </div>
          {data.description && <p className={s.address}>Адреса: {data.description}</p>}

          {data.estimates && data.estimates.map(item => (
            <div key={item._id}>
              <div className={s.buttonAddContainer}>
              <p className={s.titleTable}>{item.title}</p>
               <button type='button' className={s.buttonAddTitle} onClick={() => onDeleteEstimate(data?._id, item?._id)}>
                <Delete width={"24"} height={"24"}/>
                </button>
              </div>     
              
              <table className={s.iksweb}>
                <tbody>
                <tr className={s.titleRow}>
           <td className={s.oneRow}>№ з/п.</td>
                 <td className={s.twoRow}>Назва 
                 <button type='button' onClick={() => data && item._id && handleTogglePosition(item._id, data._id)} className={s.buttonAdd}>
                 <Add width={"24"} height={"24"}/>
                </button></td>
                 <td className={s.threeRow}>Одиниця</td>
                 <td className={s.threeRow}>Кількість</td>
                 <td className={s.threeRow}>Ціна в грн.</td>
                 <td className={s.threeSix}>Сума в грн.</td>
             </tr>

                  {item.positions &&
                    item.positions.map(({ _id, id, title, unit, price, number, result }, index) => (
                <tr key={_id} className={s.dataRow}>
                <td className={s.oneRow}>{index + 1}</td>
                <td>
                  <button className={s.buttonDeletePosition} 
                  onClick={() => deletePositionFn(item._id, data._id,  id)}>
                    <Delete width={"24"} height={"24"}/></button>
                  {title}</td>                 
                <td className={s.threeRow}>{unit}</td>
                <td className={s.threeRow}>{number}</td>
                <td className={s.threeRow}>{price}</td>
                <td className={s.threeSix}>{result}</td>
                      </tr>
                    ))}

                  <tr className='title-row'>
                    <td colSpan='5'>Всього:</td>
                    <td className={s.threeSix}>{item.total}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </>
      )}

      <div className={s.total}>
        <p>Загальна сума: </p>
        {data && <p>{data.total}</p>}
      </div>
      {showPosition && (
       <Modal><AddPosition isShowModal={handleTogglePosition} add={addFunction} /></Modal> 
      )}
      
      {showEstimate && (<Modal><AddEstimate idData={id} isShowModal={handleToggleEstimate}/></Modal>)}
     
      
      
    </div>
  );
}

export default ProjectItem;
