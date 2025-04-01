"use client";
import Link from "next/link";
import { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import SearchBar from "@/components/SearchBar";
import { fetchPokemon, PokemonData } from "@/lib/pokemonAPI";

// Helper component to handle search params safely
function SearchParamsHandler({ onSearch }: { onSearch: (query: string) => void }) {
  const searchParams = useSearchParams();
  const initQuery = searchParams.get("query") || "";

  useEffect(() => {
    if (initQuery) onSearch(initQuery); // Restore search results on page load
  }, [initQuery, onSearch]);

  return null; // No UI needed
}

export default function Home() {
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

  return (
    <>
      <Suspense fallback={<p>Loading search...</p>}>
        <SearchParamsHandler onSearch={handleSearch} />
      </Suspense>
      <SearchBar onSearch={handleSearch} />
      {error && <p>{error}</p>}
      {pokemon && (
        <div className="content">
          <h2>Types that {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} is strong against:</h2>
          <div className="types">
            {pokemon.strongAgainst.length > 0 ? (
              pokemon.strongAgainst.map((type) => (
                <div key={type} className="type-card">
                  <Link href={`/types/${type}?query=${pokemon.name}`}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </Link>
                </div>
              ))
            ) : (
              <p>Good luck battling with this Pokémon.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
