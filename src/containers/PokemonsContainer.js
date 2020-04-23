import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../graphql/get_pokemons";

export const PokemonsContainer = () => {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 9 },
  });

  return (
    <div className="pokemons">
      {pokemons && pokemons.map((pokemon) => console.log(pokemon))}
    </div>
  );
};
