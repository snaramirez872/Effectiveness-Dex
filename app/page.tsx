"use client"
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import SearchBar from "@/components/SearchBar";
import { fetchPokemon, PokemonData } from "@/lib/pokemonAPI";

export default function Home() {
  const searchParams = useSearchParams();
  const initQuery = searchParams.get("query") || "";
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [error, setError] = useState<string>("");

  const handleSearch = useCallback(async (name: string) => {
    setError("");
    setPokemon(null);

    try {
      const dat = await fetchPokemon(name);
      setPokemon(dat);
    } catch (err) {
      setError((err as Error).message);
    }
  }, []);

  useEffect(() => {
    if (initQuery) handleSearch(initQuery); // restore search results
  }, [initQuery, handleSearch]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <p>{error}</p>}
      {pokemon && (
        <div className='content'>
          <h2>Types that {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} is strong against:</h2>
          <div className='types'>
            {pokemon.strongAgainst.length > 0 ? (
              pokemon.strongAgainst.map((type) => (
                <div key={type} className='type-card'>
                  <Link href={`/types/${type}?query=${initQuery}`}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                  </Link>
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
