import { useParams, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import ForbiddenPage from '../../Pages/Forbidden/ForbiddenPage';
import { useGetProjectByIdQuery } from '../../redux/projectSlice/projectSlice';
import s from './ProjectItem.module.scss';

function ProjectItemCustomer() {
  const { id } = useParams();
  const { data: project, error } = useGetProjectByIdQuery(id);
  const [data, setData] = useState(project);
 

  useEffect(() => {
    setData(project);
   
}, [project]); 


pdfMake.vfs = pdfFonts.pdfMake.vfs;



const generatePdf = () => {
  if (data) {
    const content = [
      { text: `Назва об'єкту:          ${data?.title}`, fontSize: 25 },
      { text: `Адреса:                                                 ${data?.description}`, fontSize: 14, marginTop: 10 },
    ];

    data.estimates.forEach((estimate) => {
      content.push(
        { text: estimate?.title, fontSize: 16, bold: true, marginTop: 30, marginBottom: 10, marginLeft: 200},
        {
          table: {
            headerRows: 1,
            widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
            body: [
              ['№ з/п.', 'Назва', 'Одиниця', 'Кількість', 'Ціна в грн.', 'Сума в грн.'],
              ...(estimate?.positions?.map(
                ({ title, unit, price, number, result  }, index) => [
                  index + 1,
                  title || '',        
                  unit || '',          
                  number || '',
                  price || '',        
                  result || '',       
                ]
              ) || []),
              [{}, {}, {}, {}, 'Всього:', estimate?.total],
              
            ],
          },
          layout: 'lightHorizontalLines',
          style: 'tableExample', 

        }
      );
    });
    content.push({ text: `Загальна сума:                            ${data?.total}`, fontSize: 30, marginTop: 30},)
    content.push({ text: `Витрачено на матеріали:          ${data?.materialsTotal}`, fontSize: 30, marginTop: 30},)
    content.push({ text: `Аванс:                                             ${data?.advancesTotal}`, fontSize: 30, marginTop: 30},)
    content.push({ text: `До оплати:                                    ${data?.general}`, fontSize: 30, marginTop: 30},)
    const styles = {
      tableExample: {
        margin: [0, 5, 0, 15],
        fontSize: 12,                   
        color: '#333',           
      },
    };
    const pdfDoc = {
      content,
      styles
    };

    pdfMake.createPdf(pdfDoc).download(`${data?.title}.pdf`);
  }
 
};

  return (
    <>
    {error ? (<ForbiddenPage/>) : 
  (
    <div>
    <ul className={s.linksList}>
    <li className={s.buttonNavCurrent}>Кошторис</li>
      <li className={s.buttonNav}><NavLink className={s.buttonNavLink} to={`/materials/${data?._id}`}>Матеріали</NavLink></li>
      <li className={s.buttonNav}><NavLink className={s.buttonNavLink} to={`/advances/${data?._id}`}>Аванс</NavLink></li>
    </ul>
    <button className={s.createPdfFileButton} onClick={generatePdf}>Створити PDF файл</button>
    {data && (
      <>
      <div className={s.buttonAddContainer}>
        <p className={s.title}>Назва об'єкту: {data.title}</p>
              
        </div>
        {data.description && <p className={s.address}>Адреса: {data.description}</p>}

        {data.estimates && data.estimates.map(item => (
          <div key={item._id}>
            <div className={s.buttonAddContainer}>
            <p className={s.titleTable}>{item.title}</p>                    
            </div>                  
            <table className={s.iksweb}>
              <tbody>
              <tr className={s.titleRow}>
         <td className={s.oneRow}>№ з/п.</td>
               <td className={s.twoRow}>Назва 
               </td>
               <td className={s.threeRow}>Одиниця</td>
               <td className={s.threeRow}>Кількість</td>
               <td className={s.threeRow}>Ціна в грн.</td>
               <td className={s.threeSix}>Сума в грн.</td>
           </tr>
                {item.positions &&
                  item.positions.map(({ _id, id, title, unit, price, number, result}, index) => (
              <tr key={_id} className={s.dataRow}>
              <td className={s.oneRow}>
                {index + 1}                 
                </td>
              <td><p>{title}</p></td>                 
              <td className={s.threeRow}><p>{unit}</p></td>
              <td className={s.threeRow}><p>{number}</p></td>
              <td className={s.threeRow}><p>{price}</p></td>
              <td className={s.threeSix}><p>{result}</p></td>
              </tr>
                  ))}
                <tr className='title-row'>
                  <td colSpan='5'>Всього:</td>
                  <td className={s.threeSix}>{item.total}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </>
    )}

    <div className={s.total}>
      <p>Загальна сума: </p>
      {data && <p>{data.total}</p>}
    </div>

    
      <div className={s.total}>
        <p>Витрачено на матеріали:</p>
        {data?.materialsTotal && (
      <p>{data?.materialsTotal}</p> )}
    </div> 
   
    
       <div className={s.total}>
        <p>Аванс:</p>
        {data?.advancesTotal && (
      <p>{data?.advancesTotal}</p>)}
    </div>
    
    
     <div div className={s.total}>
      <p>До оплати:</p>
      {data?.general && (
      <p>{data?.general}</p>)}
    </div>       
  </div>
  )
  }
   </> 
  );
}

export default ProjectItemCustomer;