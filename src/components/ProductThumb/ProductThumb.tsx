import { Link } from "react-router-dom";
import IProductThumb from "../../models/products";
import { IModalPopupData } from "../ProductsList/ProductsList";

import "./ProductThumb.scss";

interface propsProductThumb {
  productData: IProductThumb;
  modalPopup: Function;
  getModalPopupData: Function;
}

// interface IModalPopupData {
//   id: number;
//   img: string;
//   name: string;
//   price: number;
// }

function ProductThumb({ productData, modalPopup, getModalPopupData }: propsProductThumb) {

  let setModalPopupData = (obj: IModalPopupData): Object => {
    return obj = {
      id: productData.id,
      img: productData.thumbnail,
      name: productData.title,
      price: productData.price,
    }
  }

  // console.log(getModalPopupData(setModalPopupData))

  return (
    <div className="product-thumb h-full p-5">
      <div className="product-thumb__body flex flex-col h-full">
        <Link to={`/product/${productData.id}`} className="product-thumb__img block mb-6 mx-auto overflow-hidden">
          <img className="h-full w-full object-cover object-center hover:scale-110 transition-transform duration-1000 inline-block align-top" src={productData.thumbnail} alt="" />
        </Link>
        <Link to={`/product/${productData.id}`} className="product-thumb__name flex-auto block mb-4 transition-colors duration-300 text-xl text-orange-400 hover:text-black">
          {productData.title}
        </Link>
        <div className="product-thumb__text text-base mb-5 font-light text-gray-500">
          {productData.description}
        </div>
        <div className="product-thumb__bottom flex justify-between items-center pt-5 border-t border-gray-300">
          <div className="product-thumb__price text-xl text-orange-400">
            <span>$</span>{productData.price}
          </div>
          <button className="product-thumb__button-order w-30 group relative flex justify-center rounded-sm border border-transparent bg-orange-400 py-2 px-4 text-sm font-medium text-white transition-colors duration-300 hover:bg-orange-600 focus:outline-none" type="button" onClick={() => { modalPopup(true); getModalPopupData(setModalPopupData) }}>
            <span>Заказать</span>
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default ProductThumb;