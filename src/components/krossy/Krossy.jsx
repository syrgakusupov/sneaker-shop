import React, { useContext, useState } from 'react'
import { Appcontext } from '../../Appcontext'
import Kross from './Kross/Kross'
import s from './Krossy.module.scss'
const Krossy = () => {
  const { jso } = useContext(Appcontext)

  return (
    <div>
      <div className={s.block}>
        {jso.map(item => (
          <Kross item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default Krossy