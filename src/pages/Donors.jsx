import React from 'react'
import classes from './page.module.css'
import { Link } from 'react-router-dom';
const BloodDonor = [
  {
    id: '1',
    name: "John Doe",
    age: 25,
    gender: "Male",
    bloodGroup: "A+",
    address: "100 Main St, New York City, NY",
    phoneNumber: "+1-9876543210",
    email: "johndoe@gmail.com",
    isActive: true,
    image: './b3.webp',
  },
  {
    id: '2',
    name: "Jane Smith",
    age: 30,
    gender: "Female",
    bloodGroup: "A-",
    address: "100 Second Ave, San Francisco, CA",
    phoneNumber: "+1-1234567890",
    email: "janesmith@gmail.com",
    isActive: false,
    image: './b1.jpg',
  }];


function Donors({ donors }) {
  
  return (
    <ul  className={classes.donor}>
       {donors.map((donor) => (
         <li className={classes.donorlist}>
        <Link to={`/donors/${donor.id}`}>
      <img src={`${donor.image}`} alt="img" />
      <div className={classes.listdetail}>
        <p>Joe doe</p>
        <p>{donor.bloodGroup}</p>
      </div>
        </Link>
      </li>
       ))}
    </ul>
  )
}

export default Donors