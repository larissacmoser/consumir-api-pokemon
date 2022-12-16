import React, { useState } from "react";
import { Grid, IconButton, InputBase, Paper, Typography } from "@mui/material";
import Caroussel from "../components/Caroussel/Caroussel";
import SearchIcon from "@mui/icons-material/Search";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { pokemonGetOne } from "../store/modules/PokemonSlice";
import { Container } from "@mui/system";

const Products: React.FC = () => {
  const [pokemon, setPokemon] = useState<string>("");
  const dispatch = useAppDispatch();
  const pokemonData = useAppSelector((state) => state.pokemon);

  const handleClick = () => {
    dispatch(pokemonGetOne(pokemon));
  };

  return (
    <div>
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
            {pokemonData.name && (
              <Paper
                sx={{ marginRight: "-7px", marginTop: "45px", padding: "47px" }}
              >
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="h1">{pokemonData.name}</Typography>
                    <br></br>
                    <br></br>
                    <br></br>
                    <img
                      src={pokemonData.sprites.front_default}
                      alt=""
                      width={"40%"}
                    />
                    <img
                      src={pokemonData.sprites.back_default}
                      alt=""
                      width={"40%"}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Caroussel />
                  </Grid>
                </Grid>
              </Paper>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
