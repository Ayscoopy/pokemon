import React from "react";

export default function PokemonList({ pokemon }) {
  return (
    <>
      {pokemon.map(p => (
        <div className="poke" key={p}>
          => &nbsp;&nbsp;&nbsp;{p}
        </div>
      ))}
    </>
  );
}
