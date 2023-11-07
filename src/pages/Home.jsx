// import { SongList } from "../components/SongList";
import { useState, useEffect } from "react";
import { ListPokemons } from "./ListPokemons";

// TODO: Import necessary modules and data
//function Home() {
// TODO: Implement logic to display the list of songs
export const Home = () => {
  const [listPokemons, setListPokemons] = useState([]);
  const API = "https://pokeapi.co/api/v2/pokemon";

  const handleFetchData = async () => {
    const response = await fetch(API);
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
    setListPokemons(data.results);
  };

  useEffect(() => {
    handleFetchData();
  }, []);
  return (
    <>
      <div>
        <h1>Pokemon</h1>
        {/* TODO: Display the list of songs with links */}
      </div>
      <ListPokemons listPokemons={listPokemons} />
      {/* <SongList /> */}
    </>
  );
};

// export default Home;
