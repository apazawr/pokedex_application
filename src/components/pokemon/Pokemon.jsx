import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import pokeball from '../../images/other/Pokeball-PNG.png';
import cl from './Pokemon.module.css';


export default function Pokemon({ pokemon, onPoke, onLeave }) {

  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <div
      className={`${cl.pokemon} nes-container is-rounded ${theme === 'light' ? '' : 'is-dark'}`}
      onClick={() => navigate(`/pokedex/${pokemon.id}`)}
      onMouseEnter={() => onPoke(pokemon)}
      onMouseLeave={onLeave}
    >
      <div className={`${cl.description} ${theme === 'light' ? `${cl.lighttheme}` : `${cl.darktheme}`}`}>

        <div className={cl.id}>
          {`No.${pokemon.id.toString().padStart(3, '0')} ${pokemon.name}`}
        </div>

        <div className={cl.img}>
          <img
            src={pokemon.icon || pokeball}
            alt=''
            className={cl.icon}
          />
        </div>
        
      </div>
    </div>
  );
}
