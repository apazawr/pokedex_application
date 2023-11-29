import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import cl from './MyInput.module.css';

export default function MyInput({baseCl, ...props}) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={cl.myInp}>
      <input {...props} className={`${cl.inp} nes-input ${theme === 'light' ? '' : 'is-dark'}`}/>
    </div>
  );
}
