import { useEffect, useState } from "react";
import ProductThumb from "../ProductThumb/ProductThumb";
import IProductThumb from "../../models/products";
import ModalPopup from "../ModalPopup/ModalPopup";
import Title from "../Title/Title";

type TModalPopup = {
  isActiveM: string
  setIsActive: boolean
}

export interface IModalPopupData {
  id: number;
  img: string;
  name: string;
  price: number;
}

function ProductsList() {

  const urlProducts: string = "https://dummyjson.com/products/?limit=6";
  
  const [productsData, setProductsData] = useState<IProductThumb[]>([]);

  const [modalPopupActive, setModalPopupActive] = useState<any>(false);

  const [modalPopupData, setModalPopupData] = useState<IModalPopupData>(Object);

  function modalPopupOpen(modalPopupActive: boolean) {
    setModalPopupActive(modalPopupActive);
  }

  function getModalPopupData(modalPopupData: IModalPopupData) {
    setModalPopupData(modalPopupData);
  }

  async function getProductsData() {
    const response = await fetch(urlProducts);
    const data = await response.json();
    const products: IProductThumb[] = data.products;
    
    setProductsData(products);
  }

  useEffect(() => {
    
    getProductsData();
    
  }, []);

  console.log(modalPopupData)

  return (
    <div className="products-list py-10">
      <div className="products-list__container container px-4 mx-auto">
        <div className="products-list__items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            productsData.map((item) => {
              return (
                <div className="products-list__item" key={item.id}>
                  <ProductThumb productData={item} 
                    modalPopup={modalPopupOpen} 
                    getModalPopupData={getModalPopupData} />
                </div>
              );
            })
          }
        </div>
      </div>
      <ModalPopup isActive={modalPopupActive} setIsActive={setModalPopupActive}>
        <Title text="Заказать" />
        <div className="order-product">
          <form>
            <div className="flex">
              <div className="w-1/2 pr-3">
                <h2 className="text-2xl text-orange-400 mb-2">{modalPopupData.name}</h2>
                <div className="w-full mb-2 h-48">
                  <img className=" w-full h-full object-cover object-center" src={modalPopupData.img} alt={modalPopupData.name} />
                </div>
                <div className="flex items-center justify-between">
                  <span className=" text-xl text-orange-400">{`$${modalPopupData.price}`}</span>
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
      </ModalPopup>
    </div>
  );
}

export default ProductsList;