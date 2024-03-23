
import React, { useState } from 'react';
import { useParams} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAddMaterialMutation} from '../../redux/material/materialApi';
import {projectsApi} from "../../redux/projectSlice/projectSlice";
import Close from '../Icons/Close/Close';
import s from './AddMaterial.module.scss';

function AddEstimate({ isShowModal}) {
    const { id } = useParams();
  const [title, setTitle] = useState('');
  const [order, setOrder] = useState('');
  const [date, setDate] = useState('');
  const [sum, setSum] = useState('');
  const [addMaterial] = useAddMaterialMutation();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
    case 'title':
        setTitle(value);
        break;
    case 'order':
        setOrder(value);
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
        !title ||
        !order ||
        !date  ||
        !sum
        ) {
      toast.error('Заповніть усі поля');
      return;
    }

    const newMaterial = { id, materials: { 
        title: title || '',
        order: order || '',
        date: date   || '',
        sum:  sum    || ''
    
    } };
    try {
    await addMaterial(newMaterial);
    dispatch(projectsApi.util.resetApiState());
    setTitle('');
    setOrder('');
    setDate('');
    setSum('');
    isShowModal();
    toast(`Чек з №: ${order} успішно додано!`) 
    } catch (error) {
      toast.error('Error adding material:', error);
    }  
  };

  const disabled =   title === '' &&  order === '' &&  date   === '' &&  sum  === '';

  return (
    <div className={s.container}>
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

        <div>
          <p className={s.label}>№ рахунку</p>
          <input
            type="text"
            name="order"
            className={s.input}
            onChange={handleChange}
            value={order}
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

        <button disabled={disabled} className={disabled ? "button-disabled" : "button"}>Додати</button>
      </form>
    </div>
  );
}

export default AddEstimate;