import { useState } from 'react';
import { NavLink} from 'react-router-dom';
import { useGetProjectsQuery, useDeleteProjectMutation } from '../../redux/projectSlice/projectSlice';
import Add from '../Icons/Add/Add';
import AddProject from "../AddProject/AddProject";
import Modal from '../Modal/Modal';
import s from "./ProjectsList.module.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ProjectsList() {
  const [showProject, setShowProject] = useState(false)
const {data} = useGetProjectsQuery();
const [deleteProject] = useDeleteProjectMutation();

const handleToggleProject = () => {
  setShowProject(showProject => !showProject);
}

const onDeleteProject = id => {
  deleteProject(id);
  toast("Кошторис видалено");
};


    return (
      <div >
        <ToastContainer draggable={true} />
        <div className={s.titleContainer}>
     <h1>Кошториси об'єктів</h1>
        <button onClick={handleToggleProject} className={s.addButton}><Add width={"24"} height={"24"}/></button>
     
     </div>
   <ul className={s.projectContainer}>
    {data && data.map(({_id, title, description, total}) => (
         <li className={s.projectItem} key={_id} id={_id}>
        <h2 className={s.projectTitle}>{title}</h2>
        <p className={s.projectDescription}>{description}</p>
        <p className={s.projectPrice}>Загальна сума кошторису: {total} грн.</p>
        <div className={s.buttonContainer}>
        <NavLink className={s.projectLink} to={`/projects/${_id}`}>Детальніше</NavLink>
        <button className={s.projectLink} onClick={() => onDeleteProject(_id)}>Видалити</button>
        </div>
    </li> 
    ))}
  
 
   </ul>
   {showProject && ( <Modal><AddProject isShowModal={handleToggleProject}/></Modal>)}
    
     </div>
    );
  }
  
  export default ProjectsList;