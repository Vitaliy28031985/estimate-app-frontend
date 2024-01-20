import { useState} from 'react';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from "./Input.module.scss"

function Input({isShowModal, add}) {

  const [title, setTitle] = useState('');
  const [unit, setUnit] = useState('');
  const [number, setNumber] = useState('');
  const [price, setPrice] = useState('');
 


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
const newPosition = {title, unit, number: Number(number), price: Number(price)}
await add({title, unit, number: Number(number), price: Number(price)})
    console.log(newPosition)
    setTitle('');
    setNumber('');
    setUnit('');
    isShowModal();
}
 

    return(

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

    )
}

export default Input;