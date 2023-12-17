import React from 'react'
import Image from '../lauout/Image'
import Donors from './Donors'

function Home({donors}) {
  return (
    <div>
     <Image/>
     <Donors donors={donors}/>
    </div>
  )
}

export default Home