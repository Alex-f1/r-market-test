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

  const handleAddProductToCart = (productID: any) => {
    setCartProducts([...cartProducts, productID]);
  };

  const handleRemoveFromCart = (productID: any) => {
    const newCartProducts = cartProducts.filter((id: any) => id !== productID);
    setCartProducts(newCartProducts);
  };

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
                    handleAddProductToCart={handleAddProductToCart}
                    handleRemoveFromCart={handleRemoveFromCart}
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

        <div>
          <h1>Корзина</h1>
          {cartProducts.length > 0
            ? cartProducts.map((productID: any) => {
              const productIndex = productsData.findIndex(product => {
                return product.id === productID;
              });
              let { title, id, price, thumbnail } = productsData[productIndex];
              return (
                <div key={id}>
                  <p><img src={thumbnail} alt="" /></p>
                  <p>{title}</p>
                  <p>{price}</p>
                </div>
              );
            })
            : "Корзина пуста! :("}
        </div>
      </>
    </div>
  );
}

export default ProductsList;