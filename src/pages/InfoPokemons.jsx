import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const InfoPokemons = () => {
  const { pokemonName } = useParams();

  const [pokemon, setPokemon] = useState({});
  const API = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  const handleFetchData = async () => {
    const response = await fetch(API);
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
    // setListPokemons(data.results);
    setPokemon(data);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  //const pokemonAPI =
  return (
    <>
      Name: {pokemonName}
      <div>
        {pokemon.sprites ? <img src={pokemon.sprites.front_default} /> : <></>}
      </div>
      <p>Base experience: {pokemon.base_experience}</p>
    </>
  );
};
