// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ListPokemons = ({ listPokemons }) => {
  return (
    <>
      {listPokemons.map((pokemon) => (
        <li key={pokemon.name}>
          <Link to={`/${pokemon.name}`}>{pokemon.name}</Link>
        </li>
      ))}
    </>
  );
};
