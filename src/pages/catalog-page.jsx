import ProductsList from "../components/ProductsList/ProductsList";
import Title from "../components/Title/Title";

function CatalogPage() {
  return (
    <div className="container px-4 mx-auto">
      <Title text="Каталог продуктов" />

      <ProductsList />
      
    </div>
  )
}

export default CatalogPage;