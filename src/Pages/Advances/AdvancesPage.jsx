import { useState, useEffect } from 'react';
import {useCurrentQuery} from "../../redux/auth/authApi";
import AdvancesItem from '../../components/AdvancesItem/AdvancesItem';
import AdvancesItemCustomer from '../../components/AdvancesItem/AdvancesItemCustomer';

function Advances() {
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
        <div>
            {userRole ? (<AdvancesItem/>) : (<AdvancesItemCustomer/>)}
        </div>
    )
}

export default Advances;