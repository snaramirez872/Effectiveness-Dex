"use client"
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import { fetchPokemon, PokemonData } from "@/lib/pokemonAPI";

export default function Home() {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [error, setError] = useState<string>("");

const handleSearch = async (name: string) => {
  setError("");
  setPokemon(null);

  try {
    const dat = await fetchPokemon(name);
    setPokemon(dat);
  } catch (err) {
    setError((err as Error).message);
  }
}
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <p>{error}</p>}
      {pokemon && (
        <div className='content'>
          <h2>Types that {pokemon.name} is strong against:</h2>
          <div className='types'>
            {pokemon.strongAgainst.length > 0 ? (
              pokemon.strongAgainst.map((type) => (
                <div key={type} className='type-card'>
                  {type}
                </div>
              ))
            ) : (
              <p>Good luck battling with this pokemon.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
