import React, { useState } from 'react'
import Header from "./components/Header";
import PostsList from "./components/PostsList";

function App() {
  const [open,setOpen]=useState(false)
  const modalHandler=()=>{
      setOpen(!open);
  }
  return (
  <>
  <Header onModalHandler={modalHandler}/>
  <PostsList onModalHandler={modalHandler} open={open}/>
  </>
  )
}

export default App;
