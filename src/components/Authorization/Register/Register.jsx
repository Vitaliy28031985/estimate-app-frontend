import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import {useSignupMutation, useLoginMutation} from "../../../redux/auth/authApi";
import {setCredentials} from "../../../redux/auth/authSlice";
import {priceApi} from "../../../redux/price/priceApi";
import {projectsApi} from "../../../redux/projectSlice/projectSlice";
import Block from "../../Icons/Block/Block"
import s from "../Register.module.scss";


function Register({showRegister, forModal}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('')
    const [showPassword, setShowPassword] = useState("password")

    const changeTypePassword = () => {
      if(showPassword === "password") {
        setShowPassword("text");
      } else {
        setShowPassword("password");
      }
    }


    const registerEl = {
        name,
        email,
        role,
        password,
        phone, 
      }

const dispatch = useDispatch();
const [singup] = useSignupMutation();
const [login, ] = useLoginMutation();

const loginEl = {
    password,
    email
  };

    const handleChange = e => {
        const {name, value} = e.currentTarget;
        switch (name) {
           case 'name':
           setName(value);
           break;
           case 'email':
            setEmail(value);
            break;
            case 'phone':
            setPhone(value);
            break;
            case 'roleUser':
            setRole(value);
            break;
            case 'password':
            setPassword(value);
            break;
            case 'passwordTwo':
            setPasswordTwo(value);
           break;
          
           default:
           return;  
        }
     }
     console.log(role);
     const handleSubmit = async e => {
        e.preventDefault();
        if(name === '' || email === '' || phone === '' || role === '' || password === '' || passwordTwo === '' ) {
            toast("Заповніть усі поля");
            return
        }
        if(password !== passwordTwo) {
            toast("введіть oднакові паролі")
            return
        }
        if(password.length < 6) {
            toast("введіть пароль з 6 і більше символів")
            return
        }

      

    try {
        const user = await singup(registerEl).unwrap();
        const dataAnswers = await login(loginEl).unwrap();
        dispatch(setCredentials(user));
        dispatch(setCredentials(dataAnswers));
        dispatch(projectsApi.util.resetApiState());
        dispatch(priceApi.util.resetApiState());
        toast("Реєстрація пройшла успішно");
      } catch (error) {
        toast.error('Sorry, something went wrong', error);
      }
    setEmail('')
    setName('')
    setPhone('');
    setRole('');
    setPassword('')
    setPasswordTwo('')
   
      
    if(forModal){
      showRegister();  
    }
    }

return (
    
        <div>
            <ToastContainer />
        <h1 className={s.title}>Реєстрація</h1>
        <form action=""
        onSubmit={handleSubmit}
        >
            <div>   
            <label for="name" className={s.label}>Ім'я</label>
            <input type="text" id='name' name="name"
            className={s.input}
            onChange={handleChange}
            value={name}
            />
            </div>
            <div>
            <label for="email" className={s.label}>Email</label>
            <input type="email" name="email" id='email'
            className={s.input}
            onChange={handleChange}
            value={email}
            />
            </div>
            <div>   
            <label for="phone" className={s.label}>Телефон</label>
            <input type="text" name="phone" id='phone'
            className={s.input}
            onChange={handleChange}
            value={phone}
            />
            </div>
            <div className={s.radioContainer}>
              <p className={s.label}>Роль</p>
              <div >
            <label>
              <input type="radio" name="roleUser" checked={role === "customer"} onChange={handleChange} value="customer" />
             Замовник
             </label>
             <label>
             <input type="radio" name="roleUser" checked={role === "executor"}  onChange={handleChange} value="executor" />
              Виконавець
              </label>
            </div>
            </div>
            <div>
            <label for="password" className={s.label}>Пароль</label>
            <div className={s.inputPasswordContainer}>
            <input type={showPassword} name="password" id='password'
            // className={s.input}
            onChange={handleChange}
            value={password}
            />
            <button className={s.inputPasswordContainerButton} onClick={changeTypePassword} type="button"><Block width={"24"} height={"24"}/></button>
            </div>
            </div>
            <div>
            <label for="passwordTwo" className={s.label}>Ще раз введіть пароль</label>
            <div className={s.inputPasswordContainer}>
            <input type={showPassword} name="passwordTwo" id='passwordTwo'
            // className={s.input}
            onChange={handleChange}
            value={passwordTwo}
            />
            <button className={s.inputPasswordContainerButton} onClick={changeTypePassword} type="button"><Block width={"24"} height={"24"}/></button>
            </div>
            </div>
            <button className={s.button}>Зареєструватися</button>
        </form>
        </div>
    
)
}

export default Register;