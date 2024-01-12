import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../redux/auth/authSlice';
import s from "./ModalMenu.module.scss";
function ModalMenu() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
return(
    <div className={s.menuButton}>
        <ul className={s.links}>
                {!isLoggedIn && (
                   <li>
                <NavLink className={({ isActive }) => `link` + (isActive ? ` link-min` : '')} to='/'>Домашня</NavLink>
                </li>  
                )}
                 {!isLoggedIn && (
                   <li>
                <NavLink className={({ isActive }) => `link` + (isActive ? ` link-min` : '')} to='about'>Про проект</NavLink>
                </li>  
                )}
                {isLoggedIn && (
                 <li>
                <NavLink className={({ isActive }) => `link` + (isActive ? ` link-min` : '')} to='/price'>Прайс</NavLink>
                </li>   
                )}
                {isLoggedIn && (
                  <li>
                <NavLink className={({ isActive }) => `link` + (isActive ? ` link-min` : '')} to='/profile'>Профіль користувача</NavLink>
                </li>  
                )}
                {isLoggedIn && (
                 <li> 
                 <NavLink className={({ isActive }) => `link` + (isActive ? ` link-min` : '')} to='/projects'>Кошториси</NavLink>
                 </li>
                )}
                
            </ul>   
    </div>
)
}

export default ModalMenu;