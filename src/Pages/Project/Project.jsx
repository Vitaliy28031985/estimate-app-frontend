import { useState, useEffect } from 'react';
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import ProjectItemCustomer from "../../components/ProjectItem/ProjectItemCustomer";
import {useCurrentQuery} from "../../redux/auth/authApi";
import s from "./Project.module.scss"
function Project() {
  const { data: userData } = useCurrentQuery(); 
  const [userRole, setUserRole] = useState(false);

  useEffect(() => {
    
    if (userData) {
      const role = userData?.user?.role;
      const isUserRole = role !== "customer";
         setUserRole(isUserRole);
    } 
}, [userData, userRole]); 
 
    return (
      <div className={s.projectContainer}>
     <h1 className={s.titleEst}>КОШТОРИС</h1>
    {userRole ? (<ProjectItem/>) : (<ProjectItemCustomer/>)}
    
     </div>
    );
  }
  
  export default Project;