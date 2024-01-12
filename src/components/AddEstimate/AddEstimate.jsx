
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAddEstimateMutation } from '../../redux/estimate/estimateApi';
import {projectsApi} from "../../redux/projectSlice/projectSlice";
import Close from '../Icons/Close/Close';
import s from './AddEstimate.module.scss';

function AddEstimate({ isShowModal, idData }) {
  const [title, setTitle] = useState('');
  const [addEstimate] = useAddEstimateMutation();

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

    const newEstimate = { id: idData, estimates: { title: title || '' } };
    try {
      await addEstimate(newEstimate);
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

        <button className={s.button}>Додати</button>
      </form>
    </div>
  );
}

export default AddEstimate;