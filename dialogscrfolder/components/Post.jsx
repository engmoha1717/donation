import React from 'react'
import classes from './post.module.css'
function Post({ tittle, author, description }) {
    return (
        <div className={classes.post}>
            <h3 className={classes.author}>
            <span >Tittle</span>: {tittle}</h3>
            <p style={{ color: "red" }}> {author}</p>
            <p className={classes.pp}>{description}</p>
        </div>
    )
}

export default Post