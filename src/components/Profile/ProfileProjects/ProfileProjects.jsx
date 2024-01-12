import { NavLink} from 'react-router-dom';
import {useGetProjectsQuery} from "../../../redux/projectSlice/projectSlice";
import s from "./ProfileProjects.module.scss"
function ProfileProjects() {
    const {data} = useGetProjectsQuery();
    
    return(
       <div className={s.projectsListContainer}>
        <h4>Список кошторисів</h4>
        <ul>
            {data && data.map(({_id, title, description }) => (
             <li className={s.listItem} key={_id}>
                <h4>{title}</h4>
                <p>{description}</p>
                <NavLink className={s.projectLink} to={`/projects/${_id}`}>Детальніше</NavLink>
            </li>   
            ))}
            
        </ul>
    </div>  
    )
   
}
export default ProfileProjects;