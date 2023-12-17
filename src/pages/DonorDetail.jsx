import React from 'react'
import { useParams } from 'react-router-dom'
import { getEventById, getFeaturedEvents } from '../../data'
import classes from './detail.module.css'
import Image from '../images/Image'

function DonorDetail() {0
  const { id } = useParams()
   // const fetchedItem = data.find((i) => i.id === Number(id));
  
  const featutedById=getEventById(id)

  return (
    <div className={classes.container}>
      <div className={classes.detail}>
        <>
        <img className={classes.img} 
         src={`${featutedById.image}`} alt={featutedById.address} />
        </>
        <div className={classes.items}>
        <h4> <span style={{color:'#ccc'}}>NAME</span> : {featutedById.name}</h4>
        <h4>GENDER : {featutedById.gender}</h4>
        <h6>address : {featutedById.address}</h6>
        <h4>PHONE : {featutedById.phoneNumber}</h4>
        <h4>EMAIL : {featutedById.email}</h4>
        <h4>BLOOD TYPE  : {featutedById.bloodGroup}</h4>
        </div>
      </div>
      
      <Image/>

    </div>
  )
}

export default DonorDetail



{/* <>
<img src={featutedById.image} alt={featutedById.title} />
</>
<h1>{featutedById.title}</h1>
<h2>{featutedById.location}</h2>
<h3>{featutedById.date}</h3>
<h4>{featutedById.time}</h4> */}