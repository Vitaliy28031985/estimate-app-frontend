
import Close from "../Icons/Close/Close";
import { useState} from 'react';
import { useDispatch } from 'react-redux';
import {  toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useUpdatePositionMutation} from "../../redux/position/positionApi";
import {projectsApi} from "../../redux/projectSlice/projectSlice";
import s from "./UpdatePosition.module.scss"

function UpdatePosition({isShowModal, idsData, newPosition}) {
    const[mutate] = useUpdatePositionMutation();
    const dispatch = useDispatch();
    
  const [title, setTitle] = useState(newPosition?.title);
  const [unit, setUnit] = useState(newPosition.unit);
  const [number, setNumber] = useState(newPosition.number);
  const [price, setPrice] = useState(newPosition.price);

  
  console.log(title);


  const handleChange = e => {
    const {name, value,} = e.currentTarget;
    switch (name) {
      
       case 'title':
        setTitle(value);
        break;
        case 'unit':
        setUnit(value);
        break;
        case 'number':
        setNumber(value);
        break;
        case 'price':
        setPrice(value);
        break;
    
       default:
       return;  
    }
 }


 const handleSubmit = async e => {
  e.preventDefault();
  if(unit === '' || number === '' || title === '' || price === '') {
    toast("Усі поля мають бути заповнені")
    return;
  } 
const newPositions = {title, unit, number: Number(number), price: Number(price)}

await mutate([idsData[1], idsData[0], idsData[2], newPositions]);
dispatch(projectsApi.util.resetApiState());
    setTitle('');
    setNumber('');
    setUnit('');
    isShowModal();
}
 

    return(
<div className={s.container}>

<button className={s.closeButton} type="button" onClick={isShowModal}>
       <Close width={"24"} height={"24"}/>
    </button>

<ToastContainer draggable={true} />
<form action="" onSubmit={handleSubmit}>
<div>
  <p className={s.label}>Назва роботи</p>
  <input className={s.input}  name="title" value={title} id="title" onChange={handleChange}/>
</div>
<div>
  <p className={s.label}>Одиниця</p>
  <input className={s.input} type="text" value={unit} name="unit" onChange={handleChange} />
</div>
<div>
  <p className={s.label}>Кількість</p>
  <input className={s.input} type="number" value={number} name="number" onChange={handleChange} />
</div>
<div>
  <p className={s.label}>Ціна</p>
  <input className={s.input} type="number" value={price} name="price" onChange={handleChange} />
</div>

<button className={s.button}>Додати</button>
</form>
</div>
    )
}

export default UpdatePosition;