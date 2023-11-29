import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/pages';
import { useSearchSort } from '../hooks/useSearchSort';
import '../styles/pokedex.css';
import 'nes.css/css/nes.min.css';
import Loader from '../components/UI/loader/Loader';
import AllPoke from '../API/AllPoke';
import PokeCard from '../components/pokeCard/PokeCard';
import PokeSort from '../components/pokeSort/PokeSort';
import PokeList from '../components/pokeList/PokeList';
import Pagination from '../components/UI/pagination/Pagination';


function Pokedex() {
  const { theme } = useContext(ThemeContext);

  const [pokemon, setPokemon] = useState([]);
  const [onFocus, setOnFocus] = useState('');
  const [number, setNumber] = useState(20);
  const [filter, setFilter] = useState({ sortBy: 'id', search: '' });
  const [vector, setVector] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [getAllPokemons, allPokemonsLoading, pokemonsError] = useFetching(async () => {
    const pokemon = await AllPoke.getAllPokesCharacteristics();
    setPokemon(pokemon);
    totalCountFn();
    getCurrentPokemons();
    console.error(pokemonsError);
  });

  const searchAndSortedPokemons = useSearchSort(pokemon, filter.sortBy, filter.search, vector);

  const getCurrentPokemons = () => {
    const startIndex = (currentPage - 1) * number;
    const endIndex = startIndex + Number(number);
    return searchAndSortedPokemons.slice(startIndex, +endIndex);
  };

  const totalCountFn = () => setTotalPages(getPageCount(searchAndSortedPokemons.length, number));  

  const getPoke = (poke) => {
    setOnFocus(poke);
  };
  
  useEffect(() => {
    getAllPokemons();
  }, []);

  useEffect(() => {
    totalCountFn();
  }, [searchAndSortedPokemons, number]);
  
  return (
    <div className={`pokedex nes-container ${theme === 'light' ? '' : 'is-dark'}`}>
      {allPokemonsLoading ? (
        <Loader />
      ) : (
        <div className='pokedex__context'>

          <div className='pokedex__tablebar'>
            <PokeCard poke={onFocus} limit={''}/>
          </div>
    
          <div className='pokedex__listbar'>
            <PokeSort number={number} setNumber={setNumber} filter={filter} setFilter={setFilter} setVector={setVector} setCurrentPage={setCurrentPage} totalCountFn={totalCountFn}/>
            <PokeList pokemon={getCurrentPokemons()} onPoke={getPoke} unFocus={() => getPoke(null)} />
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages}/>
          </div>
    
        </div> 
      )}
    </div>
  );
}

export default Pokedex;
