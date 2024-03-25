import { NavLink} from 'react-router-dom';
import { useState, useEffect } from 'react';
import {useGetProjectsQuery} from "../../../redux/projectSlice/projectSlice";
import {useAddAllowMutation, useDeleteAllowMutation} from "../.././../redux/auth/authApi";
import {useCurrentQuery} from "../../../redux/auth/authApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '../../Modal/Modal';
import s from "./ProfileProjects.module.scss"
import Allow from '../../Allow/Allow';

function ProfileProjects() {
    const { data: userData } = useCurrentQuery(); 
    const [showModal, setShowModal] = useState(false); 
    const [idPro, setIdPro] = useState('');
    const {data} = useGetProjectsQuery();
    const [addAllow] = useAddAllowMutation();
    const [deleteAllow] = useDeleteAllowMutation();
    const [userRole, setUserRole] = useState(false);

    useEffect(() => {
        if (userData) {
          const role = userData?.user?.role;
          const isUserRole = role !== "customer";
             setUserRole(isUserRole);
        }   
    }, [userData, userRole]); 

   


    const handleToggleModal = async (id) => {
         
        setShowModal(showModal => !showModal);
        await setIdPro(id);
        
      }

    const allowSubmit = async (allowObj, name) => {
        
        if(name === "allow") { 
            const res = await addAllow({ id: idPro, newData: allowObj });
            if(res.error) {
                toast.error(res.error.data.message)
            } else {
               toast(`Дозвіл до кошторису користувача з email: ${allowObj.email} надано`);  
            }
                     }
        if(name === "notAllow") {
            const res = await deleteAllow({id: idPro, newData: allowObj})
            if(res.error) {
                toast.error(res.error.data.message)
            } else{
            toast(`Дозвіл до кошторису користувача з email: ${allowObj.email}  скасовано`);
        }}
    }
    return(
       <div className={s.projectsListContainer}>
         <ToastContainer draggable={true} />
        <h4>Список кошторисів</h4>
        <ul>
            {data && data.map(({_id, title, description }) => (
             <li className={s.listItem} key={_id}>
                <h4>{title}</h4>
                <p>{description}</p>
                {userRole && (
                  <button className={s.allowButton} onClick={() => handleToggleModal(_id)}>Дозвіл</button>  
                )}
                
                <NavLink className={s.projectLink} to={`/projects/${_id}`}>Детальніше</NavLink>
            </li>   
            ))}
            
        </ul>
        {showModal && ( <Modal onModal={handleToggleModal}><Allow isShowModal={handleToggleModal} allowFu={allowSubmit} id={idPro}/></Modal>)}
    </div>  
    )
   
}
export default ProfileProjects;