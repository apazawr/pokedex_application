import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useFetching } from '../hooks/useFetching';
import { ThemeContext } from '../context/ThemeContext';
import { typeColor } from '../utils/typeColor.js';
import GetPokeBy from '../API/GetPokeBy';
import Loader from '../components/UI/loader/Loader';
import pokeball from'../images/other/Pokeball-PNG.png'
import '../styles/pokemonPage.css';

export const PokemonPage = () => {

  const { theme } = useContext(ThemeContext);
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();

  const [getPoke, isPokeLoading, getPokeError] = useFetching(async () => {
    const response = await GetPokeBy.getPokeById(id);
    setPokemon(response.data);
    console.error(getPokeError);
  });

  useEffect(() => {
    getPoke();
  }, [id]);

  const upperFirstLetter = (string) => {
    if (string !== undefined)
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const getProgressClass = (value, max) => {
    const percentage = (value / max) * 100;

    if (percentage <= 25) {
      return 'is-error';
    } else if (percentage <= 50) {
      return 'is-warning';
    } else {
      return 'is-success';
    }
  };

  const calculateTotalStats = () => {
    if (pokemon.stats) {
      return pokemon.stats.reduce((total,_stat) => total +_stat.base_stat, 0);
    }
    return 0;
  };
  const hiddenType = (is_hidden) => {
    return is_hidden ? '(hidden)' : '';
  }

  return (
    <div className={`pokemonPage nes-container ${theme === 'light' ? '' : 'is-dark'}`}>
      {isPokeLoading
      ?
        <Loader/>
      :(
        pokemon.types && 
        <div>
          <div className={`pokemonPage__baseContent nes-container is-rounded  ${theme === 'light' ? '' : 'is-dark'}`}>

            <div className={`pokemonPage__icon  nes-container is-rounded  ${theme === 'light' ? '' : 'is-dark'}`} style={theme === 'light' ? typeColor(pokemon.types[0].type.name) : {}}>
              {pokemon.sprites && (

                  <img className='pokemonPage__img' src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default || pokeball} alt={pokemon.name} />

              )}
            </div>

            <div className='pokemonPage__baseStats'>
             
              <div className='pokemonPage__baseStats_flex nes-container is-rounded'>
                <div className='pokemonPage__baseStats_main'>
                  <div className='pokemonPage__option name'>{upperFirstLetter(pokemon.name)}</div>
                  <div className='pokemonPage__option'>ID #{pokemon.id}</div>             
                  <div className='baseStats weight'>Weight {pokemon.weight ? pokemon.weight.toFixed(1) : '-'} kg</div>
                  <div className='baseStats heigth'>Height {pokemon.height ? (pokemon.height / 10).toFixed(1) : '-'} m</div>
                  <div className='baseStats type'>Type 
                    {pokemon.types.map(type => (
                      <div key={type.type.name} className='pokemon__type' style={theme === 'light' ? typeColor(type.type.name) : {}}>{type.type.name}</div>
                    ))}
                  </div>
                </div>
                <div className='pokemonPage__baseStats_stats'>    
                  <span className='pokemonPage__option'>Stats:</span>
                  {pokemon.stats && (
                    <div className='progresses__flex'>

                      <div className='progresses__flex_stat'>
                        <div className='stat__name'>Health points:</div>
                        <div className='stat__value'>{pokemon.stats[0].base_stat}</div>
                        <progress className={`nes-progress ${getProgressClass(pokemon.stats[0].base_stat, 255)} ${theme === 'light' ? '' : 'is-pattern'}`} value={pokemon.stats[0].base_stat} max='255'></progress>
                      </div>
                      
                      <div className='progresses__flex_stat'>
                        <div className='stat__name'>Attack:</div>
                        <div className='stat__value'>{pokemon.stats[1].base_stat}</div>
                        <progress className={`nes-progress ${getProgressClass(pokemon.stats[1].base_stat, 190)} ${theme === 'light' ? '' : 'is-pattern'}`} value={pokemon.stats[1].base_stat} max='190'></progress>
                      </div>

                      <div className='progresses__flex_stat'>
                        <div className='stat__name'>Defense:</div>
                        <div className='stat__value'>{pokemon.stats[2].base_stat}</div>
                        <progress className={`nes-progress ${getProgressClass(pokemon.stats[2].base_stat, 250)} ${theme === 'light' ? '' : 'is-pattern'}`} value={pokemon.stats[2].base_stat} max='250'></progress>
                      </div>

                      <div className='progresses__flex_stat'>
                        <div className='stat__name'>Special attack:</div>
                        <div className='stat__value'>{pokemon.stats[3].base_stat}</div>
                        <progress className={`nes-progress ${getProgressClass(pokemon.stats[3].base_stat, 194)} ${theme === 'light' ? '' : 'is-pattern'}`} value={pokemon.stats[3].base_stat} max='194'></progress>
                      </div>

                      <div className='progresses__flex_stat'>
                        <div className='stat__name'>Special defense:</div>
                        <div className='stat__value'>{pokemon.stats[4].base_stat}</div>
                        <progress className={`nes-progress ${getProgressClass(pokemon.stats[4].base_stat, 250)} ${theme === 'light' ? '' : 'is-pattern'}`} value={pokemon.stats[4].base_stat} max='250'></progress>
                      </div>

                      <div className='progresses__flex_stat'>
                        <div className='stat__name'>Speed:</div>
                        <div className='stat__value'>{pokemon.stats[5].base_stat}</div>
                        <progress className={`nes-progress ${getProgressClass(pokemon.stats[5].base_stat, 200)} ${theme === 'light' ? '' : 'is-pattern'}`} value={pokemon.stats[5].base_stat} max='200'></progress>
                      </div>

                    </div>
                  )}

                  <div className='progresses__flex_stat'>
                    <div className='stat__name pokemonPage__option'>Total stats:</div>
                    <div className='stat__value'>{calculateTotalStats()}</div>
                    <progress className={`nes-progress ${getProgressClass(calculateTotalStats(), 1339)} ${theme === 'light' ? '' : 'is-pattern'}`} value={calculateTotalStats()} max='1339'></progress>
                  </div>

                </div>
              </div>

              <div>
                <div className='pokemonPage__baseStats_flex nes-container is-rounded'>
                  <div className='additionally abilities pokemonPage__option'>Abilities :
                    <ul>
                     {pokemon.abilities && pokemon.abilities.map(a => <li key={a.ability.name + a.is_hidden}>{a.ability.name} {hiddenType(a.is_hidden)}</li>)}
                    </ul>
                  </div>

                  <div className='additionally held'>Held items :
                    {pokemon.held_items && (
                      <div>
                        {pokemon.held_items.length !== 0 
                        ?
                          <ul>
                            {pokemon.held_items.map(i => <li key={i.item.name}>{i.item.name}</li>)}
                          </ul>
                        :
                        <span>No item helds</span>}
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>
          
          </div>

          <div className={`pokemonPage__moves nes-container is-rounded ${theme === 'light' ? '' : 'is-dark'}`}>
            <span className='additionally'>Moves:</span>
            <ul>
              {pokemon.moves && pokemon.moves.map(move => <li key={move.move.name}>{move.move.name}</li>)}
            </ul>
          </div>
          
        </div>
      )}
    </div>
  );
};
