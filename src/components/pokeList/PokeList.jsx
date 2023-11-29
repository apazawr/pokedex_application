import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Pokemon from '../pokemon/Pokemon';
import cl from './PokeList.module.css';

export default function PokeList(props) {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${cl.pokeList} nes-container is-rounded ${theme === 'light' ? '' : 'is-dark'}`}>
      {props.pokemon.length ? (
        <div className={cl.list}>
          {props.pokemon.map(p => {
            return (
              <Pokemon
                key={p.name}
                pokemon={p}
                onPoke={props.onPoke}
                onLeave={props.unFocus}
              />
            )
          })}
        </div>
      ) : (
        <div className={cl.noOne}>no one finds</div>
      )}
    </div>
  )
}
