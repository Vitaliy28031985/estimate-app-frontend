import { useParams, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useGetProjectByIdQuery } from '../../redux/projectSlice/projectSlice';
import s from "./MaterialItem.module.scss";

function MaterialItemCustomer() {
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
        <li className={s.buttonNavCurrent}>Матеріали</li>
        <li className={s.buttonNav}><NavLink className={s.buttonNavLink} to={`/advances/${data?._id}`}>Аванс</NavLink></li>
      </ul>
<div className={s.buttonsContainer}>
      <h1 className={s.title}>Матеріали</h1>
    
      
</div>
      <table className={s.iksweb}>
                <tbody>
                <tr className={s.titleRow}>
           <td className={s.oneRow}>№ з/п.</td>
                 <td className={s.twoRow}>Назва</td>
                 <td className={s.threeRow}>№ рахунку</td>
                 <td className={s.threeRow}>Дата</td>
                 <td className={s.threeRow}>Сума в грн.</td>
             </tr>

                  {data?.materials &&
                    data?.materials.map(({id, title, order, date, sum}, index) => (
                <tr key={id} className={s.dataRow}>
                <td className={s.oneRow}>
                  {index + 1}</td>
                <td><p>{title}</p></td>                 
                <td className={s.threeRow}><p>{order}</p></td>
                <td className={s.threeRow}><p>{date}</p></td>
                <td className={s.threeRow}><p>{sum}</p></td>
                      </tr>
                    ))}
                  <tr className='title-row'>
                    <td colSpan='4'>Всього:</td>
                    <td className={s.threeSix}>{data?.materialsTotal}</td>
                  </tr>
                </tbody>
              </table>
        </div>
    )
}

export default MaterialItemCustomer;