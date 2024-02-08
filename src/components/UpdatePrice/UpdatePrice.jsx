
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Close from "../Icons/Close/Close";
import {useUpdatePriceMutation} from "../../redux/price/priceApi";
import s from "./UpdatePrice.module.scss";

function UpdatePrice({isShowModal, getDataPrice}) {
    const [title, setTitle] = useState(getDataPrice.nawTitle);
    const [price, setPrice] = useState(getDataPrice.nawPrice);

    const[mutate] = useUpdatePriceMutation()

    const handleChange = e => {
        const {name, value,} = e.currentTarget;
        switch (name) {
          
           case 'title':
            setTitle(value);
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
        if( title === '' || price === '') {
            toast("Заповніть усі поля");
            return
        }
  
        try {
    const newPosition = {title, price: Number(price)}
     console.log(newPosition)
    mutate({id: getDataPrice.nawId, newData: newPosition});
           
            
          } catch (error) {
            alert(`User with the title: ${title} does not exist!`, error);
          }
    setTitle('')
    setPrice('')
   isShowModal()
    }

return(
    <div className={s.container}>
    <ToastContainer draggable={true} />
    <button className={s.closeButton} type="button" onClick={isShowModal}>
       <Close width={"24"} height={"24"}/>
    </button>
    <form action="" onSubmit={handleSubmit}>
       <div>
            <p className={s.label}>Найменування</p>
            <input type="text" name="title"
            className={s.input}
            onChange={handleChange}
            value={title}
            />
        </div>
        <div>
            <p className={s.label}>Ціна</p>
            <input type="number" name="price"
            className={s.input}
            onChange={handleChange}
            value={price}
            />
        </div>
        <button className={s.button}>Додати в прайс</button>
       </form>
    </div>
)
}
export default UpdatePrice