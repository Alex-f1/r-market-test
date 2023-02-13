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

export interface ICartData {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  isC: boolean;
}

function ProductsList() {

  const urlProducts: string = "https://dummyjson.com/products/?limit=6";
  
  const [productsData, setProductsData] = useState<IProductThumb[]>([]);

  const [modalPopupActive, setModalPopupActive] = useState<boolean>(false);

  const [modalPopupData, setModalPopupData] = useState<IModalPopupData>(Object);

  // let [addToCart, setAddToCart] = useState<ICartData[]>([]);

  // const [isCart, setIsCart] = useState<boolean>(false);

  const [cartProducts, setCartProducts] = useState<any>([]);

  function modalPopupOpen(modalPopupActive: boolean) {
    setModalPopupActive(modalPopupActive);
  }

  /* function cart(isCart: boolean) {
    setIsCart(isCart);
  }  */

  function getModalPopupData(modalPopupData: IModalPopupData) {
    setModalPopupData(modalPopupData);
  }

  // function addProductToCart(cartData: ICartData) {

  //   if (!cartData.isC) {
  //     addToCart = [ ...addToCart, cartData ];
  //     console.log(addToCart)
  //     setAddToCart(addToCart);
  //     cartData.isC = true;
  //   }    
    
  // }

  const addProductToCart = (productID: any) => {
    setCartProducts([...cartProducts, productID]);
  };

  const removeFromCart = (productID: any) => {
    const newCartProducts = cartProducts.filter((id: any) => id !== productID);
    setCartProducts(newCartProducts);
  };
  // const removeFromCart = (productID: any) => {
  //   const newCartProducts = cartProducts.filter((id: any) => id !== productID);
  //   setCartProducts(newCartProducts);
  // };

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
              let haveInCart = false;

              cartProducts.forEach((productID: any) => {
                if (item.id === productID) {
                  haveInCart = true;
                }
              });
              return (
                <div className="products-list__item" key={item.id}>
                  <ProductThumb 
                    productData={item} 
                    modalPopup={modalPopupOpen} 
                    getModalPopupData={getModalPopupData} 
                    // addProductToCart={addProductToCart}
                    // cart={cart}
                    addProductToCart={addProductToCart}
                    removeFromCart={removeFromCart}
                    haveInCart={haveInCart}
                  />
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

      <>
        {/* {
          addToCart.map((item) => {
            return (
              <div key={item.id}>
                <p><img src={item.thumbnail} alt="" /></p>
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            )
          })
        } */}

        <Title text={"Корзина"} />
        <div className="cart-products">
          {cartProducts.length > 0
            ? cartProducts.map((productID: any) => {
              const productIndex = productsData.findIndex(product => {
                return product.id === productID;
              });
              let { title, id, price, thumbnail } = productsData[productIndex];
              return (
                <div className="cart-products__item flex border border-gray-300 p-2" key={id}>
                  <div className="cart-products__img w-12 h-12 mr-3">
                    <img className="w-full h-full object-cover object-center" src={thumbnail} alt="" />
                    </div>
                  <div className="cart-products__info flex items-center">
                    <div className="cart-products__content mr-3">
                      <p className="text-orange-400">{title}</p>
                      <p><span>$</span>{price}</p>
                    </div>
                    <button className="cart-products__button-remove ml-auto mr-3 p-1.5 border border-red-500" type="button" onClick={() => removeFromCart(id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </button>
                  </div>
                  <>
                    {console.log(cartProducts.length)}
                  </>
                </div>
              );
            })
            : 
              <div>
                <h3 className=" text-xl">Корзина пуста!</h3>
                <a className=" text-orange-400 underline" href="/">Вернуться на главную</a>
              </div>
            }
        </div>
      </>
    </div>
  );
}

export default ProductsList;