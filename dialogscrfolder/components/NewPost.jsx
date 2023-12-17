import classes from './post.module.css';

function NewPost() {
    const style={
        padding: "0.75rem 1.5rem",
        backgroundColor: "#a990fb",
        color: "#2a2630",
        border:" none",
        bordeRadius: "4px",
        boxShadow:" 0 2px 8px rgba(0, 0, 0, 0.2)",
        cursor: "pointer",
        fontWeight: "bold"
    }
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="tittle">Your Tittle</label>
        <input type="text" id="tittle" required />
      </p>
      <p>
        <label htmlFor="author">Author</label>
        <input type="text" id="author" required />
      </p>
      <p>
        <label htmlFor="description">Message</label>
        <textarea id="description" required rows={3} />
      </p>
      <button 
       style={style} >Send </button>
    </form>
  );
}

export default NewPost;