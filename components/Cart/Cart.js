/*import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Card className={classes["cart-items"]}>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              name: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;*/
import { useSelector } from "react-redux";
import Modal from "../UI/Modal";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";

const Cart = (props) => {
 // const showCart = useSelector((state) => state.ui.cartIsVisible);

const dispatch = useDispatch();
const closeHandler = () => {
dispatch(
  uiActions.toggle(),
)

}


  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    
   <Modal onClose={props.onHide}>
      <ul className={classes['cart-items']}>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              name: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={closeHandler}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
