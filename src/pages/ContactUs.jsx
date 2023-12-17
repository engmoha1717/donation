import React from 'react'
import classes from './contact.module.css'

function ContactUs() {
  return (
    <div className={classes.contact}>
      <h1>Contact Us</h1>
      <form className={classes.form}>
        <div className={classes.row}>
        <p className={classes.control}>
          <label>Name</label>
          <input type="text" name="name" />
        </p>
        <p className={classes.control}>
          <label>Email</label>
          <input type="email" name="email" />
        </p>
        <p className={classes.control}>
          <label>Message</label>
          <textarea name="message" />
        </p>
        <p className={classes.control}>
        <button className={classes.btn} type="submit">Submit</button>
        </p>
        </div>
      </form>
    </div>
  )
}

export default ContactUs