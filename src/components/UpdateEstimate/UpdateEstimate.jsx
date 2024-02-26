import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUpdateEstimateMutation } from '../../redux/estimate/estimateApi';
import {projectsApi} from "../../redux/projectSlice/projectSlice";
import Close from '../Icons/Close/Close';
import s from './UpdateEstimate.module.scss';

function UpdateEstimate({ isShowModal, idData }) {
  const [title, setTitle] = useState(idData.currentName);
  const[mutate] = useUpdateEstimateMutation();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) {
      toast('Заповніть усі поля');
      return;
    }

    try {
        await mutate([idData.projId, idData.estId, {title}])
      dispatch(projectsApi.util.resetApiState());
    } catch (error) {
      console.error('Error adding estimate:', error);
    }

    setTitle('');
    isShowModal();
  };

  return (
    <div className={s.container}>
      <ToastContainer draggable={true} />
      <button className={s.closeButton} type="button" onClick={isShowModal}>
        <Close width={'24'} height={'24'} />
      </button>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <p className={s.label}>Найменування</p>
          <input
            type="text"
            name="title"
            className={s.input}
            onChange={handleChange}
            value={title}
          />
        </div>

        <button className={s.button}>Обновити</button>
      </form>
    </div>
  );
}

export default UpdateEstimate;