
// Getting Pokemon List
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export async function getPokemonList() {
    const resp = await fetch(BASE_URL + "pokemon?limit=100000&offset=0");
    const dat = await resp.json();
    return dat.results;
}

// Getting desired pokemon's details
export async function getPKMNDetails(name : any) {
    const resp = await fetch(BASE_URL + `pokemon/${name}`);
    const dat = await resp.json();
    return dat.results;
} 
