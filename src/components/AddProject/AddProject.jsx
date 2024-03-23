import { useState } from 'react';
import Close from '../Icons/Close/Close';
import {useAddProjectsMutation, useGetProjectsQuery} from "../../redux/projectSlice/projectSlice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from "./AddProject.module.scss";

function AddProject({isShowModal}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
 
    const {data} = useGetProjectsQuery();
    const [addProjects] = useAddProjectsMutation();

    const handleChange = e => {
        const {name, value,} = e.currentTarget;
        switch (name) {
          
           case 'title':
            setTitle(value);
            break;
             case 'description':
            setDescription(value);
            break;
                  
           default:
           return;  
        }
     }


     const handleSubmit = async e => {
        e.preventDefault();

        if( title === '' || description === '') {
            toast.error("Заповніть усі поля");
            return
        }

        if (data.find(data => data.title === title)) {
            toast.error(`Кошторис ${title} вже існує`);
            setTitle('')
            setDescription('')
            return;
        }
        
        try {
    const newProject = {title, description}
         addProjects(newProject);
         toast(`Кошторис ${title} успішно створено` );
           
            
          } catch (error) {
            toast.error(`User with the title: ${title} does not exist!`, error);
          }
    setTitle('')
    setDescription('')
   isShowModal()
    }

    const disabled = title === '' && description === '';

return(
    <div className={s.container}>
    <button className={s.closeButton} type="button" onClick={isShowModal}>
       <Close width={"24"} height={"24"}/>
    </button>
    <form action="" onSubmit={handleSubmit}>
       <div>
            <p className={s.label}>Найменування</p>
            <input type="text" name="title"
            className={s.input}
            onChange={handleChange}
            value={title}
            />
        </div>
        <div>
            <p className={s.label}>Адреса об'єкту</p>
            <input type="text" name="description"
            className={s.input}
            onChange={handleChange}
            value={description}
            />
        </div>
        <button disabled={disabled} className={disabled ? "button-disabled" : "button"}>Додати кошторис</button>
       </form>
    </div>
)
}
export default AddProject;