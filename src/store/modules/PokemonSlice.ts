import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiGet } from "../../api/index";
import { RootState } from "..";

const initialState = "";

export const pokemonGetOne = createAsyncThunk(
  "pokemon/getOne",
  async (name: string) => {
    const { data } = await apiGet(`/pokemon/${name}`);
    console.log(data);

    return data;
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    create(state, action) {
      return action.payload;
    },
    clear() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(pokemonGetOne.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { create, clear } = pokemonSlice.actions;
export default pokemonSlice.reducer;
