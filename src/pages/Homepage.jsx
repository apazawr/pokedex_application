import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/homePage.css';
import pokedex from '../images/pixel/pokedex_pixel.gif';
import { useNavigate } from 'react-router-dom';

export default function Homepage() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [animationComplete, setAnimationComplete] = useState(false);
  const [visible, setVisible] = useState(false);
  const completeAnimation = () => {
    setAnimationComplete(true);
    setVisible(true);
  };

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimationComplete(true);
      setVisible(true)
    }, 10000);
  return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <div className={`home nes-container ${theme === 'light' ? '' : 'is-dark'}`} onClick={completeAnimation}>
      <p className="home__title">What is this?</p>
      <div className={ animationComplete ? 'text' : 'typing'}>
        <p>"Pokédex App" is an educational project developed using React, Nes.css, JavaScript, and CSS.</p>
        <p>This application provides the opportunity to explore the world of Pokémon using the public Pokémon API.</p>
        <p>"Pokédex App" allows users to discover basic information about Pokémon through the PokéAPI.</p>
        <p>You can access the complete list of Pokémon, utilize the Pokédex functionality, and even encounter a random Pokémon.</p>
      </div>
      <div className={visible ? 'visible' : 'notVisible'}>
        <div className='pokedex__levitation'>
          <img src={pokedex} alt='pokedex' className='pokedex__icon' onClick={() => navigate(`/pokedex`)}></img>
        </div>
        <div className={`${theme === 'light' ? 'pokedex__shadow' : ''}`}></div>
      </div>
    </div>
  );
}