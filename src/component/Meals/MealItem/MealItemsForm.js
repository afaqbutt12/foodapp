import "./MealItemForm.css";
import { useRef } from "react";
import Inputs from "../../UI/input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const MealItemform = (props) => {
  const [validNumber, setValidNumber] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (evt) => {
    evt.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().lenght === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setValidNumber(false);
      return;
    }
    props.onAddtoCart(enteredAmountNumber);
    toast.success("Added");
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <Inputs
        ref={amountInputRef}
        label="amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!validNumber && <p>Please enter a valid number</p>}
      <ToastContainer
        position="top-left"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </form>
  );
};
export default MealItemform;
