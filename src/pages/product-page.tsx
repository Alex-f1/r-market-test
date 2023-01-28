import { useState } from "react";
import CardProduct from "../components/CardProduct/CardProduct";
import LayoutInner from "../components/LayoutInner/LayoutInner";
import ModalPopup from "../components/ModalPopup/ModalPopup";
import OrderProduct from "../components/OrderProduct/OrderProduct";
import { IModalPopupData } from "../components/ProductsList/ProductsList";
import Title from "../components/Title/Title";

// import "../components/LayoutInner/LayoutInner.scss"

function ProductPage() {

  const [modalPopupActive, setModalPopupActive] = useState<any>(false);

  const [modalPopupData, setModalPopupData] = useState<IModalPopupData>(Object);

  function modalPopupOpen(modalPopupActive: boolean) {
    setModalPopupActive(modalPopupActive);
  }

  function getModalPopupData(modalPopupData: IModalPopupData) {
    setModalPopupData(modalPopupData);
  }

  return (
    <LayoutInner>
      <CardProduct modalPopup={modalPopupOpen} getModalPopupData={getModalPopupData} />
      <ModalPopup isActive={modalPopupActive} setIsActive={setModalPopupActive}>
        <Title text="Заказать" />
        <OrderProduct dataModal={modalPopupData} />
      </ModalPopup>
    </LayoutInner>
  )
}

export default ProductPage;