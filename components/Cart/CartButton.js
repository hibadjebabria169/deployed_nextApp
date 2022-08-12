import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
const CartButton = (props) => {
  const cartItems = useSelector((state) => state.cart.items);


  const [showModal , setShowModal] = useState(false);
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick= {props.onClick}>
    <span>My Cart</span>
    <span className={classes.badge}>{cartQuantity}</span>
  </button>
  
  
 
  );
};

export default CartButton;
