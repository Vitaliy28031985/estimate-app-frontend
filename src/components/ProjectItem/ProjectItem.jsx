import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { useGetProjectByIdQuery } from '../../redux/projectSlice/projectSlice';
import {projectsApi} from "../../redux/projectSlice/projectSlice";
import {useDeleteEstimateMutation} from '../../redux/estimate/estimateApi';
import {useAddPositionMutation, useDeletePositionMutation} from '../../redux/position/positionApi';
import Add from '../Icons/Add/Add';
import Delete from '../Icons/Delete/Delete';
import AddPosition from "../AddPosition/AddPosition";
import AddEstimate from "../AddEstimate/AddEstimate";
import UpdateEstimate from "../UpdateEstimate/UpdateEstimate";
import s from './ProjectItem.module.scss';
import Modal from '../Modal/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import updates from "../../images/update-12-16.png";
import UpdatePosition from "../UpdatePosition/UpdatePosition"

function ProjectItem() {
  const [showPosition, setShowPosition] = useState(false);
  const [showEstimate, setShowEstimate] = useState(false);

  const [showButtons, setShowButtons] = useState(false);
  const [updatePositionModal, setUpdatePositionModal] = useState(false)

  const [updateEstimateModal, setUpdateEstimateModal] = useState(false)
  
  const [currentId, setCurrentId] = useState({});

  const [updateData, setUpdateData] = useState([]);
  const [newPosition, setNewPosition] = useState({});

  const [newUpdateEstimate, setNewUpdateEstimate] = useState({})

  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, error } = useGetProjectByIdQuery(id);
  const [deleteEstimate] = useDeleteEstimateMutation();
  const [deletePosition] = useDeletePositionMutation();

  const[addPosition] = useAddPositionMutation();


let idOne = '';
let idTwo = '';

let projectId = '';
let estimateId = '';
let positionId = '';
let newPosData = {};

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

const handleToggleButtons = () => {
  setShowButtons(showButtons => !showButtons);
}

const handleToggleUpdatePosition = () => {
  setUpdatePositionModal(updatePositionModal => !updatePositionModal);
}

const handleToggleUpdateEstimate = () => {
  setUpdateEstimateModal(updateEstimateModal => !updateEstimateModal);
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



pdfMake.vfs = pdfFonts.pdfMake.vfs;


const generatePdf = () => {
  if (data) {
    const content = [
      { text: `Назва об'єкту:          ${data?.title}`, fontSize: 25 },
      { text: `Адреса:                                                 ${data?.description}`, fontSize: 14, marginTop: 10 },
    ];

    data.estimates.forEach((estimate) => {
      content.push(
        { text: estimate?.title, fontSize: 16, bold: true, marginTop: 30, marginBottom: 10, marginLeft: 200},
        {
          table: {
            headerRows: 1,
            widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
            body: [
              ['№ з/п.', 'Назва', 'Одиниця', 'Кількість', 'Ціна в грн.', 'Сума в грн.'],
              ...(estimate?.positions?.map(
                ({ title, unit, price, number, result  }, index) => [
                  index + 1,
                  title || '',        
                  unit || '',          
                  number || '',
                  price || '',        
                  result || '',       
                ]
              ) || []),
              [{}, {}, {}, {}, 'Всього:', estimate?.total],
              
            ],
          },
          layout: 'lightHorizontalLines',
          style: 'tableExample', 

        }
      );
    });
    content.push({ text: `Загальна сума:                            ${data?.total}`, fontSize: 30, marginTop: 30},)
    const styles = {
      tableExample: {
        margin: [0, 5, 0, 15],
        fontSize: 12,                   
        color: '#333',           
      },
    };
    const pdfDoc = {
      content,
      styles
    };

    pdfMake.createPdf(pdfDoc).download(`${data?.title}.pdf`);
  }
 
};

const updateEstimate = async (projId, estId, currentName) => {
  await setNewUpdateEstimate({projId, estId, currentName})
  handleToggleUpdateEstimate();
}

const updatePosition = async (projId, estId, posId, currentData) => {

 projectId = await projId;
 estimateId = await estId;
 positionId = await posId;
 newPosData = await currentData;
 
 await setUpdateData([projectId, estimateId, positionId]);
 await setNewPosition(newPosData);
 handleToggleUpdatePosition();
}

  return (
    <div>
      <ToastContainer draggable={true} />
      <button className={s.createPdfFileButton} onClick={generatePdf}>Створити PDF файл</button>
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
                <button className={s.buttonDelete}
                onClick={() => updateEstimate(data?._id, item?._id, item?.title)}
                >
                    <img src={updates} width='20' height='20' alt='update'/> 
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
                <button type='button' onClick={handleToggleButtons} className={s.buttonDeletePosition} >
                 <Add width={"24"} height={"24"}/>
                </button>
                {showButtons && (
                 <div className={s.buttonsContainer}>
                  <button className={s.buttonDelete}
                  onClick={() => updatePosition(item._id, data._id,  id, {title, unit, price, number})}
                  >
                    <img src={updates} width='20' height='20' alt='update'/> 
                    </button>
                    <button className={s.buttonDeletePosition} 
                  onClick={() => deletePositionFn(item._id, data._id,  id)}>
                    <Delete width={"24"} height={"24"}/></button>
                 </div>
                 )}
                
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

       {updateEstimateModal && (
       <Modal><UpdateEstimate isShowModal={handleToggleUpdateEstimate} idData={newUpdateEstimate} /></Modal> 
      )}

      {showEstimate && (<Modal><AddEstimate idData={id} isShowModal={handleToggleEstimate}/></Modal>)}
      {updatePositionModal && (<Modal><UpdatePosition idsData={updateData} isShowModal={handleToggleUpdatePosition} newPosition={newPosition}/></Modal>)}
      
      
    </div>
  );
}

export default ProjectItem;