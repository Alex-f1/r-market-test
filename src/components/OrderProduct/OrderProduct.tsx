import { IModalPopupData } from "../ProductsList/ProductsList";

interface propsOrderProduct {
  dataModal: IModalPopupData;
}

function OrderProduct({ dataModal }: propsOrderProduct) {
  return (
    <div className="order-product">
      <form>
        <div className="flex">
          <div className="w-1/2 pr-3">
            <h2 className="text-2xl text-orange-400 mb-2">{dataModal.name}</h2>
            <div className="w-full mb-2 h-48">
              <img className=" w-full h-full object-cover object-center"
                src={dataModal.img} alt={dataModal.name} />
            </div>
            <p className="text-sm text-slate-500 flex items-center mb-1">
              <i className="mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.1} stroke="currentColor" className="w-6 h-6 stroke-orange-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </i>
              <span className="text-black">Бесплатная доставка</span>
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xl text-orange-400">{`$${dataModal.price}`}</span>
              <span className="ml-3 text-green-600">Есть в наличии</span>
            </div>
          </div>
          <div className="w-1/2 pt-10 pl-3">
            <div>
              <input className="border border-gray-400 w-full rounded-sm p-2 mb-2" type="text" name="phone" placeholder="Телефон" required />
            </div>
            <div>
              <textarea name="text" className="border border-gray-400 w-full rounded-sm p-2 max-h-[110px] min-h-[142px]" placeholder="Комментарий"></textarea>
            </div>
            <p className="text-xs text-gray-500 mb-2">Заполните форму и мы с Вами свяжемся.</p>
            <button className="product-thumb__button-order w-full group relative flex justify-center rounded-sm border border-transparent bg-orange-400 py-2 px-4 text-sm font-medium text-white transition-colors duration-300 hover:bg-orange-600 focus:outline-none" type="submit">Отправить</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default OrderProduct;