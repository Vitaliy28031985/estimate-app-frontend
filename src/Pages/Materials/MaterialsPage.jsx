import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useCurrentQuery} from "../../redux/auth/authApi";
import MaterialItem from "../../components/MaterialItem/MaterialItem";
import MaterialItemCustomer from "../../components/MaterialItem/MaterialItemCustomer";
function MaterialsPage() {
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
        <div>
            <ToastContainer draggable={true} />
            {userRole ? (<MaterialItem/>) : (<MaterialItemCustomer/>)}
            
        </div>
    )
}
export default MaterialsPage