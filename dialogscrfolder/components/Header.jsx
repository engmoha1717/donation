import React from 'react'
import { MdPostAdd, MdMessage } from 'react-icons/md';
import classes from './Header.module.css';

function Header({onModalHandler}) {
  return (
    <header className={classes.header}>
    <h1 className={classes.logo}>
      <MdMessage />
      React Poster+
    </h1>
    <p>
      <button className={classes.button} onClick={onModalHandler}>
        <MdPostAdd size={18} />
        New Post
      </button>
    </p>
  </header>
  )
}

export default Header