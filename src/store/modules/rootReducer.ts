import { combineReducers } from "@reduxjs/toolkit";

import ProductsSlice from "./ProductsSlice";
import pokemon from "./PokemonSlice";

export default combineReducers({
  ProductsSlice,
  pokemon,
});
