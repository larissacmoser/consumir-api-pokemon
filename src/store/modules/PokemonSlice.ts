import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { apiGet } from "../../api/index";

export const pokemonGetOne = createAsyncThunk(
  "pokemon/getOne",
  async (name: string) => {
    const { data } = await apiGet(`/pokemon/${name}`);

    return data;
  }
);
