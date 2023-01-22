import { useEffect, useState } from "react";
import ProductThumb from "../ProductThumb/ProductThumb";
import Title from "../Title/Title";
import IProductThumb from "../../models/products";

function ProductsList() {

  const urlProducts: string = "https://dummyjson.com/products/?limit=6";
  
  const [productsData, setProductsData] = useState<IProductThumb[]>([]);

  async function getProductsData() {
    const response = await fetch(urlProducts);
    const data = await response.json();
    const products: IProductThumb[] = data.products
    
    setProductsData(products);
  }

  useEffect(() => {
    
    getProductsData();
    
  }, []);

  return (
    <div className="products-list py-10">
      <div className="products-list__container container px-4 mx-auto">

        <Title text={'Рекомендуемые товары'} />
        
        <div className="products-list__items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <>
            {
              productsData.map((item) => {
                return (
                  <div className="products-list__item" key={item.id}>
                    <ProductThumb productData={item} />
                  </div>
                );
              })
            }
          </>
        </div>
      </div>
    </div>
  );
}

export default ProductsList;