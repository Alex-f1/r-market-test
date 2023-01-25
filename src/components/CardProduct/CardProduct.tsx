import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import IProductThumb from '../../models/products';

import "./CardProduct.scss";

function CardProduct() {

  const { IDProduct } = useParams();

  const [productData, setProductData] = useState<IProductThumb>(Object);

  const urlProduct: string = `https://dummyjson.com/products/${IDProduct}`;

  async function getProductData() {
    const response = await fetch(urlProduct);
    const data = await response.json();

    setProductData(data);
  }

  useEffect(() => {

    getProductData();

  }, [IDProduct]);

  return (
    <div className="card-product p-4 mx-auto">
      <div className="flex">
        <div className="flex-none w-80 h-80 relative">
          <img src={productData.thumbnail} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        </div>
        <form className="flex-auto py-4 px-6">
          <div className="items-baseline">
            <h1 className="w-full flex-none mb-3 text-3xl leading-none text-orange-400">
              {productData.title}
            </h1>
            <div className="text-gray-500 mb-5">
              {productData.description}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex-auto text-2xl mb-5 font-medium text-slate-500">
                <span>$</span>{productData.price}
              </div>
              <div className="text-xs leading-6 font-medium uppercase text-green-500">
                Есть в наличии
              </div>
            </div>
          </div>
          <div className="flex space-x-4 mb-5 text-sm font-medium">
            <div className="flex-auto flex space-x-4 pr-4">
              <button className="w-30 group relative flex justify-center rounded-sm border border-transparent bg-orange-400 py-2 px-4 text-sm font-medium text-white transition-colors duration-300 hover:bg-orange-600 focus:outline-none" type="submit">
                Заказать сейчас
              </button>
              <button className="w-30 group relative flex justify-center rounded-sm border border-transparent bg-orange-400 py-2 px-4 text-sm font-medium text-white transition-colors duration-300 hover:bg-orange-600 focus:outline-none" type="button">
                В корзину
              </button>
            </div>
          </div>
          <p className="text-sm text-slate-500 flex items-center">
            <i className="mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.1} stroke="currentColor" className="w-6 h-6 stroke-orange-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
            </i>
            <span className="text-black">Бесплатная доставка</span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default CardProduct;