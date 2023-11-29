import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import cl from './RadioTheme.module.css';

export default function RadioTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`nes-container ${cl.radioBtn} ${theme === 'light' ? '' : 'is-dark'}`}>
      <span>Theme :</span>
      <label>
        <input
          type="radio"
          onChange={toggleTheme}
          checked={theme === 'light'}
          className={`${cl.radio}  ${theme === 'light' ? '' : 'is-dark'} nes-radio`}
          name="theme-light"
        />
        <span>light</span>
      </label>

      <label>
        <input
          type="radio"
          onChange={toggleTheme}
          checked={theme === 'is-dark'}
          className={`${cl.radio}  ${theme === 'light' ? '' : 'is-dark'} nes-radio`}
          name="theme-dark"
        />
        <span>dark</span>
      </label>
    </div>
  );
}
