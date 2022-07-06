import React from 'react'
import Forever from '../../img/forever.svg'
import s from './Content.module.scss'
const Content = () => {
  return (
    <div>
        <div className={s.flover}>
        <img src={Forever} alt="" />
      </div>
    </div>
  )
}

export default Content