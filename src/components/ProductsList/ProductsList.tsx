import { useEffect, useState } from "react";
import ProductThumb from "../ProductThumb/ProductThumb";
import IProductThumb from "../../models/products";
import ModalPopup from "../ModalPopup/ModalPopup";
import Title from "../Title/Title";
import OrderProduct from "../OrderProduct/OrderProduct";

export interface IModalPopupData {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
}

function ProductsList() {

  const urlProducts: string = "https://dummyjson.com/products/?limit=6";
  
  const [productsData, setProductsData] = useState<IProductThumb[]>([]);

  const [modalPopupActive, setModalPopupActive] = useState<boolean>(false);

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
        <OrderProduct dataModal={modalPopupData} />
      </ModalPopup>
    </div>
  );
}

export default ProductsList;