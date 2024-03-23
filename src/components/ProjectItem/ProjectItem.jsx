import { useParams, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { useGetProjectByIdQuery } from '../../redux/projectSlice/projectSlice';
import {projectsApi} from "../../redux/projectSlice/projectSlice";
import {useDeleteEstimateMutation} from '../../redux/estimate/estimateApi';
import {useAddPositionMutation, useDeletePositionMutation, useUpdatePositionMutation} from '../../redux/position/positionApi';
import {useCurrentQuery} from "../../redux/auth/authApi";
import Add from '../Icons/Add/Add';
import Delete from '../Icons/Delete/Delete';
import AddPosition from "../AddPosition/AddPosition";
import AddEstimate from "../AddEstimate/AddEstimate";
import UpdateEstimate from "../UpdateEstimate/UpdateEstimate";
import ForbiddenPage from '../../Pages/Forbidden/ForbiddenPage';
import s from './ProjectItem.module.scss';
import Modal from '../Modal/Modal';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from '../Icons/Update/UpdateIcon';
import UpdateOk from '../Icons/Update/UpdateOk';

function ProjectItem() {
  const { id } = useParams();
  const { data: project, error } = useGetProjectByIdQuery(id);
  const { data: userData } = useCurrentQuery(); 
  const[mutate] = useUpdatePositionMutation();
  const [data, setData] = useState(project);
  const [userRole, setUserRole] = useState(false);

  useEffect(() => {
    setData(project);
    if (userData) {
      const role = userData?.user?.role;
      const isUserRole = role !== "customer";
         setUserRole(isUserRole);
    } 
}, [project, userData, userRole]); 

  
  const [showPosition, setShowPosition] = useState(false);
  const [showEstimate, setShowEstimate] = useState(false);

 
  const [updateEstimateModal, setUpdateEstimateModal] = useState(false)
  
  const [currentId, setCurrentId] = useState({});

  const [newUpdateEstimate, setNewUpdateEstimate] = useState({})

 
 
  const dispatch = useDispatch();
  
  
  const [deleteEstimate] = useDeleteEstimateMutation();
  const [deletePosition] = useDeletePositionMutation();

  const[addPosition] = useAddPositionMutation();


let idOne = '';
let idTwo = '';

let projectId = '';
let estimateId = '';
let positionId = '';



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

const handleToggleUpdateEstimate = () => {
  setUpdateEstimateModal(updateEstimateModal => !updateEstimateModal);
}

const addFunction = async(position) => {
  const newPosition = {idEst: currentId.idEst, idPos: currentId.idPos, position: position}
  await addPosition(newPosition);
  dispatch(projectsApi.util.resetApiState());
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
    content.push({ text: `Витрачено на матеріали:          ${data?.materialsTotal}`, fontSize: 30, marginTop: 30},)
    content.push({ text: `Аванс:                                             ${data?.advancesTotal}`, fontSize: 30, marginTop: 30},)
    content.push({ text: `До оплати:                                    ${data?.general}`, fontSize: 30, marginTop: 30},)
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



const addIsToggle = (id, currentIsShow, name) => {
  setData(prevData => {
      const newData = { ...prevData }; 
      const newEstimates = newData.estimates.map(estimate => {
          const newPositions = estimate.positions.map(position => {
              if (position._id === id) {
                if(name === 'update') {
                  return { ...position, isShow: currentIsShow }; 
                }
                if(name === 'delete') {
                  return { ...position, isDelete: currentIsShow };
              }
              }
              return position;
          });
          return { ...estimate, positions: newPositions }; 
      });
      newData.estimates = newEstimates; 
      return newData; 
  });
};

const onChange = (e) => {
  const { name, value, id } = e.currentTarget;
  setData(prevData => {
      const newData = { ...prevData }; 
      const newEstimates = newData.estimates.map(estimate => {
          const newPositions = estimate.positions.map(position => {
              if (position._id === id) {
                  switch (name) {
                      case name:
                          return  {...position, [name]: value};
                      default:
                        return position;
                    }
                  }
              return position;
          });
          return { ...estimate, positions: newPositions }; 
      });
      newData.estimates = newEstimates; 
      return newData; 
  }); 
}


const handleSubmit = async (projId, estId, posId, updatePosition) => {
  projectId = await projId;
  estimateId = await estId;
  positionId = await posId;
 
  await mutate([projectId, estimateId, positionId, updatePosition])
  dispatch(projectsApi.util.resetApiState()); 
}



  return (
    <>
    {error ? (<ForbiddenPage/>) : 
  ( 
    <div>
    <ul className={s.linksList}>
    <li className={s.buttonNavCurrent}>Кошторис</li>
      <li className={s.buttonNav}><NavLink className={s.buttonNavLink} to={`/materials/${data?._id}`}>Матеріали</NavLink></li>
      <li className={s.buttonNav}><NavLink className={s.buttonNavLink} to={`/advances/${data?._id}`}>Аванс</NavLink></li>
    </ul>
    <button className={s.createPdfFileButton} onClick={generatePdf}>Створити PDF файл</button>
    {data && (
      <>
      <div className={s.buttonAddContainer}>
        <p className={s.title}>Назва об'єкту: {data.title}</p>
        {userRole && (
          <button type='button' className={s.buttonAddTitle} onClick={handleToggleEstimate}><Add width={"24"} height={"24"}/></button>
        )}
        
        </div>
        {data.description && <p className={s.address}>Адреса: {data.description}</p>}

        {data.estimates && data.estimates.map(item => (
          <div key={item._id}>
            <div className={s.buttonAddContainer}>
            <p className={s.titleTable}>{item.title}</p>
            {userRole && (<>
             <button type='button' className={s.buttonAddTitle} onClick={() => onDeleteEstimate(data?._id, item?._id)}>
              <Delete width={"24"} height={"24"}/>
              </button>
              <button className={s.buttonUpdateEstimate}
              onClick={() => updateEstimate(data?._id, item?._id, item?.title)}>
                <Update width='28' height='28'/>
                  </button>
            </>)}
            
            
            </div>     
            
            <table className={s.iksweb}>
              <tbody>
              <tr className={s.titleRow}>
         <td className={s.oneRow}>№ з/п.</td>
               <td className={s.twoRow}>Назва 
               {userRole && (
               <button type='button' onClick={() => data && item._id && handleTogglePosition(item._id, data._id)} className={s.buttonAdd}>
               <Add width={"24"} height={"24"}/>
              </button> 
               )}
               </td>
               <td className={s.threeRow}><p className={s.threeRowTitleText}>Одиниця</p></td>
               <td className={s.threeRow}><p className={s.threeRowTitleText}>Кількість</p></td>
               <td className={s.threeRow}><p className={s.threeRowTitleText}>Ціна в грн.</p></td>
               <td className={s.threeSix}>Сума в грн.</td>
           </tr>

                {item.positions &&
                  item.positions.map(({ _id, id, title, unit, price, number, result, isShow = false, isDelete = false }, index) => (
              <tr key={_id} className={s.dataRow}>
              <td className={s.oneRow}>
                {index + 1}
                {userRole && (
                  <button  
                className={s.buttonUpdate}
                onClick={() => {
                  isShow = !isShow;
                  addIsToggle(_id, isShow, 'update');
                  if(!isShow) {
                     handleSubmit(data._id, item._id, id, {title, unit, number, price})
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
              (<input id={_id} name='title' className={s.inputTitle} value={title} disabled={!isShow} onChange={onChange}/>)
              }</td>                 
              <td className={s.threeRow}>{!isShow ? 
              (<p>{unit}</p>) : 
              (<input id={_id} name='unit'  className={s.input} value={unit} disabled={!isShow} onChange={onChange}/>)
              }</td>
              <td className={s.threeRow}>
              {!isShow ? 
              (<p>{number}</p>) :
              (<input id={_id} name='number' className={s.input} value={number} disabled={!isShow} onChange={onChange}/>)}
               </td>
             
              <td className={s.threeRow}>
                  {!isShow ? 
              (<p>{price}</p>) :
              (<input id={_id} name='price' className={s.input} value={price} disabled={!isShow} onChange={onChange}/>)
              }</td>
              <td className={s.threeSix}>
                {result}
                {userRole && (
                 <button className={s.buttonDeletePosition} 
                onClick={() => {
                  isDelete = !isDelete;
                  addIsToggle(_id, isDelete, 'delete');
                }
                }>
                  <Delete width={"20"} height={"20"}/>
                </button>  

               )}

              {isDelete && (
                <div className={s.deleteModalContainer}>
                  <h4>{`Ви справді бажаєте видалити: ${title}`}</h4>
                  <ul className={s.buttonContainer }>
                      <li><button
                      className={s.onDelete}
                      onClick={() => {
                          isDelete = !isDelete;
                          addIsToggle(_id, isDelete, 'delete');
                          deletePositionFn(item._id, data._id,  id)
                      }}
                      >Так</button></li>
                      <li><button
                      className={s.noDelete}
                      onClick={() => {
                          isDelete = !isDelete;
                          addIsToggle(_id, isDelete, 'delete');
                      }}
                      >Ні</button></li>
                  </ul>
              </div>   
              )}
                            
                </td>
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

    
      <div className={s.total}>
        <p>Витрачено на матеріали:</p>
        {data?.materialsTotal && (
      <p>{data?.materialsTotal}</p> )}
    </div> 
   
    
       <div className={s.total}>
        <p>Аванс:            </p>
        {data?.advancesTotal && (
      <p>{data?.advancesTotal}</p>)}
    </div>
    
    
     <div div className={s.total}>
      <p>До оплати:</p>
      {data?.general && (
      <p>{data?.general}</p>)}
    </div> 
    
    
   
   
    {showPosition && (
     <Modal><AddPosition isShowModal={handleTogglePosition} add={addFunction} /></Modal> 
    )}

     {updateEstimateModal && (
     <Modal><UpdateEstimate isShowModal={handleToggleUpdateEstimate} idData={newUpdateEstimate} /></Modal> 
    )}

    {showEstimate && (<Modal><AddEstimate idData={id} isShowModal={handleToggleEstimate}/></Modal>)}
    
    
    
  </div>
  )
}
</>
    
  );
}

export default ProjectItem;

