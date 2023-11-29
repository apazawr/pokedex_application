import { useMemo } from 'react';

export const usePokeSort = (pokemon, sortBy, vector) => {
  const sortPokes = useMemo(() => {
    if(sortBy){
      return [...pokemon].sort((a, b) => {
        if (vector) {
          if (typeof eval(`a.${sortBy}`) === 'string' && typeof eval(`b.${sortBy}`) === 'string') {
            return eval(`a.${sortBy}`).localeCompare(eval(`b.${sortBy}`));
          }
            return eval(`a.${sortBy}`) - eval(`b.${sortBy}`);
        } else {
          if (typeof eval(`a.${sortBy}`) === 'string' && typeof eval(`b.${sortBy}`) === 'string') {
            return eval(`b.${sortBy}`).localeCompare(eval(`a.${sortBy}`));
          }
            return eval(`b.${sortBy}`) - eval(`a.${sortBy}`);
        };
      });
    };
    return pokemon;
  }, [pokemon, sortBy, vector]);
  return sortPokes;
}


export const usePokeSearch = (pokemon, search) => {
  const searchedPokemon = useMemo(() => {
    return pokemon.filter(poke => poke.name.toLowerCase().includes(search.toLowerCase()))
  },[search]);
  return searchedPokemon;
}

export const useSearchSort = (pokemon, sortBy, search, vector) => {
  const sortPokes = usePokeSort(pokemon, sortBy, vector);
  const searchedAndSorted = useMemo(() => {
      return sortPokes.filter(poke => poke.name.toLowerCase().includes(search.toLowerCase()))
    },[search, sortPokes]);
  return searchedAndSorted;
} 

