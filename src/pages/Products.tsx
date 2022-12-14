import React, { useEffect, useState } from "react";
import {
  Divider,
  Grid,
  IconButton,
  InputBase,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import { useAppDispatch } from "../store/hooks";

const Products: React.FC = () => {
  // const productsRedux = useAppSelector(selectProducts);
  const [pokemon, setPokemon] = useState<string>("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(productsGetAll());
  }, []);

  const handleClick = () => {
    console.log("Executou");
    dispatch(productsGetAll());
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">Pokémons</Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Buscar Pokémon"
            inputProps={{ "aria-label": "Buscar Pokémon" }}
            value={pokemon}
            onChange={(ev) => setPokemon(ev.target.value)}
          />
          <IconButton
            onClick={handleClick}
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        {pokemon}
      </Grid>
    </Grid>
  );
};

export default Products;
