
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {useGetUsersQuery} from '../../redux/auth/authApi';
import {projectsApi} from "../../redux/projectSlice/projectSlice";
import { useGetProjectByIdQuery } from '../../redux/projectSlice/projectSlice';
import Close from '../Icons/Close/Close';
import s from './Allow.module.scss';

function Allow({ isShowModal, allowFu, id}) {
  const dispatch = useDispatch();
  const [emailAllow, setEmailAllow] = useState('');
  const [emailNotAllow, setEmailNotAllow] = useState('');
  const [userData, setUserData] = useState(null);
  const [projectArr, setProjectArr] =useState(null)

const {data} = useGetUsersQuery();
const { data: project } = useGetProjectByIdQuery(id);

useEffect(() => {
  if (data) {
  setUserData(data);
 
  }  
 
}, [data]);

useEffect(() => {
  if(project) {
    setProjectArr(project);  
   } 
}, [project, id]

)

const userIdList =  projectArr?.allowList;
let userEmailList = [];

const renderData = () => {
 for(let i = 0; i < userIdList?.length; i++) {
      const userWithProject = userData?.filter(({_id}) => _id === userIdList[i]) 

      if (userWithProject && userWithProject.length > 0) {
        userEmailList.push(userWithProject[0].email);
      }    
}


  
}

renderData()

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
    allowFu({email: emailAllow}, name);
    renderData();
    dispatch(projectsApi.util.resetApiState()); 
    setEmailAllow('');
}

if(name === "notAllow") {
    allowFu({email: emailNotAllow}, name);
    renderData();
    dispatch(projectsApi.util.resetApiState());  
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
          {/* <input
            type="email"
            name="emailNotAllow"
            className={s.input}
            onChange={handleChange}
            value={emailNotAllow}
          /> */}

      <select className={s.input}  name="emailNotAllow" id="emailNotAllow" onChange={handleChange}>
          {userEmailList?.map(email =>
           (<option value={email} >{email}</option>))}
          <option value="empty" selected>Вибери email для видалення</option>
          </select>
        </div>

        <button disabled={emailNotAllow === ""} className={s.button}>Забрати дозвіл</button>
      </form>
</div>
    </div>
  );
}

export default Allow;