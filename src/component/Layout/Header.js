import { Fragment } from "react";
import mealImage from "../../imges/meals.jpg"
import"./headerModule.css";
import CartButton from "./HeaderCartBtn"
const Header = props => {
  return (
    <Fragment>
      <header className="header">
        <h1 style={{padding: "10%"}}>React Meal</h1>
        <CartButton onclick={props.onShowCart}/>
      </header>
   <div className="main-image">
        <img src={mealImage} alt="healthy mael" />
      </div>
 </Fragment>
  );
};
export default Header;
