import { useState } from 'react';
import {useGetPriceQuery, useDeletePriceMutation} from "../../redux/price/priceApi";
import Add from "../Icons/Add/Add";
import Modal from "../Modal/Modal";
import AddPrice from "../AddPrice/AddPrice";
import Delete from '../Icons/Delete/Delete';
import s from "./PriceList.module.scss";

function PriceList() {
const [showModal, serShowModal] = useState(false);
 const {data} = useGetPriceQuery();
 const [deletePrice] = useDeletePriceMutation();

 const handleToggleAddPrice = () => {
    serShowModal(showModal => !showModal);
}

// const onDeletePrice = id => deletePrice(id);
 
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
			<td className={s.rowOne}>
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

     </div>
    );
  }
  
  export default PriceList;