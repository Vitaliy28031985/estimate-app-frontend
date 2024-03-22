import {useLoginMutation} from "../../../redux/auth/authApi";
import {setCredentials} from "../../../redux/auth/authSlice";
import {priceApi} from "../../../redux/price/priceApi";
import {projectsApi} from "../../../redux/projectSlice/projectSlice";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Block from "../../Icons/Block/Block"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from "../Register.module.scss";



function AuthorizationForm({showRegister, forModal}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState("password")


    const dispatch = useDispatch();
    const [login] = useLoginMutation();
    
    const loginEl = {
      password,
      email
    };

    const changeTypePassword = () => {
      if(showPassword === "password") {
        setShowPassword("text");
      } else {
        setShowPassword("password");
      }
    }


    const handleChange = e => {
        const {name, value,} = e.currentTarget;
        switch (name) {
          
           case 'email':
            setEmail(value);
            break;
            case 'password':
            setPassword(value);
            break;
        
           default:
           return;  
        }
     }

     const handleSubmit = async e => {
        e.preventDefault();
        if( email === '' || password === '') {
            toast("Заповніть усі поля")
            return
        }
        if(password.length < 6) {
            toast("введіть пароль з 6 і більше символів")
            return
        }
        try {
            const dataAnswers = await login(loginEl).unwrap();
            dispatch(setCredentials(dataAnswers));
            dispatch(projectsApi.util.resetApiState());
            dispatch(priceApi.util.resetApiState());
            toast(`Користувача з Email: ${email} успішно увійшов в систему!`)

          } catch (error) {
            toast.error(`Користувача з Email: ${email} не існує, або Ви ввели невірний пароль!`, error);
          }
    console.log({email, password});
    setEmail('')
    setPassword('')
    if(forModal){
        showRegister();  
      }
    }

return (
    
        <div>
            <ToastContainer draggable={true} />
        <h1 className={s.title}>Увійти</h1>
        <form action=""
        onSubmit={handleSubmit}
        >
            <div>
            <label for="email" className={s.label}>Email</label>
            <input type="email" name="email"
            id="email"
            className={s.input}
            onChange={handleChange}
            value={email}
            />
            </div>
            <div>
            <label for="password" className={s.label}>Пароль</label>
            <div className={s.inputPasswordContainer}>
            <input id="password" type={showPassword} name="password"
            onChange={handleChange}
            value={password}
            />
            <button className={s.inputPasswordContainerButton} onClick={changeTypePassword} type="button"><Block width={"24"} height={"24"}/></button>
            </div>
            </div>
            
            <button className={s.button}>Увійти</button>
        </form>
        </div>
    
)
}

export default AuthorizationForm;