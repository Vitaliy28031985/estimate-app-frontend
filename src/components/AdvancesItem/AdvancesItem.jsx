import { useParams, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useGetProjectByIdQuery } from '../../redux/projectSlice/projectSlice';
import s from "./AdvancesItem.module.scss";

function AdvancesItem() {
    const { id } = useParams();
    const { data: project, error } = useGetProjectByIdQuery(id);
    const [data, setData] = useState(project);

  useEffect(() => {
    setData(project); 
}, [project]); 

console.log(data.materials);

    return (
        <div>
           <ul className={s.linksList}>
        <li><NavLink to={`/projects/${data?._id}`}>Кошторис</NavLink></li>
        <li><NavLink to={`/materials/${data?._id}`}>Матеріали</NavLink></li>
      </ul>

      <h1 className={s.title}>Аванс</h1>

      <table className={s.iksweb}>
                <tbody>
                <tr className={s.titleRow}>
           <td className={s.oneRow}>№ з/п.</td>
                 <td className={s.threeRow}>Коментар</td>
                 <td className={s.threeRow}>Дата</td>
                 <td className={s.threeRow}>Сума в грн.</td>
             </tr>

                  {data?.advances &&
                    data?.advances.map(({id, comment, date, sum, isShow = false }, index) => (
                <tr key={id} className={s.dataRow}>
                <td className={s.oneRow}>
                  {index + 1}
                    </td>
                       
                <td className={s.threeRow}><input id={id} name='order'  className={s.input} value={comment} disabled={!isShow} /></td>
                <td className={s.threeRow}><input id={id} name='date' className={s.input} value={date} disabled={!isShow} /></td>
                <td className={s.threeRow}><input id={id} name='sum' className={s.input} value={sum} disabled={!isShow} /></td>
                      </tr>
                    ))}

                  <tr className='title-row'>
                    <td colSpan='3'>Всього:</td>
                    <td className={s.threeSix}>{data?.materialsTotal}</td>
                  </tr>
                </tbody>
              </table>

        </div>
    )
}

export default AdvancesItem;