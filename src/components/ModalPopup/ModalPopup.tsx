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
      <div className="modal-popup__container w-6/12 min-h-[400px] p-5 mx-auto rounded-sm relative" 
        >
        <button className="absolute top-3 right-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-orange-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="modal-popup__body" onClick={(event) => event.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default ModalPopup;