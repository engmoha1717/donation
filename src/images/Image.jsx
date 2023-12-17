import React, { useRef, useState } from 'react'
import './image.css'

export default function Image() {
  const [pickedImage, setPickedImage] = useState();
  const imageInput=useRef()
  const handlePickClick=()=>{
    imageInput.current.click()
  }
  const  handleImageChange=()=>{
    let file=imageInput.current.files[0];
    if(!file) return;
    let reader=new FileReader();
    reader.onload=function(){
      setPickedImage(reader.result);
      }
      reader.readAsDataURL(file);
      
  }
  return (
    <div>
      <h1>Upload an Image</h1>
      <div className='imgpicker'>
      {!pickedImage && <p>no image uploaded</p>}
      {pickedImage && <img className='im' src={pickedImage}/>}
      </div>
     <label htmlFor="">name</label>
     <input type='file' name='name' id='name' 
     onChange={ handleImageChange} ref={imageInput}/>
     <button type='button' onClick={handlePickClick}>upload</button>
    </div>
  )
}
