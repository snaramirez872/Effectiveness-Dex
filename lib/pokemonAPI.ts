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

export interface PokemonList {
    name: string;
}

const type_id: Record<string, string> = {
    normal: '1',
    fighting: '2',
    flying: '3',
    poison: '4',
    ground: '5',
    rock: '6',
    bug: '7',
    ghost: '8',
    steel: '9',
    fire: '10',
    water: '11',
    grass: '12',
    electric: '13',
    psychic: '14',
    ice: '15',
    dragon: '16',
    dark: '17',
    fairy: '18'
};

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

        //console.log(`Checking damage for type: ${type}`);

        if (damageTypes && Array.isArray(damageTypes)) {
            //console.log(`Damage types for ${type}: ${damageTypes}`)
            strongAgainst.push(...damageTypes);
        }
    }

    const uniqueStrongAgainst = [...new Set(strongAgainst)];

    if (!dat.types) throw new Error("No type data found for this Pokémon");

    return { name: dat.name, types: pkmnTypes, strongAgainst: uniqueStrongAgainst };
}

export async function getPokemonListByType(type: string): Promise<PokemonList[]> {
    const formattedType = type.trim().toLowerCase();
    
    if (formattedType in type_id) {
        const res = await fetch(BASE_URL + `type/${type_id[formattedType]}`);

        if (!res.ok) throw new Error(`Failed to fetch Pokémon of type: ${formattedType}`);

        const data = await res.json();

        return data;
    } 

    throw new Error(`Invalid Pokémon type: ${type}`);
}
