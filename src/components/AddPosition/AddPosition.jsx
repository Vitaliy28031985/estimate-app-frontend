import { useState } from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Close from "../Icons/Close/Close";
import Select from "./Select/Select";
import Input from "./Input/Input";
import s from "./AddPosition.module.scss"

function AddPosition({isShowModal, add}) {
  const [toggleForm, setToggleForm] = useState(false)
  
 const  handleToggleModal = () => {
    setToggleForm(toggleForm => !toggleForm);
}

    return(
<div className={s.container}>

<button className={s.closeButton} type="button" onClick={isShowModal}>
       <Close width={"24"} height={"24"}/>
    </button>

<ToastContainer draggable={true} />



{!toggleForm ? (<Select  isShowModal={isShowModal} add={add}/>) : (<Input isShowModal={isShowModal} add={add}/>)}

{!toggleForm ?  
       (<div className={s.positionContainer}><p>Ви хочите додати позицію якої немає в прайсі ?</p><button type='button' onClick={handleToggleModal}>Прейти щоб додати</button></div>
    ) :  
   (<div className={s.positionContainer}><p>У вас є ця позиція в прайсі?</p><button type='button' onClick={handleToggleModal}>Прейти щоб додати</button></div>
    )
    }

</div>
    )
}

export default AddPosition;