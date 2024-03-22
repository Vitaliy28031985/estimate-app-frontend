import Authorization from "../../components/Authorization/Authorization"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Home() {
 
  return (
    <div>
      <ToastContainer draggable={true} />
   <h2>Сервіс для створення кошторисів</h2>
 
   <Authorization forModal={false}/>
   </div>
  );
}

export default Home;