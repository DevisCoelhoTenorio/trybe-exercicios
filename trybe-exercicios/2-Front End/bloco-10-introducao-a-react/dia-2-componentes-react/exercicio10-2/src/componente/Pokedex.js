import React from "react";
import Card from "./Card";
import pokemons from "../data";

class Pokedex extends React.Component {
    render() {
        return (
            <>
            {pokemons.map(pokemon => <Card key={pokemon.id} pokemon={pokemon}/>)}
            </>
        )
    }
}

export default Pokedex;


