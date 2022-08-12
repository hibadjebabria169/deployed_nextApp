/*import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart-slice';
import Card from '../UI/Card';
import classes from './MealItem.module.css';

const MealItem = (props) => {
  const dispatch = useDispatch();

  const { name, price,  id } = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
       name,
        price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{name}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <div >
          <button className={classes.button}   onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default MealItem;*/
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

import { cartActions } from "../../store/cart-slice";
import Card from "../UI/Card";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const dispatch = useDispatch();

  const { name, price, id } = props;

  const addToCartHandler = () => {
    console.log(price);
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
        quantity : 1,        
      })
    );
    Swal.fire({
      title: 'Added!',
      text: 'Meal ia added to Cart',
      icon: 'success',
      confirmButtonText: 'Done',
      backdrop: true,
      confirmButtonColor:'#4C4405'
    })
  };


  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{name}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <div>
          <button className={classes.button} onClick={addToCartHandler}>
            Add to Cart{" "}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MealItem;