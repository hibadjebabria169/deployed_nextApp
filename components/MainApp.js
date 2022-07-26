import { useSelector } from "react-redux";
import Cart from "../components/Cart/Cart";
import Layout from "../components/Layout/Layout";
import Meals from "../components/Shop/Meals";
import React from "react";

function MainApp() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

 return (
    
      
        <Layout>
          {showCart && <Cart />}
          <Meals />
        </Layout>
     
 )
}
export default MainApp;
