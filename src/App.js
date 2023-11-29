import './styles/App.css';
import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Pokedex from './pages/Pokedex'
import { Navbar } from './components/UI/navbar/Navbar';
import ErrorPage from './pages/ErrorPage';
import { PokemonPage } from './pages/PokemonPage';
import Footer from './components/UI/footer/Footer';
import { ThemeContext } from './context/ThemeContext';
import lightBack from './images/pixel/water_background.jpg';
import darkBack from './images/pixel/back_house__dark.jpg';


export default function App() {

  const { theme } = useContext(ThemeContext);

  const backgroundImage = theme === 'light' ? lightBack : darkBack;

  return (
    <div
      className={`App`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      >
      <div className='content'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<PokemonPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
