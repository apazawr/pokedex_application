import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import cl from './PokeCard.module.css';
import health from '../../images/icons/heart.png';
import attack from '../../images/icons/attack.webp';
import defense from '../../images/icons/shield.png';
import { typeColor } from '../../utils/typeColor.js';
import pokeball from '../../images/other/Pokeball-PNG.png'

export default function PokeCard({ poke }) {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${cl.pokeCard} nes-container is-rounded ${theme === 'light' ? '' : 'is-dark'}`}>
      {poke ? (
        <div className={cl.card}>
          <div className={`${cl.title} nes-container is-rounded ${theme === 'light' ? '' : 'is-dark'}`}>
            <span className={cl.its}>It's </span><span className={cl.name}>{poke.name}!</span>
          </div>

          <div className={cl.img}>
            <img className={cl.icon} src={poke.officialIcon || poke.icon || pokeball} alt={poke.name} />
          </div>

          <div className={cl.table}>
            <table className={`${cl.table__stats} nes-table is-bordered is-centered ${theme === 'light' ? '' : 'is-dark'}`}>
              <tbody>
                <tr>
                  <td>
                    <div className={cl.table__stat}>
                      <img className={`${cl.stat__icon} ${cl.health_icon}`} src={health} alt='health'></img>
                      <span>Helth</span>
                    </div>
                  </td>
                  <td>
                    <div className={cl.table__stat}>
                      {poke.hp}
                    </div>
                  </td>
                  <td>
                    <div className={cl.table__stat}>
                      <img className={`${cl.stat__icon} ${cl.attack_icon}`} src={attack} alt='attack'></img>
                      <span>Attack</span>
                    </div>
                  </td>

                  <td>
                    <div className={cl.table__stat}>
                      {poke.attack}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className={cl.table__stat}>
                      <img className={`${cl.stat__icon} ${cl.defense_icon}`} src={defense} alt='dafense'></img>
                      <span>Defence</span>
                    </div>
                  </td>
                  <td>
                    <div className={cl.table__stat}>
                      {poke.defense}
                    </div>
                  </td>
                  
                    {poke.types.map((p) => (
                      <td key={p} colSpan={poke.types.length === 1 ? 2 : 1} style={theme === 'light'? typeColor(p) : {}} className={`${cl.types} ${cl[`type_${p}`]}`}>
                          <div className={cl.table__stat}>
                            {p}
                          </div> 
                      </td>
                    ))}
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      ) : (
        <div className={cl.card}>
          <div className={cl.catch}>Catch it! ---&gt;</div>
          <img src='https://supereffective.gg/_next/image?url=%2Fassets%2Fpokedex.png&w=640&q=75' alt='pokedex' className={cl.icon__pokedex} />
        </div>
      )}
    </div>
  );
}
