import MealItem from "./MealItem";
import classes from "./Meals.module.css";
import { useState, useEffect } from "react";


const Meals = (props) => {
  const [Meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://react-http-1e4fd-default-rtdb.firebaseio.com/meals.json"
        );
        const data = await response.json();
        if (!response.ok) {
          throw new Error("SMTHG WRONG");
        }
        const loadedMeals = [];
        for (const key in data) {
          loadedMeals.push({
            id: key,
            name: data[key].name,
            price: data[key].price,
          });
        }

        setMeals(loadedMeals);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetchMeals();
  }, []);
  if (isLoading) {
    return (
      <section>
        <p> Loading...</p>
      </section>
    );
  }

  if (error) {
    throw new Error("SMTHG WRONG");
  }

  return (
    <section className={classes.meals}>
      <ul>
        {Meals.map((meal) => (
          <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            price={meal.price}
          />
        ))}
      </ul>
    </section>
  );
};

export default Meals;
