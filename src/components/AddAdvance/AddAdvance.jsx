
import React, { useState } from 'react';
import { useParams} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAddAdvanceMutation} from '../../redux/advances/advancesApi';
import {projectsApi} from "../../redux/projectSlice/projectSlice";
import Close from '../Icons/Close/Close';
import s from './AddAdvance.module.scss';

function AddAdvance({ isShowModal}) {
    const { id } = useParams();
  
  const [comment, setComment] = useState('');
  const [date, setDate] = useState('');
  const [sum, setSum] = useState('');
  const [addAdvance] = useAddAdvanceMutation();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
    case 'comment':
        setComment(value);
        break;
    case 'date':
        setDate(value);
        break;
    case 'sum':
        setSum(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
        !comment ||
        !date  ||
        !sum
        ) {
      toast('Заповніть усі поля');
      return;
    }

    const newAdvance = { id, advances: { 
        comment: comment || '',
        date: date   || '',
        sum:  sum    || ''
    
    } };
   
    try {
      await addAdvance(newAdvance);
      dispatch(projectsApi.util.resetApiState());

     setComment('');
    setDate('');
    setSum('');
    isShowModal(); 
    } catch (error) {
      console.error('Error adding advance:', error);
    }  
  };

  return (
    <div className={s.container}>
      <ToastContainer draggable={true} />
      <button className={s.closeButton} type="button" onClick={isShowModal}>
        <Close width={'24'} height={'24'} />
      </button>
      <form action="" onSubmit={handleSubmit}>

        <div>
          <p className={s.label}>№ рахунку</p>
          <input
            type="text"
            name="comment"
            className={s.input}
            onChange={handleChange}
            value={comment}
          />
        </div>

        <div>
          <p className={s.label}>Дата</p>
          <input
            type="date"
            name="date"
            className={s.input}
            onChange={handleChange}
            value={date}
          />
        </div>

        <div>
          <p className={s.label}>Сума в грн.</p>
          <input
            type="number"
            name="sum"
            className={s.input}
            onChange={handleChange}
            value={sum}
          />
        </div>

        <button className={s.button}>Додати</button>
      </form>
    </div>
  );
}

export default AddAdvance;