import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function MyButton({ children, baseCl, ...props }) {

  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <button className={`nes-btn ${theme === 'light' ? baseCl : 'is-dark'}`} {...props}>
        {children}
      </button>
    </div>
  );
}
