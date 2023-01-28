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
              <textarea name="text" className="border border-gray-400 w-full rounded-sm p-2 max-h-[110px] min-h-[110px]" placeholder="Комментарий"></textarea>
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