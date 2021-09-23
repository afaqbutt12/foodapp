// import logo from './logo.svg';
// import './App.css';
import Header from "./component/Layout/Header";
import Meal from "./component/Meals/Meals";
import { useState } from "react";
import Cart from "./component/Cart/Carts";
import {Provider} from 'react-redux';
import {store} from './component/Store/Store';
// import CratProvider from "./component/Store/CartProvider";
function App() {
  const [showCart, setShowCart] = useState(false)
  const showCartHandler=()=>{
    setShowCart(true)
  }

  const hideCartHandler=(props)=>{
    setShowCart(false)
    
  }
  return (
    <Provider store={store}>
      {showCart && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
      <Meal />
      </main>
    </Provider>
  );
}

export default App;
