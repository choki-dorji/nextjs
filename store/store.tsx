import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./reducers";

const store = configureStore({
  reducer: {
    item: Reducer,
  },
});
console.log(store.getState());

export default store;
