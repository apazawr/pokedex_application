import axios from "axios";

export default class AllPoke {

    static async getCount(){
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const count = response.data.count;

        return count;
    }

    static async getAllPokesCharacteristics() {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=9999&offset=0');
        const allPokes = response.data.results;
        const pokemons = await Promise.all(allPokes.map(async p => {
            const response = await axios.get(p.url);
            const { id, name, stats, types, sprites } = response.data;
            const hp = stats[0].base_stat;
            const attack = stats[1].base_stat;
            const defense = stats[2].base_stat;
            const pokemonTypes = types.map(type => type.type.name);
            const icon = sprites.front_default;
            const officialIcon = sprites.other['official-artwork'].front_default;
            
            return { id, name, hp, attack, defense, types: pokemonTypes, icon, officialIcon };
        }));
        return pokemons;
    }
    

    static async getAllId() {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=9999&offset=0');
        const allPokesIds = response.data.results;

        const pokemonId = await Promise.all(allPokesIds.map(async p => {
            const response = await axios.get(p.url);

            return response.data.id; 
        }));
        return pokemonId;
    }
}