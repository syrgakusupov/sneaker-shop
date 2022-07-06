import React from 'react'
import logo from '../../img/logo.svg'
import s from './Header.module.scss'
import cart from '../../img/cart.svg'
import serdechka from '../../img/serdechka.svg'
import contacts from '../../img/contacts.svg'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <div className={s.block}>
      <div className={s.nav}>
        <NavLink to='/'>
          <img src={logo} alt="" />
        </NavLink>

      </div>
      <div className={s.carzina}>
        <NavLink to='/Basket'>
          <img src={cart} alt="" />
        </NavLink>
        <span>
          1205 руб.
        </span>
        <img src={serdechka} alt="" />
        <img src={contacts} alt="" />
      </div>
      </div>
    </header>
  )
}

export default Header