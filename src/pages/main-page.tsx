import Advantages from "../components/Advantages/Advantages";
import Hero from "../components/Hero/Hero";
import ProductsList from "../components/ProductsList/ProductsList";
import Title from "../components/Title/Title";

function MainPage() {
  return (
    <>
      <Hero />

      <Title text={'Рекомендуемые товары'} />
      <ProductsList />
      
      <Advantages />
    </>
  )
}

export default MainPage;