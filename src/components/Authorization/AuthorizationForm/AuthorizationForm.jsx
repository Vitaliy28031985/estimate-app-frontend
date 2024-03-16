import {useLoginMutation} from "../../../redux/auth/authApi";
import {setCredentials} from "../../../redux/auth/authSlice";
import {priceApi} from "../../../redux/price/priceApi";
import {projectsApi} from "../../../redux/projectSlice/projectSlice";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from "../Register.module.scss";



function AuthorizationForm({showRegister, forModal}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const dispatch = useDispatch();
    const [login] = useLoginMutation();
    
    const loginEl = {
      password,
      email
    };



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

          } catch (error) {
            alert(`User with the email: ${email} does not exist!`, error);
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
            <p className={s.label}>Email</p>
            <input type="email" name="email"
            className={s.input}
            onChange={handleChange}
            value={email}
            />
            </div>
            <div>
            <p className={s.label}>Пароль</p>
            <input type="password" name="password"
            className={s.input}
            onChange={handleChange}
            value={password}
            />
            </div>
            
            <button className={s.button}>Увійти</button>
        </form>
        </div>
    
)
}

export default AuthorizationForm;