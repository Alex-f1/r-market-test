import { Link } from "react-router-dom";
import IProductThumb from "../../models/products";
import { IModalPopupData, ICartData } from "../ProductsList/ProductsList";

import "./ProductThumb.scss";

interface propsProductThumb {
  productData: IProductThumb;
  modalPopup: (modalPopupOpen: boolean) => void;
  getModalPopupData: Function;
  // addProductToCart: Function;
  // cart: Function;
  handleAddProductToCart: any
  handleRemoveFromCart: any
  haveInCart: any
}

function ProductThumb({ 
  productData,
  modalPopup,
  getModalPopupData,
  // addProductToCart,
  handleAddProductToCart,
  handleRemoveFromCart,
  haveInCart
  // cart
  }: propsProductThumb) {

  /* let setModalPopupData = (modalPopupData: IModalPopupData): IModalPopupData => {
    return modalPopupData = {
      id: productData.id,
      thumbnail: productData.thumbnail,
      title: productData.title,
      price: productData.price,
    }
  } */

  let setModalPopupData: IModalPopupData = {
    id: productData.id,
    thumbnail: productData.thumbnail,
    title: productData.title,
    price: productData.price, 
  }

  let setToCart: ICartData = {
    id: productData.id,
    thumbnail: productData.thumbnail,
    title: productData.title,
    price: productData.price,
    isC: false,
  }

  return (
    <div className="product-thumb h-full p-5 rounded-sm">
      <div className="product-thumb__body flex flex-col h-full">
        <Link to={`/product/${productData.id}`} className="product-thumb__img block mb-6 w-full overflow-hidden">
          <img className="h-full w-full object-cover object-center hover:scale-110 transition-transform duration-1000 inline-block align-top" src={productData.thumbnail} alt="" />
        </Link>
        <Link to={`/product/${productData.id}`} className="product-thumb__name flex-auto block mb-4 transition-colors duration-300 text-xl text-orange-400 hover:text-black">
          {productData.title}
        </Link>
        <div className="product-thumb__text text-base mb-5 font-light text-gray-500">
          {productData.description}
        </div>
        <div className="product-thumb__bottom flex items-center pt-5 border-t border-gray-300">
          <div className="product-thumb__price text-xl text-orange-400">
            <span>$</span>{productData.price}
          </div>
          

          {!haveInCart ? (
            <button className="product-thumb__button-add-to-cart ml-auto mr-3 p-1.5 border border-orange-400" type="button"
              /* onClick={() => addProductToCart(setToCart) } */
              onClick={() => handleAddProductToCart(productData.id)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-orange-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </button>
          ) : (
              <button className="product-thumb__button-add-to-cart ml-auto mr-3 p-1.5 border border-orange-400 bg-orange-400" type="button"
                /* onClick={() => addProductToCart(setToCart) } */
                onClick={() => handleRemoveFromCart(productData.id)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              </button>
          )}
          <button className="product-thumb__button-order w-30 group relative flex justify-center rounded-sm border border-transparent bg-orange-400 py-2 px-4 text-sm font-medium text-white transition-colors duration-300 hover:bg-orange-600 focus:outline-none" type="button" onClick={() => { modalPopup(true); getModalPopupData(setModalPopupData); }}>
            <span>Заказать</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductThumb;