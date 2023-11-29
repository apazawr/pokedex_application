import React, { useEffect, useContext, useState } from 'react';
import cl from './UpDownBtn.module.css';
import { ThemeContext } from '../../../context/ThemeContext';

export default function UpDownBtn({setVector}) {

    const { theme } = useContext(ThemeContext);

    const changeVector = () => {
      setVector(prev => !prev);
    };

  return (
    <button
        className={`nes-btn ${cl.upDownBtn} ${theme === 'light'? 'is-error' : ''}`}
        onClick={changeVector}
    >
        <div className={cl.rotated}> &#60;&#62;</div>
    </button>
  )
}
