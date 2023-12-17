import React from 'react'
import p2 from '../assets/b.jpg'
import classes from './nav.module.css'

function Image() {
  return (
    <div className={classes.img}>
        <img src={p2} alt="image" />
    </div>
  )
}

export default Image