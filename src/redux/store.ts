import { createStore, combineReducers } from "redux";
import refSlice from "./ref";

const rootReducer = combineReducers({
  refs: refSlice,
});

const store = createStore(rootReducer);

export default store;
