import React from 'react'
import Header from '../components/Header'
import System4 from '../components/System4'
import Image from "next/image";

function Covid() {
    return (
        <div className  = "flex-left bg-transparent  items-center text-white ">
         <Header/>
      <div className =  "flex w-60 p-9 mt-7"></div>
      <Image className="relative  p-4 mt-9  h-40 w-full md:h-40 md:w-full lg:h-56 lg:w-full   overflow-x  transition duration-200 transform ease-out "
    src="/lela/bb.jpg"
    layout="fill"
    objectFit = "cover"
    
    />
    <div className="flex-right place-items-center rounded-2xl shadow-md font-bold text-white mt-0 bg-gray-400">

<p className="relative text-center space-x-1 mb-4 rounded-x4  ">
<System4/>
   Ethiopia
Coronavirus Cases: 368,979<br/>
Deaths 6,630<br/>
Recovered: 345,903.
<br/>

What does it feel like to have COVID-19?<br/><br/>
We spoke to one survivor about the short and long-term symptoms of COVID-19.<br/>
Soraya Bahgat spoke to Verified about how it felt to have <br/>the virus and remembered her grandmother, who sadly died from COVID-19.<br/>

<p className="text-black">In the video, she asks us all to take care of our health<br/> and to help stop the spread of COVID-19 to save lives.<br/>

There is now real hope that vaccines will help end the pandemic.<br/> 
But until it is over, we must stay vigilant and continue<br/> 
to protect our loved ones by wearing masks, physically distancing and <br/>washing our hands.</p>
       </p>

</div>
  <div/>
        </div>
    )
}

export default Covid
