import { Route, Routes } from "react-router-dom";

import Layout from "../Layout/Layout";
import MainPage from "../../pages/main-page";
import CatalogPage from "../../pages/catalog-page";
import ProductPage from "../../pages/product-page";
import AboutPage from "../../pages/about-page";
import InfoPage from "../../pages/info-page";
import ContactsPage from "../../pages/contacts-page";

function App() {

  return (
    <div className="App h-full flex flex-col">
            
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/product/:IDProduct" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
