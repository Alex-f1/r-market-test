import LayoutInner from "../components/LayoutInner/LayoutInner";
import ProductsList from "../components/ProductsList/ProductsList";
import Title from "../components/Title/Title";

function CatalogPage() {
  return (
    <LayoutInner>
      <Title text="Каталог товаров" />
      <ProductsList />
    </LayoutInner>
  )
}

export default CatalogPage;