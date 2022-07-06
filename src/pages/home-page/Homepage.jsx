import React, { useState, useContext } from 'react'
import s from './Homepage.module.scss'
import Content from '../../components/Content/Content'
import Search from '../../components/search/Search'
import Krossy from '../../components/krossy/Krossy'
const Homepage = () => {
  return (
    <div>
      <Content />
      <Search />
      <div className={s.krossfit}>
        <Krossy />
      </div>


    </div>
  )
}

export default Homepage