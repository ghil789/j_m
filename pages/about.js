import { signOut, useSession } from 'next-auth/client';
import React from 'react'
import Header from "../components/Header";
import Image from "next/image";
import System2 from '../components/System2';
import InfoIcon from '@mui/icons-material/Info';
function about() {
    const [session] = useSession();
    return (
      <div className  = "flex-left bg-transparent  items-center text-white">
         <Header/>
        <div className = "flex w-85 p-7 mt-5">

         <Image className="relative   p-4 mt-9  h-40 w-full md:h-40 md:w-full lg:h-56 lg:w-full"
        src="/lela/s.jpg"
       layout="fill"
       objectFit = "cover"
       
      />
               
        <div className="flex-right place-items-center rounded-2xl  shadow-md text-pink-900 font-bold mt-0 bg-gray-400">
        
        <p  className="relative p-2 font-serif space-x-1 mb-4 rounded-x4 rounded-t-lg bg-green-100 rounded-b-lg"> <System2/> This is Jimma University student website, this support and service is given by students from anywhere whose domain is in Jimma University!
                As stated we the student of Jimma University is responsible for the information we upload and blog we write 
                so we must be care full for the information we inform to our community.
                And this platform is designed for students in order to get accurate information and give a great detail about the image of Jimma's town for Fresh students  
                also as an info platform we post  job Ads and requirements.  
               
                 </p> 
                
        </div>
        </div>
        </div>
    )
}

export default about
