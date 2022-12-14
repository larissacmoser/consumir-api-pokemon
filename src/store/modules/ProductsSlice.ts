import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const ProductsSlice = createSlice({
  name: "sliceName",
  initialState,
  reducers: {
    create(state, action) {
      return action.payload;
    },
    clear() {
      return initialState;
    },
  },
});

export const { create, clear } = ProductsSlice.actions;
export default ProductsSlice.reducer;

// import { createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
// import { RootState } from "..";
// import { apiGet } from "../../api";
// import { ProductType } from "../../types";

// const adapter = createEntityAdapter<ProductType>({
//   selectId: (item) => item.id,
// });

// export const { selectAll: selectProducts, selectById } = adapter.getSelectors(
//   (state: RootState) => state.products
// );

// export const productsGetAll = createAsyncThunk("products/GetAll", async () => {
//   const { data } = await apiGet("/products");

//   if (data.success === "OK") {
//     const { products } = data.data;
//     return products;
//   }

//   return false;
// });
