import { useState, useEffect } from 'react';
import { NavLink} from 'react-router-dom';
import { useGetProjectsQuery, useDeleteProjectMutation } from '../../redux/projectSlice/projectSlice';
import {useCurrentQuery} from "../../redux/auth/authApi";
import Add from '../Icons/Add/Add';
import AddProject from "../AddProject/AddProject";
import UpdateProject from "../UpdateProject/UpdateProject";
import Modal from '../Modal/Modal';
import s from "./ProjectsList.module.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from '../Icons/Update/UpdateIcon';


function ProjectsList() {
  

const [showProject, setShowProject] = useState(false)
const [showUpdateModal, setShowUpdateModal] = useState(false); 
const [newData, setNewData] = useState(null);
const {data} = useGetProjectsQuery();
const [deleteProject] = useDeleteProjectMutation();
const [userRole, setUserRole] = useState(false);

let nawId = '';
let nawTitle = '';
let nawDescription = '';

const { data: userData } = useCurrentQuery(); 


useEffect(() => {
  if (userData) {
    const role = userData?.user?.role;
    const isUserRole = role !== "customer";
       setUserRole(isUserRole);
  }
}, [userData, userRole]);



const handleToggleProject = () => {
  setShowProject(showProject => !showProject);
}

const handleToggleUpdateModal = () => {
  setShowUpdateModal(showUpdateModal => !showUpdateModal);
}

const onDeleteProject = id => {
  deleteProject(id);
  toast("Кошторис видалено");
};

const updateProject = async (id, title, description) => {
 nawId = await id;
 nawTitle = await title;
 nawDescription = await description;

 await setNewData({nawId, nawTitle, nawDescription})

 handleToggleUpdateModal();

} 

    return (
      <div >
        <ToastContainer draggable={true} />
        <div className={s.titleContainer}>
     <h1>Кошториси об'єктів</h1>
     {userRole && (
      <button onClick={handleToggleProject} className={s.addButton}><Add width={"24"} height={"24"}/></button>
     )}
        
     
     </div>
   <ul className={s.projectContainer}>
    {data && data.map(({_id, title, description, total}) => (
         <li className={s.projectItem} key={_id} id={_id}>
          {userRole && (
            <button className={s.buttonDelete} onClick={() => updateProject(_id, title, description)}>
          <Update width='20' height='20' /> 
          </button> 
          )}
         
        <h2 className={s.projectTitle}>{title}</h2>
        <p className={s.projectDescription}>{description}</p>
        <p className={s.projectPrice}>Загальна сума кошторису: {total} грн.</p>
        <div className={s.buttonContainer}>
        <NavLink className={s.projectLink} to={`/projects/${_id}`}>Детальніше</NavLink>
        {userRole && (
         <button className={s.projectLink} onClick={() => onDeleteProject(_id)}>Видалити</button> 
        )}
        
        </div>
    </li> 
    ))}
  
 
   </ul>
   {showProject && ( <Modal><AddProject isShowModal={handleToggleProject}/></Modal>)}
   {showUpdateModal && ( <Modal><UpdateProject isShowModal={handleToggleUpdateModal} getDataProject={newData}/></Modal>)}
     </div>
    );
  }
  
  export default ProjectsList;