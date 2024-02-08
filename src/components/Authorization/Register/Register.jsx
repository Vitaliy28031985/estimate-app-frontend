import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import {useSignupMutation} from "../../../redux/auth/authApi";
import {setCredentials} from "../../../redux/auth/authSlice";
import s from "../Register.module.scss";


function Register({showRegister, forModal}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('')

    const registerEl = {
        name,
        email,
        password,
        phone, 
      }

const dispatch = useDispatch();
const [singup] = useSignupMutation();
// const [login, ] = useLoginMutation();

// const loginEl = {
//     password,
//     email
//   };

    const handleChange = e => {
        const {name, value,} = e.currentTarget;
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

     const handleSubmit = async e => {
        e.preventDefault();
        if(name === '' || email === '' || phone === '' || password === '' || passwordTwo === '' ) {
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
        // const dataAnswers = await login(loginEl).unwrap();
        dispatch(setCredentials(user));
        // dispatch(projectsApi.util.resetApiState());
        // dispatch(priceApi.util.resetApiState());
        toast("Реєстрація пройшла успішно");
      } catch (error) {
        toast('Sorry, something went wrong', error);
      }
    setEmail('')
    setName('')
    setPhone('');
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
            <p className={s.label}>Ім'я</p>
            <input type="text" name="name"
            className={s.input}
            onChange={handleChange}
            value={name}
            />
            </div>
            <div>
            <p className={s.label}>Email</p>
            <input type="email" name="email"
            className={s.input}
            onChange={handleChange}
            value={email}
            />
            </div>
            <div>   
            <p className={s.label}>Телефон</p>
            <input type="text" name="phone"
            className={s.input}
            onChange={handleChange}
            value={phone}
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
            <div>
            <p className={s.label}>Ще раз введіть пароль</p>
            <input type="password" name="passwordTwo"
            className={s.input}
            onChange={handleChange}
            value={passwordTwo}
            />
            </div>
            <button className={s.button}>Зареєструватися</button>
        </form>
        </div>
    
)
}

export default Register;