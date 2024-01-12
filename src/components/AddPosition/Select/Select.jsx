import { useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useGetPriceQuery} from "../../../redux/price/priceApi";
import Close from "../../Icons/Close/Close";
import s from "./Select.module.scss"

function Select({isShowModal, add}) {
  const {data} = useGetPriceQuery()

  const [title, setTitle] = useState('');
  const [unit, setUnit] = useState('');
  const [number, setNumber] = useState('');
 

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
    
       default:
       return;  
    }
 }


 const handleSubmit = async e => {
  e.preventDefault();
  if(title == 'empty' || unit === '' || number === '' || title === '') {
    toast("Усі поля мають бути заповнені")
    return;
  }

  const currentPrice = await data?.filter(item => item.title === title);
 
const priceCurrent = currentPrice[0].price

await add({title, unit, number: Number(number), price: priceCurrent})


    setTitle('');
    setNumber('');
    setUnit('');
    isShowModal();
}
 

    return(

<form action="" onSubmit={handleSubmit}>
<select className={s.input}  name="title" id="title" onChange={handleChange}>
{data && data?.map(({title, price}) =>
(
   <option value={title} >{title}</option>
  
))}
 <option value="empty" selected>Вибери вид роботи</option>
</select>
<div>
  <p className={s.label}>Одиниця</p>
  <input className={s.input} type="text" value={unit} name="unit" onChange={handleChange} />
</div>
<div>
  <p className={s.label}>Кількість</p>
  <input className={s.input} type="number" value={number} name="number" onChange={handleChange} />
</div>
<button className={s.button}>Додати</button>
</form>

    )
}

export default Select;