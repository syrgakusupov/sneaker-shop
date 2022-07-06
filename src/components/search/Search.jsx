import React from 'react'
import s from './Search.module.scss'
import searchlogo from '../../img/searchlogo.svg'
const Search = () => {
  return (
    <div className={s.searchblock}>
        <h2>
        Все кроссовки
        </h2>
        <div className={s.searchlogo}>
            <img src={searchlogo} alt="" />
            <input type="text" 
            placeholder='Поиск...'
            />
        </div>
    </div>
  )
}

export default Search