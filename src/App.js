import React, { useState, useEffect } from "react";
import PokemonList from "./components/PokemonList";
import Pagination from "./components/Pagination";
import AboutPoke from "./components/AboutPoke";
import Loading from "./components/Loading";
import axios from "axios";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentUrl, setCurrentUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancel;
    axios
      .get(currentUrl, {
        cancelToken: new axios.CancelToken(c => (cancel = c))
      })
      .then(res => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setPokemon(res.data.results.map(p => p.name));
      })
      .catch(err => console.log(err));
    return () => cancel();
  }, [currentUrl]);

  function nextPage() {
    setCurrentUrl(nextPageUrl);
  }
  function prevPage() {
    setCurrentUrl(prevPageUrl);
  }

  return (
    <div className="columnsContainer">
      <div className="leftColumn">
        <AboutPoke />
      </div>

      <div className="rightColumn">
        <h1 style={{ textAlign: "center" }}>Pokémon Names</h1>
        <span className="App">
          {loading ? <Loading /> : <PokemonList pokemon={pokemon} />}
          {loading ? null : (
            <Pagination
              gotoNextPage={nextPage}
              gotoPrevPage={prevPage}
              nextPage={nextPageUrl}
              prevPage={prevPageUrl}
            />
          )}
        </span>
      </div>
    </div>
  );
}

export default App;
