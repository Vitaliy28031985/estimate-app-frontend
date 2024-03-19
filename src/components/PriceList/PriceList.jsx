import { useState, useEffect } from 'react';
import {useGetPriceQuery, useUpdatePriceMutation, useDeletePriceMutation} from "../../redux/price/priceApi";
import {
    useGetUnitQuery,
    useDeleteUnitMutation,
    useUpdateUnitMutation} from "../../redux/unit/unitApi"; 
import Add from "../Icons/Add/Add";
import Modal from "../Modal/Modal";
import AddPrice from "../AddPrice/AddPrice";
import Delete from '../Icons/Delete/Delete';
import s from "./PriceList.module.scss";
import Update from '../Icons/Update/UpdateIcon';
import UpdateOk from '../Icons/Update/UpdateOk';
import AddUnit from '../AddUnit/AddUnit';

function PriceList() {
const [filter, setFilter] = useState('')
const [showModal, serShowModal] = useState(false);
const [showAddUnit, setShowAddUnit] = useState(false);

 const {data: price} = useGetPriceQuery();
 const [data, setData] = useState(price);
 const [deletePrice] = useDeletePriceMutation();
 const[mutate] = useUpdatePriceMutation();

 const {data: units} = useGetUnitQuery();
const [deleteUnit] = useDeleteUnitMutation()
 




 useEffect(() => {
    setData(price); 
}, [price]); 


 const handleToggleAddPrice = () => {
    serShowModal(showModal => !showModal);
}

const handleToggleAddUnit = () => {
    setShowAddUnit(showAddUnit => !showAddUnit);
}


const filterChange = e => setFilter(e.target.value);

const normalizeFilter = filter.toLowerCase();

const filteredContacts =  data?.filter(item =>
  item.title.toLowerCase().includes(normalizeFilter)) ?? [];

  const addIsToggle = (id, currentIsShow) => {
    setData(prevData => {
        const newData = prevData.map(price => {
            if (price._id === id) {
                return { ...price, isShow: currentIsShow };
            }
            return price; 
        });
    
        return newData; 
    });
};

const onChange = (e) => {
    const { name, value, id } = e.currentTarget;
    setData(prevData => {
        const newData = prevData.map(price => {
            if (price._id === id) {
                switch (name) {
                    case name:
                        return  {...price, [name]: value};
                    default:
                      return price;
                  }
            }
            return price; 
        });
    
        return newData; 
    });
}

 
    return (
    
      <div>

<input onChange={filterChange} value={filter} type="text" className={s.input} placeholder='Знайти' />

         <h1 className={s.title}>Прайс робіт</h1>

         <table className={s.iksweb}>
	<tbody>
		<tr className={s.tableMin}>
			<td className={s.rowOne}>Найменування робіт
            <button onClick={handleToggleAddPrice} className={s.buttonAdd}><Add width={"24"} height={"24"}/></button>
            </td>
			<td className={s.twoRow}>Ціна за одиницю в грн.</td>
		</tr>
        {data && filteredContacts?.map(({_id, title, price, isShow = false}) => (
        <tr key={_id}>
			<td className={s.rowOne} >
                   <button  
                  className={s.buttonUpdate}
                  onClick={() => {
                    isShow = !isShow;
                    addIsToggle(_id, isShow);
                    if(!isShow) {
                       mutate({id: _id, newData: {title, price}});
                    }
                    }}
                  >
                    {isShow ? (<UpdateOk width='22' height='22'/>) :
                    (<Update width='22' height='22'/>)
                    }
                  
                  </button>
                <input id={_id} name='title' className={s.inputTitle} value={title} disabled={!isShow} onChange={onChange} />
                </td>
			<td className={s.twoRow}> <input id={_id} name='price' className={s.inputPrice} value={price} disabled={!isShow} onChange={onChange} />
            <button className={s.buttonDelete} onClick={() => deletePrice(_id)}>
                <Delete width={"24"} height={"24"}/>
                </button>
            </td>
		</tr>    
        ))}
		
	</tbody>
</table>
{showModal && (<Modal><AddPrice isShowModal={handleToggleAddPrice}/></Modal>)}

<div>
<table className={s.iksweb}>
       <tbody>
		<tr className={s.tableMin}>
			<td className={s.rowOne}>Найменування одиниці
            <button onClick={handleToggleAddUnit} className={s.buttonAdd}><Add width={"24"} height={"24"}/></button>
            </td>
		</tr>
      {units && units.map(({_id, title}) => (
        <tr key={_id}>
            	  
           <td className={s.rowOne}>
            <div className={s.unitButtons}>
            <p>{title}</p>
            <div>
                
                <button className={s.deleteUnit} onClick={() => deleteUnit(_id)}><Delete width={"24"} height={"24"}/></button>
                <button className={s.deleteUnit}><Update width='22' height='22'/></button>
            </div>
            </div>
            </td> 	
		</tr>
        ))}	    
        </tbody>
</table>
</div>
{showAddUnit && (<Modal><AddUnit isShowModal={handleToggleAddUnit}/></Modal>)}
     </div>
    );
  }
  
  export default PriceList;