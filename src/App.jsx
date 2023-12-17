import {Routes,Route} from 'react-router-dom'
import Donors from './pages/Donors';
import ContactUs from './pages/ContactUs';
import Nav from './lauout/Nav';
import Home from './pages/Home';
import DonorDetail from './pages/DonorDetail';
import { getAllEvents, getFeaturedEvents } from '../data';

// const BloodDonor = [
//   {
//     id:'1',
//     name: "John Doe",
//     age: 25,
//     gender: "Male",
//     bloodGroup: "A+",
//     address: "100 Main St, New York City, NY",
//     phoneNumber: "+1-9876543210",
//     email: "johndoe@gmail.com",
//     isActive: true,
//     image:'./images/b3.webp' ,
//     },
//     {
//       id:'2',
//       name: "Jane Smith",
//       age: 30,
//       gender: "Female",
//       bloodGroup: "A-",
//       address: "100 Second Ave, San Francisco, CA",
//       phoneNumber: "+1-1234567890",
//       email: "janesmith@gmail.com",
//       isActive: false,
//       image:'./images/b2.webp',
//     },
//   ];

    // lastBloodDonationDate: new Date("2020/08/01"),
    // nextAppointmentDate: new Date("2020/09/01"),

function App() {
  const BloodDonor=getAllEvents()
  const featured=getFeaturedEvents()
 
  
  return (
  <div>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home donors={featured}/>}/>
      <Route path="/doners" element={<Donors donors={BloodDonor}/>}/>
      <Route path="/donors/:id" element={<DonorDetail/>}/>
      <Route path="/contact" element={<ContactUs />}/>
    </Routes>
  </div>
  )
}

export default App;
