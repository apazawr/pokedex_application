import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../context/ThemeContext';
import { getRandomId } from '../../../utils/pages';
import { useFetching } from '../../../hooks/useFetching';
import PokedexImg from '../../../images/other/pokedex_logo_1.png';
import PokedexHome from '../../../images/other/pokemon_home.png';
import Pokeball from '../../../images/other/pokeball_title.png';
import AllPoke from '../../../API/AllPoke';
import RadioTheme from '../radioBtn/RadioTheme';
import cl from './Navbar.module.css';

export const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  const [allIds, setAllIds] = useState([]);
  const [randomId, setRandomId] = useState(0);
  const [getAllPokesIds, idsLoading, idError] = useFetching(async () => {
    const getAllIds = await AllPoke.getAllId();
    console.error(idError);
    setAllIds(getAllIds);
  });
  
  const getNewId = () => {
    return getRandomId(allIds);
  };

  useEffect(() => {
    getAllPokesIds();
  }, []);

  useEffect(() => {
    if (allIds.length > 0) {
      setRandomId(getNewId());
    }
  }, [allIds]);

  return (
    <div className={cl.Nav}>

      <div className={cl.resourses}>

        <span style={{ color: theme === 'light' ? 'black' : 'white' }}>
          Resourses :
        </span>
        <a href='https://pokeapi.co' target='_blank'  rel='noreferrer' title='PokeAPI V2 page' className={`nes-btn ${theme === 'light' ? 'is-warning' : ''}`}>PokéAPI</a>
        <a href='https://nostalgic-css.github.io/NES.css/#' target='_blank' rel='noreferrer' title='NES-css framework page' className={`nes-btn ${theme  === 'light' ? 'is-warning' : ''}`}>NES.css</a>

      </div>


        <div className={cl.links}>

          <Link
            to='/'
            title='Home page'
            className={`nes-btn ${cl.home} ${theme === 'light' ? `is-primary ${location.pathname === '/' ? 'is-warning' : ''}` : '' }`}
          >
            <div>
              <img src={PokedexHome} alt='home' className={cl.home__icon}/>
            </div>
            <span>Home</span>
          </Link>

          <Link
            to='/pokedex'
            title='GO TO POKEDEX'
              className={`nes-btn ${cl.pokedex} ${theme === 'light' ? `is-primary ${location.pathname === '/pokedex' ? 'is-warning': ''}` : ''}`}
          >
            <div>
              <img src={PokedexImg} alt='pokedex' className={cl.pokedex__icon}/>
            </div>
            <span>Pokédex</span>
          </Link>


          {randomId === 0
          ?
            <Link
              onClick={() => setRandomId(getNewId())}
              className={`nes-btn ${cl.pokemon} ${theme === 'light' ? `is-error ${location.pathname.startsWith('/pokedex/')? 'is-warning' : ''}` : ''}`}
              title='information of random pokemon'
              disabled
            >
              <div>
                <img src={Pokeball} alt='Random poke' className={cl.pokemon__icon}/>
              </div>
              <span>Random pokémon</span>
            </Link>
          :
            <Link
              onClick={() => setRandomId(getNewId())}
              to={`/pokedex/${randomId}`}
              className={`nes-btn ${cl.pokemon} ${theme === 'light' ? `is-primary ${location.pathname.startsWith('/pokedex/')? 'is-warning' : ''}` : ''}`}
              title='information of random pokemon'
            >
              <div>
                <img src={Pokeball} alt='Random poke' className={cl.pokemon__icon}/>
              </div>
              <span>Random pokémon</span>
            </Link>
          }

          <div className={cl.radioBtn}>
            <RadioTheme />
          </div>

        </div>

      </div> 
  );
}
