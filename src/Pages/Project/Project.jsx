import ProjectItem from "../../components/ProjectItem/ProjectItem";
import s from "./Project.module.scss"
function Project() {
 
    return (
      <div className={s.projectContainer}>
     <h1 className={s.titleEst}>КОШТОРИС</h1>
    
    <ProjectItem/>
     </div>
    );
  }
  
  export default Project;