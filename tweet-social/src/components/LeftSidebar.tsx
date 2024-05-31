import Image from "next/image";
import Link from "next/link";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";
import { BsPass } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsGear } from "react-icons/bs";



const NAVBAR_title= [
  {
    title:"Home",
    icon:BsFillHouseDoorFill
  },
  {
    title:"Explore",
    icon:BsSearch
  },
  {
    title:"Notifications",
    icon:BsBellFill
  },
  {
    title:"Messages",
    icon:MdMail
  },
  
  {
    title:"Lists",
    icon:BsPass
  },
  {
    title:"Communities",
    icon:BsFillPeopleFill
  },
  {
    title:"Profile",
    icon:BsFillPersonFill
  }
]

export default function LeftSidebar() {
  return (
    <main>
        <section className="h-screen flex flex-col justify-around">
          <div > 
          {
            NAVBAR_title.map((item)=>(
              <Link className="flex flex-row justify-items-center my-5 hover:bg-purple-950 hover:cursor-pointer hover:rounded-3xl px-3 py-2" href={`/${item.title.toLowerCase()}`} key={item.title}>
                <div className=" flex " > <item.icon className="text-md"/></div>
               <div className=" flex mx-2 text-md" >
                {item.title}
              </div>
              </Link>
             
            ))
          }
          <button className="bg-purple-900 rounded-3xl py-2 px-5 my-3">Post</button>
          </div>

          
          <div className="text-white mb-20 text-lg flex flex-col">
            <div className="flex flex-row">
            <img src="../images/profile.jpg" alt="" />
            <span>punam</span>
            </div>
            <div>
              username
            </div>
           
          </div>
        </section> 
        
        </main>  
  );
}
