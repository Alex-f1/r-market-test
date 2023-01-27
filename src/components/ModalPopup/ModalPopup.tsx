import "./ModalPopup.scss";

interface IModalPopup {
  isActive: string;
  setIsActive: Function;
  children: React.ReactNode;
}

function ModalPopup({ isActive, setIsActive, children }: IModalPopup) {
  return (
    <div className={isActive ? "modal-popup _is-active" : "modal-popup"} 
      onClick={() => setIsActive(false)} >
      <div className="modal-popup__container w-6/12 h-96 p-5 mx-auto" 
        onClick={(event) => event.stopPropagation()}>
        <div className="modal-popup__body">
          {children}
        </div>
      </div>
    </div>
  )
}

export default ModalPopup;