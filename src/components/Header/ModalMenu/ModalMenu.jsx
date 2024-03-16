import { NavLink } from 'react-router-dom';
import { useState,  useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../redux/auth/authSlice';
import {useCurrentQuery} from "../../../redux/auth/authApi";
import s from "./ModalMenu.module.scss";
function ModalMenu({handleToggle}) {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const { data: userData } = useCurrentQuery(); 
    const [userRole, setUserRole] = useState(false);
    
    useEffect(() => {  
      if (userData) {
        const role = userData?.user?.role;
        const isUserRole = role !== "customer";
           setUserRole(isUserRole);
      }   
  }, [userData, userRole]);
return(
    <div className={s.menuButton}>
        <ul className={s.links}>
                {!isLoggedIn && (
                   <li>
                <NavLink className={({ isActive }) => `link` + (isActive ? ` link-min` : '')} to='/'><div onClick={handleToggle}>Домашня</div></NavLink>
                </li>  
                )}
                 {!isLoggedIn && (
                   <li>
                <NavLink className={({ isActive }) => `link` + (isActive ? ` link-min` : '')} to='about'><div onClick={handleToggle}>Про проект</div></NavLink>
                </li>  
                )}
                {isLoggedIn && (
                 <li>
                  {userRole && (
                 <NavLink className={({ isActive }) => `link` + (isActive ? ` link-min` : '')} to='/price'><div onClick={handleToggle}>Прайс</div></NavLink>   
                  )}
                
                </li>   
                )}
                {isLoggedIn && (
                  <li>
                <NavLink className={({ isActive }) => `link` + (isActive ? ` link-min` : '')} to='/profile'><div onClick={handleToggle}>Профіль користувача</div></NavLink>
                </li>  
                )}
                {isLoggedIn && (
                 <li> 
                 <NavLink className={({ isActive }) => `link` + (isActive ? ` link-min` : '')} to='/projects'><div onClick={handleToggle}>Кошториси</div></NavLink>
                 </li>
                )}
                
            </ul>   
    </div>
)
}

export default ModalMenu;