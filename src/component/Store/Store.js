import { createStore, combineReducers } from "redux";
let initialData = {
  items: [],
};
const addReducer = (state = initialData, action) => {
  state = { ...state };
  if (action.type === "Add") {
    console.log(state.items);
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.Data.id
    );
    const existingItem = state.items[existingItemIndex];

    if (existingItem) {
      const updateditem = {
        ...existingItem,
        totalAmount: existingItem.totalAmount + action.Data.totalAmount,
      };
      state.items[existingItemIndex] = updateditem;
      console.log(updateditem); 
    } else {
      state.items.push(action.Data);
    }
  } else if (action.type === "Removed") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.Data.id
    );
    const existingItem = state.items[existingItemIndex];
    let updatedItems;
    if (existingItem.totalAmount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.Data.id);
      state.items = updatedItems;
    } else {
      const updatedItem = {
        ...existingItem,
        totalAmount: existingItem.totalAmount - 1,
      };
      updatedItems = [...state.items];
      state.items[existingItemIndex] = updatedItem;
    }
  } else {
    
  }
  return state;
};

let reducers = combineReducers({ addReducer });
export let store = createStore(reducers);
