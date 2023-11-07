import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
// Import your SongInfo page component below
//import { SongInfo } from "../components/SongInfo";
import { InfoPokemons } from "../pages/InfoPokemons";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/:pokemonName" element={<InfoPokemons />} />
    {/* Define your dynamic route here below */}
    {/* <Route path="/song/:songRank" element={<SongInfo />}></Route> */}
  </>
);

export default routes;
