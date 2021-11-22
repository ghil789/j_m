import { signOut, useSession } from 'next-auth/client';
import React from 'react';
import Header from "../components/Header";
import Image from "next/image";
import System from "../components/System";
function Services() {
    const [session] = useSession();
    return (
        <div className  = "flex-left bg-transparent  items-center text-white ">
      <Header/>
    <div className = "flex w-80 p-9 mt-7">
    
    <Image className="relative  p-4 mt-9  h-40 w-full md:h-40 md:w-full lg:h-56 lg:w-full   overflow-x  transition duration-200 transform ease-out "
    src="/new/5.jpg"
    layout="fill"
    objectFit = "cover"
    
    />
    
          
    <div className="flex-right place-items-center rounded-2xl shadow-md text-white font-medium mt-0 bg-white">
    
     <p className="relative italic space-x-1 mb-4 rounded-x4  "> 
    <System/>
    This web service is designed to adress information for Jimma Universitie's  
regular, extension ,and distance students. 
and give detail information about the image of Jimma's town for Fresh students 
 Also posts about Job Ads and requirements for graduate students plus 
provide the platform for students to share their precious events and moments. 
</p>

    </div>
    
    </div>
    
    </div>
    )
    }
    

export default Services
