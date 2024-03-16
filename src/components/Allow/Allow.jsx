
import React, { useState } from 'react';
import Close from '../Icons/Close/Close';
import s from './Allow.module.scss';

function Allow({ isShowModal, allowFu}) {

  const [emailAllow, setEmailAllow] = useState('');
  const [emailNotAllow, setEmailNotAllow] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
    case 'emailAllow':
        setEmailAllow(value);
        break;
    case 'emailNotAllow':
        setEmailNotAllow(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name } = e.currentTarget;
if(name === "allow") {
    allowFu({email: emailAllow}, name)
    setEmailAllow('');
}

if(name === "notAllow") {
    allowFu({email: emailNotAllow}, name);
    setEmailNotAllow('');
}
 isShowModal(); 
  };

  return (
    <div className={s.container}>
      <button className={s.closeButton} type="button" onClick={isShowModal}>
        <Close width={'24'} height={'24'} />
      </button>
<div className={s.formContainer}>
      <form className={s.form} action="" name='allow' onSubmit={handleSubmit}>
    
        <div>
          <p className={s.label}>Email Якому потрібно надати дозвіл</p>
          <input
            type="email"
            name="emailAllow"
            className={s.input}
            onChange={handleChange}
            value={emailAllow}
          />
        </div>
        <button disabled={emailAllow === ""} className={s.button}>Надати дозвіл</button>
      </form>
</div>
<div className={s.formContainer}>
      <form className={s.form} action="" name='notAllow' onSubmit={handleSubmit}>
        <div>
          <p className={s.label}>Email Від якого потрібно забрати дозвіл</p>
          <input
            type="email"
            name="emailNotAllow"
            className={s.input}
            onChange={handleChange}
            value={emailNotAllow}
          />
        </div>

        <button disabled={emailNotAllow === ""} className={s.button}>Забрати дозвіл</button>
      </form>
</div>
    </div>
  );
}

export default Allow;