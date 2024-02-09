import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Close from "../Icons/Close/Close";
import {useGetPriceQuery, useAddPriceMutation} from "../../redux/price/priceApi";
import recordingImg from "../../images/Recording.png";
import s from "./AddPrice.module.scss";

function AddPrice({isShowModal}) {
    const [recognition, setRecognition] = useState(null);

    useEffect( () => {
        if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
          const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
          const recognitionInstance =  new SpeechRecognition();
          setRecognition(recognitionInstance);
                  
        } else {
          console.log('Розпізнавання мови не підтримується в цьому браузері.');
        }
      }, []);


    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');

    const {data} = useGetPriceQuery();
    const [addPrice] = useAddPriceMutation();

    const handleChange = e => {
        const {name, value,} = e.currentTarget;
        switch (name) {
          
           case 'title':
            setTitle(value);
            break;
            case 'price':
            setPrice(value);
            break;
        
           default:
           return;  
        }
     }


     const handleSubmit = async e => {
                e.preventDefault();
        if( title === '' || price === '') {
            toast("Заповніть усі поля");
            return
        }

        if (data.find(data => data.title === title)) {
            toast("Таке найменування роботи вже існує");
            setTitle('')
            setPrice('')
            return;
        }
        
        try {
    const newPosition = {title, price: Number(price)}
         addPrice(newPosition);
           
            
          } catch (error) {
            alert(`User with the title: ${title} does not exist!`, error);
          }
    setTitle('')
    setPrice('')
   isShowModal()
    }


//voice rider


const setupRecognition = () => {
    if (recognition) {
      recognition.lang = 'uk-UA'; 
      recognition.interimResults = true; 
    }
  };

 
  setupRecognition();

  const startRecording = () => {
    if (recognition) {
      recognition.start();
    }
  };


  const handleStartRecordingClick = () => {
    startRecording();
  };

 
  if (recognition) {
    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');
        
        const transcriptArr =  transcript.split('');
        for(let i = 0; i < transcriptArr.length; i++) {
            if(i === 0) 
            {
                transcriptArr[i] = transcript.charAt(0).toUpperCase();  
            }
        }
        setTitle(transcriptArr.join(""))
     
    
    };
  }

return(
    <div className={s.container}>
        
        
    <ToastContainer draggable={true} />
    <button className={s.closeButton} type="button" onClick={isShowModal}>
       <Close width={"24"} height={"24"}/>
    </button>
    
    
    <form action="" onSubmit={handleSubmit}>
       <div>
            <p className={s.label}>Найменування</p>
<div className={s.buttonsContainer}>
            <input type="text" name="title"
            className={s.input}
            onChange={handleChange}
            value={title}
            />
      <div className={s.recordingButton} onClick={handleStartRecordingClick}>
        <img src={recordingImg} width="40" height="40"  alt='recording button'/></div>
      </div>
        </div>
        <div>
            <p className={s.label}>Ціна</p>
            <input type="number" name="price"
            className={s.input}
            onChange={handleChange}
            value={price}
            />
        </div>
        <button id='submit' className={s.button}>Додати в прайс</button>
       </form>
    </div>
)
}
export default AddPrice;