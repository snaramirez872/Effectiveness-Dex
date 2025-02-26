import { PokemonGrid } from "@/components/pokemonGrid";
import { getPokemonList } from "@/lib/pokemonAPI";

export default async function Home() {
  const pokemonList = await getPokemonList();
  console.log(pokemonList);
  return (
      <PokemonGrid pokemonList={pokemonList}/>
  );
}
