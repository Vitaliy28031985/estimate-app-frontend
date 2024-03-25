import { useEffect} from 'react';
import s from "./Modal.module.scss";

function Modal({ children, onModal }) {
 
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
    window.removeEventListener('keydown', handleKeyDown);
    } 
    });

    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            onModal();
            }
         };
   
         const handleBackdropClick = e => {
           if (e.currentTarget === e.target) {
               onModal();
            }
            };

  return (
    <div onClick={handleBackdropClick} className={s.backdrop}>
      <div className={s.modal}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
