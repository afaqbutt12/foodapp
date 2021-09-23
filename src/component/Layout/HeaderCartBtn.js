import "./headerCartBtn.css";
import CartIcon from "../Cart/cartIcon";
import { useSelector } from "react-redux";

const HeaderCartBtn = (props) => {
  const contextCart=useSelector(state => state);

  const numberofCartItem =contextCart.addReducer.items.reduce(
   (updatedNumber,item)=>{
    return updatedNumber + item.totalAmount; 
     
  },0);
  
  return (
    <button className="button" onClick={props.onclick}>
      <span className="icon">
        <CartIcon/>
      </span>
      <span>your cart</span>
      <span className="badge">{numberofCartItem}</span>
      
    </button>
  );
};
export default HeaderCartBtn;
