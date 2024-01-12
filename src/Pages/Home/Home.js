import Authorization from "../../components/Authorization/Authorization"
function Home() {
 
  return (
    <div>
   <h2>Сервіс для створення кошторисів</h2>
 
   <Authorization forModal={false}/>
   </div>
  );
}

export default Home;