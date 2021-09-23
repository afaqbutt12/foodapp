import "./MealItems.css";
import MealItemform from "./MealItemsForm";
import { store } from "../../Store/Store";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const addtoCartHandler = (amount) => {
    const data = {
      id: props.id,
      name: props.name,
      totalAmount: amount,
      price: props.price,
    };
    store.dispatch({
      type: "Add",
      Data: data,
    });
  };

  return (
    <li className="meal">
      <div>
        <h1>{props.name}</h1>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealItemform id={props.id} onAddtoCart={addtoCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
