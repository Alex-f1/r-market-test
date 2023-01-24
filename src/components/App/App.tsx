import { Route, Routes } from "react-router-dom";

import Layout from "../Layout/Layout";
import MainPage from "../../pages/main-page";
import CatalogPage from "../../pages/catalog-page";
import ProductPage from "../../pages/product-page";

function App() {

  return (
    <div className="App h-full flex flex-col">
            
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/catalog-page" element={<CatalogPage />} />
          <Route path="/product-page" element={<ProductPage />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
