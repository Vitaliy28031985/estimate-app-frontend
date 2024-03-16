import { useState } from 'react';
import Register from "./Register/Register";
import AuthorizationForm from "./AuthorizationForm/AuthorizationForm"
import Close from "../Icons/Close/Close"
import s from "./Register.module.scss";

function Authorization({showRegister, forModal}) {

    const [changeAuthorization, setChangeAuthorization] = useState(false)
   
    const handleToggleAuthorization = () => {
        setChangeAuthorization(changeAuthorization => !changeAuthorization);
    }

return (
    <>
    {forModal ? (
        <div className={s.container}>
        <button type='button' onClick={showRegister} className={s.closeButton}>
        <Close width={"24"} height={"24"}/>
        </button>
        {!changeAuthorization ? <AuthorizationForm showRegister={showRegister} forModal={forModal}/> :  <Register showRegister={showRegister} forModal={forModal}/>}

       {!changeAuthorization ?  
       (<div className={s.registerContainer}><p>У вас ще немає акаунту?</p><button type='button' onClick={handleToggleAuthorization}>Зареєструватись</button></div>
    ) :  
   (<div className={s.registerContainer}><p>У вас вже є акаунт?</p><button type='button' onClick={handleToggleAuthorization}>Авторизуватись</button></div>
    )
    }
     </div> 
    ) : (
        <div>
        {!changeAuthorization ? <AuthorizationForm showRegister={showRegister} forModal={forModal}/> :  <Register showRegister={showRegister} forModal={forModal}/>}

       {!changeAuthorization ?  
       (<div className={s.registerContainer}><p>У вас ще не має акаунту?</p><button type='button' onClick={handleToggleAuthorization}>Зареєструватись</button></div>
    ) :  
   (<div className={s.registerContainer}><p>У вас вже є акаунт?</p><button type='button' onClick={handleToggleAuthorization}>Увійти</button></div>
    )
    }
        </div>
    )}
     </> 
)
}

export default Authorization;