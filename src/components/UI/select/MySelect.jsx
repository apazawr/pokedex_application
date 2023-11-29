import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import cl from './MySelect.module.css'

export default function MySelect({defaultValue, options, value, onChange}) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${cl.mySelect} nes-select ${theme === 'light' ? '' : 'is-dark'}`}>
        <select
          className={cl.select}
          value={value}
          onChange={e => onChange(e.target.value)}
        >
          <option disabled>{defaultValue}</option>
          {options.map(o => {
            return (
              <option key={o.value} value={o.value}>
                {o.name}
              </option>
            )
          })}
        </select>
    </div>
  );
}
