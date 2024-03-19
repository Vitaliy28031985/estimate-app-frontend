import { useParams, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useGetProjectByIdQuery } from '../../redux/projectSlice/projectSlice';
import s from "./AdvancesItem.module.scss";

function AdvancesItemCustomer() {
    const { id } = useParams();
    const { data: project} = useGetProjectByIdQuery(id);
    const [data, setData] = useState(project);
 

  useEffect(() => {
    setData(project);  
}, [project]); 


    return (
        <div>
           <ul className={s.linksList}>
        <li className={s.buttonNav}><NavLink className={s.buttonNavLink} to={`/projects/${data?._id}`}>Кошторис</NavLink></li>
        <li className={s.buttonNav}><NavLink className={s.buttonNavLink} to={`/materials/${data?._id}`}>Матеріали</NavLink></li>
        <li className={s.buttonNavCurrent}>Аванс</li>
      </ul>

      

      <div className={s.buttonsContainer}>
      <h1 className={s.title}>Аванс</h1>
       
      </div>
      <table className={s.iksweb}>
                <tbody>
                <tr className={s.titleRow}>
           <td className={s.oneRow}>№ з/п.</td>
                 <td className={s.threeRow}>Коментар</td>
                 <td className={s.threeRow}>Дата</td>
                 <td className={s.threeRow}>Сума в грн.</td>
             </tr>

                  {data?.advances &&
                    data?.advances.map(({id, comment, date, sum}, index) => (
                <tr key={id} className={s.dataRow}>
                <td className={s.oneRow}>
                  {index + 1}
                    </td>
                       
                <td className={s.threeRow}><p>{comment}</p></td>
                <td className={s.threeRow}><p>{date}</p></td>
                <td className={s.threeRow}><p>{sum}</p></td>
                      </tr>
                    ))}

                  <tr className='title-row'>
                    <td colSpan='3'>Всього:</td>
                    <td className={s.threeSix}>{data?.advancesTotal}</td>
                  </tr>
                </tbody>
              </table>
        </div>
    )
}

export default AdvancesItemCustomer;