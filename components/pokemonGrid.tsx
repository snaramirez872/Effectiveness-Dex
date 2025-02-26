"use client"
import { useState } from "react"
import { PokemonCard } from "./pokemonCards";
//import { getPKMNDetails } from "@/lib/pokemonAPI";

interface Pokemon {
    name: string;
}

interface PokemonGridProps {
    pokemonList: Pokemon[]
}

export function PokemonGrid({ pokemonList } : PokemonGridProps) {
    const [ searchText, setSearchText ] = useState("");
    const [ submitText, setSubmitText ] = useState("");

    function handleChange(ev : any) {
        setSearchText(ev.target.value);
    }

    function handleKey(ev : any) {
        if (ev.key === "Enter") {
            setSubmitText(searchText);
        }
    }

    return (
        <div className="flex flex-col justify-center">
            <div>
                <h3 className="mb-[5vh] text-2xl py-6 text-center">Pok&eacute;mon Type Effectiveness</h3>
                <div className="flex flex-col justify-center items-center">
                    <input 
                        type='text' 
                        id="pkmn-name"
                        autoCorrect="off"
                        className="rounded-md text-left px-2 py-1 w-[70vh] text-black"
                        placeholder='Charizard, Venusaur, Blastoise, Pikachu, etc.' 
                        value={searchText}
                        onChange={handleChange}
                        onKeyDown={handleKey}
                    />
                </div>
                {submitText && (
                    <div className="text-center py-2">
                        <h4>You Entered: {submitText.toUpperCase()}</h4>
                    </div>
                )}
            </div>
            <div id="container" className="mt-[7vh] overflow-y-scroll h-[50vh] w-[120vh] mx-auto">
                {submitText ? (
                    <div className="mb-32 grid place-items-center text-center grid-cols-4 overflow-hidden">
                        {pokemonList.map((mon : any, idx : number) => {
                            return (
                                <PokemonCard key={mon.name || idx} name={mon.name} />
                            )
                        })}
                    </div>
                ) : (
                    <div className="text-center">
                        <ul className="text-white text-xl">
                            <li className="mb-2">Type the Pok&eacute;mon you want in the search bar</li>
                            <li className="mb-2">All Pok&eacute;mon that your desired Pok&eacute;mon are effective against in battle wil be displayed</li>
                            <li className="mb-2">You are able to click and scroll through each Pok&eacute;mon card as needed for more information</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
