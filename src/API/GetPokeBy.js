import axios from "axios";

export default class GetPokeBy {

    static async getPokeById(id) {
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return pokemon;
    }
}