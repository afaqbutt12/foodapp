import "./Cart.css";
import React from "react";
import Modal from "../UI/Modals";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { useSelector } from "react-redux";
import { store } from "../Store/Store";
import CartItems from "./CartItems";
import { useRef } from "react";
const Cart = (props) => {
  const CartCtx = useSelector((state) => state);
  console.log("kajkdj", CartCtx.addReducer.items);
  // console.log("jhkjk",CartCtx.addReducer.items);
  let prices = 0;
  let grandTotal = CartCtx.addReducer.items.map(
    (item) => (prices = prices + item.price * item.totalAmount)
  );
  console.log();
  var mytotal = `$${grandTotal[grandTotal.length - 1].toFixed(2)}`;

  const checkItem = CartCtx.addReducer.items.length > 0;
  const onAddHandler = (item) => {
    const newAdd = {
      id: item.id,
      totalAmount: 1,
    };
    store.dispatch({
      type: "Add",
      Data: newAdd,
    });
  };
  const onRemoveHandler = (item) => {
    const ondlt = {
      id: item.id,
      totalAmount: item.totalAmount,
    };

    store.dispatch({
      type: "Removed",
      Data: ondlt,
    });
  };
  const cartItems = (
    <ul className="cart-items">
      {CartCtx.addReducer.items.map((item) => (
        <CartItems
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.totalAmount}
          price={item.price}
          onAdd={onAddHandler.bind(null, item)}
          onRemove={onRemoveHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

const allPDFData = useRef(null)
  const PDFHandeler=(event)=>{
    allPDFData.current.save()
console.log("clicked");
  }
  return (
    <Modal>
      <PDFExport  ref={allPDFData} paperSize="A4">
        <div className="try">
      <div className="total">
        <span>Total Amount</span>
        <span>{mytotal}</span>
      </div>
      <div className="actions">{cartItems}</div>
      </div>
      </PDFExport>
      {checkItem && <button className="button" onClick={PDFHandeler}>Order</button>}
      <button className="buttonalt" onClick={props.onHideCart}>
        Close
      </button>
      
    </Modal>
  );
};
export default Cart;
