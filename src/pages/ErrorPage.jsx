import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import errorGif from '../images/other/pokedex_error.gif';
import '../styles/error.css';

export default function ErrorPage() {

  const {theme} = useContext(ThemeContext);

  return (
    <div className={`errorPage nes-container ${theme === 'light' ? '' : 'is-dark'}`}>
      <span className='errorPage__span'>
        {`page is not found :(`}
      </span>
      <img className='errorPage__img'src={errorGif} alt="Error"/>
    </div>
  );
}
