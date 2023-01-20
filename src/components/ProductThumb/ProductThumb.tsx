import IProductThumb from "../../models/products";

import "./ProductThumb.scss";

interface propsProductThumb {
  productData: IProductThumb
}

function ProductThumb({ productData }: propsProductThumb) {
  return (
    <div className="product-thumb p-5">
      <div className="product-thumb__body">
        <a className="product-thumb__img block mb-6 mx-auto" href="#">
          <img className="h-full w-full object-cover object-center" src={productData.thumbnail} alt="" />
        </a>
        <a className="product-thumb__name block mb-4 transition-colors text-xl text-orange-400 hover:text-black" href="#">
          {productData.title}
        </a>
        <div className="product-thumb__text text-base mb-5 font-light text-gray-500">
          {productData.description}
        </div>
        <div className="product-thumb__bottom flex justify-between items-center pt-5 border-t border-gray-300">
          <div className="product-thumb__price text-xl text-orange-400">
            <span>$</span>{productData.price}
          </div>
          <a className="product-thumb__button-order w-40 group relative flex justify-center rounded-md border border-transparent bg-orange-400 py-2 px-4 text-sm font-medium text-white transition-colors hover:bg-orange-600 focus:outline-none" href="#">
            <span>Заказать</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductThumb;