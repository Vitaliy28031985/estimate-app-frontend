import ProfilePage from "../../components/Profile/Profile";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Profile() {
 
    return (
      <div>
         <ToastContainer draggable={true} />
    <ProfilePage/>
    
     
     </div>
    );
  }
  
  export default Profile;