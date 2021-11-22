import { useSession } from 'next-auth/client';
import React from 'react';
import Header from "../components/Header";
import Image from "next/image";
import System3 from '../components/System3';


function Contact(user) {
  const [session] = useSession();
  return (
    <div className  = "flex-row bg-transparent  items-center text-white">
   <Header/>
<div className = "w-60 p-9 mt-7 flex-row">

<Image className="relative   p-4 mt-9  h-40 w-full md:h-40 md:w-full lg:h-56 lg:w-full  cursor-pointer overflow-x  transition duration-200 transform ease-out"
src="/lela/v.jpg"
layout="fill"
objectFit = "cover"

/>
   
<div className="flex-right flex-row place-items-center rounded-2xl shadow-md font-bold text-pink-900 mt-0 bg-gray-400">

 <p className="relative font-bold space-x-1 mb-4 rounded-x4 rounded-t-lg rounded-b-lg">
 <System3/>
  You can Contact us on<br/> 🌟#E-mail or follow us on:<br/>🌟#twitter<br/> 🌟#facebook,<br/>🌟#instagram etc. 
        </p>

</div>
</div>
</div>
)
}


export default Contact;
