import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import classes from './nav.module.css'

function Header() {
  return (
        //navbar with vanila css
        <nav className={classes.navbar}>
              <Link className={classes.logo} to='/'>LOGO</Link>
            <ul className={classes.navlinks}>
                <li>  <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink></li>
                <li>  <NavLink
              to="/doners"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Doners
            </NavLink></li>
                <li>  <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Contact Us
            </NavLink></li>
            </ul>
        </nav>


  )
}

export default Header