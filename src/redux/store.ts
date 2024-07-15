import { createStore } from "@reduxjs/toolkit";
import refSlice from "./ref";

const store = createStore(refSlice);

export default store;
