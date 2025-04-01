"use client"
import React, { useState, useEffect } from "react";
import { getPokemonListByType } from "@/lib/pokemonAPI";

interface Pokemon {
    pokemon: { name: string };
}

interface PokemonAPIRes {
    pokemon: Pokemon[];
}

interface PokemonListByTypeProps {
    type: string;
}

export const PokemonListByType: React.FC<PokemonListByTypeProps> = ({ type })  => {
    const [pokemonList, setPokemonList] = useState<Pokemon[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDat = async () => {
            try {
                const dat = await getPokemonListByType(type) as unknown as PokemonAPIRes;
                setPokemonList(dat.pokemon);
            } catch (err) {
                setError("Failed to fetch Pokémon for this type.");
            }
        };

        fetchDat();
    }, [type]);

    if (error) return <p className='error-text'>{error}</p>
    if (!pokemonList) return <p>Loading...</p>

    return (
        <>
            <div className='pokemon-list'>
                <div className='pokemon-list'>
                    <h2>Pok&eacute;mon of type {type.charAt(0).toUpperCase() + type.slice(1)}</h2>
                    {pokemonList.map((poke) => (
                        <div key={poke.pokemon.name}>
                            {poke.pokemon.name.charAt(0).toUpperCase() + poke.pokemon.name.slice(1)}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
