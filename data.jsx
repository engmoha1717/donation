import b from "./src/assets/b.jpg";
import b2 from "./src/assets/b2.webp";
import b3 from "./src/assets/b3.webp";


const BloodDonor = [
   {
    id:'1',
    name: "Doe",
    age: 25,
    gender: "Male",
    bloodGroup: "A+",
    address: "100 Main St, New York City, NY",
    phoneNumber: "+1-9876543210",
    email: "johndoe@gmail.com",
    isActive: true,
    image:b,
    //image:'./images/b3.webp' ,
    },
    {
      id:'2',
      name: "Jane Smith",
      age: 30,
      gender: "Female",
      bloodGroup: "A-",
      address: "100 Second Ave, San Francisco, CA",
      phoneNumber: "+1-1234567890",
      email: "janesmith@gmail.com",
      isActive: false,
      image:b2,
      //image:'./images/b2.webp',
    },
    {
      id:'3',
      name: "ibrahim",
      age: 34,
      gender: "Male",
      bloodGroup: "AB+",
      address: "100 Second Ave, San Francisco, CA",
      phoneNumber: "+1-1234567890",
      email: "janesmith@gmail.com",
      isActive: false,
      image:b3,
      //image:'./images/b2.webp',
    },
    {
      id:'4',
      name: "noora",
      age: 29,
      gender: "Female",
      bloodGroup: "AB-",
      address: "100 Second Ave, San Francisco, CA",
      phoneNumber: "+1-1234567890",
      email: "janesmith@gmail.com",
      isActive: true,
      image:b2
      //image:'./images/b2.webp',
    },
  ];
  
  export function getFeaturedEvents() {
    return BloodDonor.filter((event) => event.isActive);
  }
  
  export function getAllEvents() {
    return BloodDonor;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return BloodDonor.find((event) => event.id === id);
  }