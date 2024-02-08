import { useState } from 'react';
import {useGetPriceQuery, useDeletePriceMutation} from "../../redux/price/priceApi";
import Add from "../Icons/Add/Add";
import Modal from "../Modal/Modal";
import AddPrice from "../AddPrice/AddPrice";
import UpdatePrice from "../UpdatePrice/UpdatePrice";
import Delete from '../Icons/Delete/Delete';
import s from "./PriceList.module.scss";

function PriceList() {
const [showModal, serShowModal] = useState(false);
const [showUpdate, setShowUpdate] = useState(false);
const [newData, setNewData] = useState(null);
 const {data} = useGetPriceQuery();
 const [deletePrice] = useDeletePriceMutation();

let nawId = '';
let nawTitle = '';
let nawPrice = '';

 const handleToggleAddPrice = () => {
    serShowModal(showModal => !showModal);
}

const handleToggleUpdatePrice = () => {
    setShowUpdate(showUpdate => !showUpdate);
}

const updatePrice = async (id, title, price) => {

nawId = await id;
nawTitle = await title;
nawPrice = await price;

await setNewData({nawId, nawTitle, nawPrice});
handleToggleUpdatePrice();
}
 
    return (
    
      <div>
         <h1 className={s.title}>Прайс робіт</h1>

         <table className={s.iksweb}>
	<tbody>
		<tr className={s.tableMin}>
			<td className={s.rowOne}>Найменування робіт
            <button onClick={handleToggleAddPrice} className={s.buttonAdd}><Add width={"24"} height={"24"}/></button>
            </td>
			<td className={s.twoRow}>Ціна за одиницю в грн.</td>
		</tr>
        {data && data?.map(({_id, title, price}) => (
        <tr key={_id}>
			<td className={s.rowOne} onClick={() => updatePrice(_id, title, price)}>
               <button className={s.buttonDelete} onClick={() => deletePrice(_id)}>
                <Delete width={"24"} height={"24"}/>
                </button> 
                {title} 
                </td>
			<td className={s.twoRow}>{price}</td>
		</tr>    
        ))}
		
	</tbody>
</table>
{showModal && (<Modal><AddPrice isShowModal={handleToggleAddPrice}/></Modal>)}
{showUpdate && (<Modal><UpdatePrice isShowModal={handleToggleUpdatePrice} getDataPrice={newData}/></Modal>)}

     </div>
    );
  }
  
  export default PriceList;