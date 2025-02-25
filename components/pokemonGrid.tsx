"use client"
import { useState } from "react"
import { PokemonCard } from "./pokemonCards";

export function PokemonGrid() {
    const [ searchText, setSearchText ] = useState("");

    return (
        <>
            <div>
                <h3 className="text-2xl py-6 text-center">Search for Your Pokemon!</h3>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <label htmlFor='pkmn-name'>Pokemon Name</label>
                    <input 
                        type='text' 
                        id="pkmn-name" 
                        placeholder='Charizard, Venusaur, Blastoise, Pikachu, etc.' 
                        value={searchText}
                        onChange={(ev) => setSearchText(ev.target.value)}
                    />
                </div>
            </div>
            <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                <PokemonCard name="Pikachu" />
            </div>
        </>
    );
}
