
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAddUnitMutation } from '../../redux/unit/unitApi';
// import {projectsApi} from "../../redux/projectSlice/projectSlice";
import Close from '../Icons/Close/Close';
import s from './AddUnit.module.scss';

function AddUnit({ isShowModal}) {
  const [title, setTitle] = useState('');
  const [addUnit] = useAddUnitMutation();

//   const dispatch = useDispatch();

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
      toast.error('Заповніть усі поля');
      return;
    }

    const newEstimate = { title: title || '' };
    try {
      await addUnit(newEstimate);
    } catch (error) {
      console.error('Error adding unit:', error);
    }

    setTitle('');
    isShowModal();
  };

  const disabled = title === '';

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

        <button disabled={disabled} className={disabled ? "button-disabled" : "button"}>Додати</button>
      </form>
    </div>
  );
}

export default AddUnit;