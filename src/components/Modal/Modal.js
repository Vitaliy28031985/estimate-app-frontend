import s from "./Modal.module.scss";

function Modal({ children }) {
  console.log("s.backdrop:", s.backdrop);
  console.log("s.modal:", s.modal);

  return (
    <div className={s.backdrop}>
      <div className={s.modal}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
