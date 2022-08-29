import { useSelector } from "react-redux";
import Cart from "../components/Cart/Cart";
import Layout from "../components/Layout/Layout";
import { useState } from "react";
import Meals from "../components/Shop/Meals";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import React from "react";
import Header from "./Layout/MainHeader";

function MainApp({ data }) {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const dispatch = useDispatch();

 // const [cartShown, setCartShown] = useState(false);
  const showcartHanlder = () => {
    dispatch(
      uiActions.toggle(),
    )
  };
  /*const hidecartHandler = () => {
    setCartShown(false);
  }; */
  return (
    /* <Layout>
          {showModal && <Cart />}
          <Meals data={data}/>
        </Layout> */
    <Layout>
      <Header onShowCart={showcartHanlder} />
      <Meals data={data} />
      {showCart && <Cart />}
    </Layout>
  );
}
export default MainApp;
