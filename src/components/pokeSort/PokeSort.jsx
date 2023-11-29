import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import MySelect from '../UI/select/MySelect';
import MyInput from '../UI/input/MyInput';
import UpDownBtn from '../UI/upDownBtn/UpDownBtn';
import cl from './PokeSort.module.css'

export default function PokeSort({number, setNumber, filter, setFilter, setVector, setCurrentPage, totalCountFn}) {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${cl.pokeSort} nes-container is-rounded ${theme === 'light' ? '' : 'is-dark'}`}>
      <div className={cl.pokeSort__showSelect}>
        <span>Show</span>
        <MySelect
          defaultValue='how much'
          value={number}
          options={[
            { value: 10, name: '10' },
            { value: 20, name: '20' },
            { value: 50, name: '50' },
          ]}
          onChange={(pokeValue) => setNumber(pokeValue)}
        />
        <span>pokémons</span>
      </div>

      <div className={cl.pokeSort__input}>
        <MyInput
          type="text"
          value={filter.search}
          placeholder='Search by name'
          onChange={(e) => {
            setFilter({...filter, search: e.target.value});
            setCurrentPage(1);
            totalCountFn();
          }}
        />
      </div>

      <div className={cl.pokeSort__select}>
        <MySelect
          value={filter.sortBy}
          onChange={(sortPoke) => setFilter({...filter, sortBy: sortPoke})}
          defaultValue='Sort by'
          options={[
            {value: 'id', name: 'ID'},
            {value: 'name', name: 'Name'},
            {value: 'hp', name: 'Health points'},
            {value: 'attack', name: 'Attack'},
            {value: 'defense', name: 'Deffense'},
            {value: 'type', name: 'Type'},
          ]}
        />
      </div>
      <div className={cl.pokeSort__bnt}>
        <UpDownBtn setVector={setVector}/>
      </div>
    </div>
  );
}
