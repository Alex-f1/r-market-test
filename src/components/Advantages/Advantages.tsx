import Title from "../Title/Title";
import "./Advantages.scss";

function Advantages() {
  return (
    <div className="advantages pt-10 pb-20">
      <div className="advantages__container container px-4 mx-auto">
        <Title text="Преимущества" />

        <div className="advantages__items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="advantages__item flex flex-col items-center text-center py-10 px-5">
            <i className="advantages__icon w-24 h-24">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.1} stroke="currentColor" className="w-full h-full stroke-orange-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
            </i>
            <div className="advantages__text text-xl mt-1">
              Прямая доставка
            </div>
            <div className="advantages__hover-elements">
              <span className="advantages__hover-element advantages__hover-element--top"></span>
              <span className="advantages__hover-element advantages__hover-element--right"></span>
              <span className="advantages__hover-element advantages__hover-element--bottom"></span>
              <span className="advantages__hover-element advantages__hover-element--left"></span>
            </div>
          </div>
          <div className="advantages__item flex flex-col items-center text-center py-10 px-5">
            <i className="advantages__icon w-24 h-24 w-">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.1} stroke="currentColor" className="w-full h-full stroke-orange-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
              </svg>
            </i>
            <div className="advantages__text text-xl mt-1">
              Широкий ассортимент товаров
            </div>
            <div className="advantages__hover-elements">
              <span className="advantages__hover-element advantages__hover-element--top"></span>
              <span className="advantages__hover-element advantages__hover-element--right"></span>
              <span className="advantages__hover-element advantages__hover-element--bottom"></span>
              <span className="advantages__hover-element advantages__hover-element--left"></span>
            </div>
          </div>
          <div className="advantages__item flex flex-col items-center text-center py-10 px-5">
            <i className="advantages__icon w-24 h-24 w-">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.1} stroke="currentColor" className="w-full h-full stroke-orange-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </i>
            <div className="advantages__text text-xl mt-1">
              Приятные цены
            </div>
            <div className="advantages__hover-elements">
              <span className="advantages__hover-element advantages__hover-element--top"></span>
              <span className="advantages__hover-element advantages__hover-element--right"></span>
              <span className="advantages__hover-element advantages__hover-element--bottom"></span>
              <span className="advantages__hover-element advantages__hover-element--left"></span>
            </div>
          </div>
          <div className="advantages__item flex flex-col items-center text-center py-10 px-5">
            <i className="advantages__icon w-24 h-24 w-">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.1} stroke="currentColor" className="w-full h-full stroke-orange-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg>
            </i>
            <div className="advantages__text text-xl mt-1">
              Консультация и сервис
            </div>
            <div className="advantages__hover-elements">
              <span className="advantages__hover-element advantages__hover-element--top"></span>
              <span className="advantages__hover-element advantages__hover-element--right"></span>
              <span className="advantages__hover-element advantages__hover-element--bottom"></span>
              <span className="advantages__hover-element advantages__hover-element--left"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;