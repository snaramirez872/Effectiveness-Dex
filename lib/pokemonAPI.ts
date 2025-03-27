import typeChartData from './types.json';

interface TypeChart {
    types: Record<string, { double_damage: string[] }>;
}

const typeChart: TypeChart = typeChartData as TypeChart;

export interface PokemonData {
    name: string;
    types: string[];
    strongAgainst: string[];
}


const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export async function fetchPokemon(name: string): Promise<PokemonData> {
    const formattedName = name.trim().toLowerCase(); // ensures input works with API
    const res = await fetch(BASE_URL + `pokemon/${formattedName}`);

    if (!res.ok) throw new Error("Pokémon not found");

    const dat = await res.json();

    const pkmnTypes = dat.types.map((t: { type: { name: string } }) => t.type.name);

    const strongAgainst: string[] = [];

    for (const type of pkmnTypes) {
        const damageTypes = typeChart.types[type]?.double_damage;

        console.log(`Checking damage for type: ${type}`);

        if (damageTypes && Array.isArray(damageTypes)) {
            console.log(`Damage types for ${type}: ${damageTypes}`)
            strongAgainst.push(...damageTypes);
        }
    }

    const uniqueStrongAgainst = [...new Set(strongAgainst)];

    if (!dat.types) throw new Error("No type data found for this Pokémon");

    return { name: dat.name, types: pkmnTypes, strongAgainst: uniqueStrongAgainst };
}
