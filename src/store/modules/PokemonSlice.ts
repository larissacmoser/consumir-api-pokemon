import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "..";
import { apiDelete, apiGet, apiPost } from "../../api/index";

export const pokemonGetOne = createAsyncThunk(
  "pokemon/getOne",
  async (name: string) => {
    const { data } = await apiGet(`/pokemon/${name}`);

    return data;
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(productsGetAll.pending, (state, action) => {
        console.log("Executou a requisição...");
      })
      .addCase(
        productsGetAll.fulfilled,
        (state, action: PayloadAction<ProductType[]>) => {
          adapter.setAll(state, action.payload);
        }
      )
      .addCase(productsGetAll.rejected, (state, action) => {
        console.log(action.payload);
      });
  },
});

export const { pokemonGetOne } = pokemonSlice.actions;
export default pokemonSlice.reducer;
