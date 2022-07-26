import { Fragment } from "react";
import classes from "./MainHeader.module.css";
import CartButton from '../Cart/CartButton'


const Header = (props) => {

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>FOOD APP</h1>
        <CartButton onClick={props.onShowCart}/>

      </header>
      <div className={classes['main-image']}>
        <img src='/assets/header.jpg' alt="HeaderFood" />
      </div>
    </Fragment>
  );
};

export default Header;
