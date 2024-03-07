import { NavLink,  useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useLogoutMutation} from "../../redux/auth/authApi";
import { unsetCredentials, selectIsLoggedIn } from '../../redux/auth/authSlice';
import {priceApi} from "../../redux/price/priceApi";
import {projectsApi} from "../../redux/projectSlice/projectSlice";
import Burger from "../Icons/Burger/Burger";
import Close from "../Icons/Close/Close"
import ModalMenu from "./ModalMenu/ModalMenu";
import s from "./Header.module.scss"

function Header({showRegister}) {
    const [showMenu, setShowMenu] = useState(false);
    const dispatch = useDispatch();
    const [logout] = useLogoutMutation();
    const isLoggedIn = useSelector(selectIsLoggedIn);

    let location = useLocation();

    const isShowModalButton = location.pathname !== '/';
    const widthDisplay = window.innerWidth >= 1200;
   
     
    const handleToggle = () => {
        setShowMenu(showMenu => !showMenu);

    }

    const handleCloseNavMenu = async () => {
        await logout();
       dispatch(unsetCredentials());
       dispatch(projectsApi.util.resetApiState());
       dispatch(priceApi.util.resetApiState());
        };
   
    return(
        <header className={s.header}>
            {widthDisplay && (
             <ul className={s.links}>
                {!isLoggedIn && (
                   <li>
                <NavLink className={({ isActive }) => `link` + (isActive ? ` link-min` : '')} to='/'>ДОМАШНЯ</NavLink>
                </li>  
                )}
                 {!isLoggedIn && (
                   <li>
                <NavLink className={({ isActive }) => `link` + (isActive ? ` link-min` : '')} to='about'>ПРО ПРОЕКТ</NavLink>
                </li>  
                )}
                {isLoggedIn && (
                 <li>
                <NavLink className={({ isActive }) => `link` + (isActive ? ` link-min` : '')} to='/price'>ПРАЙС</NavLink>
                </li>   
                )}
                {isLoggedIn && (
                  <li>
                <NavLink className={({ isActive }) => `link` + (isActive ? ` link-min` : '')} to='/profile'>ПРОФІЛЬ КОРИСТУВАЧА</NavLink>
                </li>  
                )}
                {isLoggedIn && (
                 <li> 
                 <NavLink className={({ isActive }) => `link` + (isActive ? ` link-min` : '')} to='/projects'>КОШТОРИСИ</NavLink>
                 </li>
                )}
                
            </ul>   
            )}

            {!widthDisplay && (
                <div className={s.menuButtonContainer }>
                {!showMenu ? (
                 <button className={s.menuButton} onClick={handleToggle}>
                  <Burger width={"30"} height={"20"}/> 
                </button>   
                ) : (
                    <button className={s.menuButton} onClick={handleToggle}>
                  <Close width={"30"} height={"20"}/> 
                </button> 
                )}
                
                {showMenu && <ModalMenu handleToggle={handleToggle}/>}
                
                </div>
            )}
            
            <ul className={s.listButton}>
                {isLoggedIn ? (<li><button onClick={handleCloseNavMenu}  type="button" className={s.button}>Вийти з системи</button></li>)
                : isShowModalButton &&
                (<li><button onClick={showRegister} type="button" className={s.button}>Авторизуватись</button></li>)
                }
                
                
            </ul>
        </header>
    )
}
export default Header;