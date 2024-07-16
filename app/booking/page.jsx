"use client"
import BookingPage from 'components/BookingPage'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'node_modules/mdbreact/dist/css/mdb.css';
const page = () => {
  const handleLog = ()=>{
    console.log("fkajbofakhfboannfalaun");
  }
  return (
    
<>
<button
onClick={handleLog}
>
  Book Now
 
</button>
 <BookingPage/>  

</>
   
  )
}

export default page