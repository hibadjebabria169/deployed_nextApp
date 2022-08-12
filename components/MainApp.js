import { useSelector } from "react-redux";
import Cart from "../components/Cart/Cart";
import Layout from "../components/Layout/Layout";
import { useState } from "react";
import Meals from "../components/Shop/Meals";
import Modal from "./UI/Modal";
import React from "react";
import Header from "./Layout/MainHeader";

function MainApp({ data }) {
  //const showCart = useSelector((state) => state.ui.cartIsVisible);

  const [cartShown, setCartShown] = useState(false);
  const showcartHanlder = () => {
    setCartShown(true);
  };
  const hidecartHandler = () => {
    setCartShown(false);
  };
  return (
    /* <Layout>
          {showModal && <Cart />}
          <Meals data={data}/>
        </Layout> */
    <Layout>
      <Header onShowCart={showcartHanlder} />
      <Meals data={data} />
      {cartShown && <Cart onHide={hidecartHandler} />}
    </Layout>
  );
}
export default MainApp;
