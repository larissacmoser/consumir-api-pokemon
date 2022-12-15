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

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { pokemonGetOne } from "../store/modules/PokemonSlice";
import { Container } from "@mui/system";

const Products: React.FC = () => {
  // const pokemonData = useAppSelector(pokemonGetOne);
  const [pokemon, setPokemon] = useState<string>("");
  const dispatch = useAppDispatch();
  const pokemonData = useAppSelector((state) => state.pokemon);

  // useEffect(() => {
  //   // dispatch(productsGetAll());
  // }, []);

  const handleClick = () => {
    console.log("Executou");
    dispatch(pokemonGetOne(pokemon));
    // console.log(pokemon);
  };

  return (
    <main
      style={{
        backgroundImage:
          "url('https://c4.wallpaperflare.com/wallpaper/957/704/964/pokemon-fields-ruby-1920x1200-nature-fields-hd-art-wallpaper-preview.jpg')",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container maxWidth="md">
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} textAlign="center">
            {/* <Typography variant="h5">Pokémons</Typography> */}
            <img
              src="https://www.freepnglogos.com/uploads/pokemon-logo-text-png-7.png"
              alt="pokemon logo"
              width={"400px"}
              height="auto"
            />
          </Grid>
          <Grid item xs={12}>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                width: "100%",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1, width: "93%" }}
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
            <Typography variant="h1">{pokemonData.name}</Typography>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Products;
