import s from "./About.module.scss";
function About() {
 
    return (
      <div className={s.aboutContainer}>
     <h1 className={s.title}>Детально  про проект</h1>
  <div className={s.titleContainer}>
     <p>Цей застосунок створений для підтримки будівельно-ремонтних бригад, a саме  допомогa у створенні будівельно-ремонтних 
      кошторисів та прайсів.
     </p>
    <p>
      Будь хто може створити свій профіль користувача на цьому ресурсі та використовувати його функціональні можливості в створенні 
      прайсів та кошторисів для подальшого подання звітів замовнику. 
    </p>
</div>
<div className={s.PortfolioContainer}>
  <p>Сайт створено та підтримується</p>
  <a target="_blank"  rel="noreferrer noopener" href="https://vitaliy28031985.github.io/Deploy-my-portfolio/">Vitalii Piddubchak</a>
</div>
     
     <div className={s.EmailContainer}>
      <p>Cвої зауваження та пропозиції щодо роботи сервісу надсилайте на електронну адресу</p>
      <a target="_blank"  rel="noreferrer noopener"  href="mailto:vitaliy_piddubchak@ukr.net">vitaliy_piddubchak@ukr.net</a>
     </div>
     </div>
    );
  }
  
  export default About;