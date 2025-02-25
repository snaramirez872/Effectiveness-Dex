"use client"
import { useState } from "react"
import { PokemonCard } from "./pokemonCards";

export function PokemonGrid() {
    const [ searchText, setSearchText ] = useState("");

    return (
        <div className="flex flex-col justify-center">
            <div>
                <h3 className="text-2xl py-6 text-center">Pokemon Type Effectiveness</h3>
                <div className="flex flex-col justify-center items-center">
                    <label htmlFor='pkmn-name'>Pokemon Name</label>
                    <input 
                        type='text' 
                        id="pkmn-name"
                        autoCorrect="off"
                        className="text-left px-2 py-1 w-13 text-black-500"
                        placeholder='Charizard, Venusaur, Blastoise, Pikachu, etc.' 
                        value={searchText}
                        onChange={(ev) => setSearchText(ev.target.value)}
                    />
                </div>
                {searchText && (
                    <div className="text-center py-2">
                        <h4>You Entered: {searchText.toUpperCase()}</h4>
                    </div>
                )}
            </div>
            <div id="container" className="overflow-y-scroll h-[50vh] w-[120vh] mx-auto">
                <div className="mb-32 grid place-items-center text-center grid-cols-4 overflow-hidden">
                    <PokemonCard name="Venusaur" />
                    <PokemonCard name="Blastoise" />
                    <PokemonCard name="Charizard" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                    <PokemonCard name="Pikachu" />
                </div>
            </div>
        </div>
    );
}
