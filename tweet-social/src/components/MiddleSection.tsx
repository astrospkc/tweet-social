

import { BsGear } from "react-icons/bs";
import { BsCardImage } from "react-icons/bs";

import { BsFillEmojiLaughingFill } from "react-icons/bs";
import { BsCalendar2DayFill } from "react-icons/bs";
import Card from "./Card";
import { Button } from "./ui/button";





export default function MiddleSection() {
    return (
        
        // <div className=" flex flex-row absolute left-1/4 border-l-2 border-gray-700 px-5  bg-white">
        <div className="flex justify-center w-fit  ">
        <main className="flex flex-col w-fit ">
          <div className=" fixed w-2/4 ">
          <div className="flex flex-row justify-around mb-4 border-b-2 border-gray-700">
            
            <div className="hover:bg-purple-950 px-10 py-3 hover:cursor-pointer justify-items-center  w-full border-r-2 border-gray-700">For You</div>
            <div className="hover:bg-purple-950 px-10 py-3 hover:cursor-pointer justify-items-center  w-full">Following</div>
            {/* setting icon */}
            < BsGear className="text-5xl hover:cursor-pointer hover:text-gray-500 "/>
          </div>


          <div className="border-b-2 border-gray-800">
            {/* profile photo */}
            <img src="../images/profile.jpg" alt="" />
            {/* search bar with no boundary  */}   
            <input type="text" placeholder="What's happening" className="bg-gray-800 text-gray-700 px-3 py-2 rounded-3xl w-full text-center" />
            <div className="flex justify-between my-2 mx-3 ">
              {/* icons */}
            <div className="flex flex-row m-2 gap-4">
            <BsCardImage/>
             <BsFillEmojiLaughingFill/>
             <BsCalendar2DayFill/>
            </div>
            <div>
              <Button className="bg-purple-950 text-gray-400 hover:text-black">Tweet</Button>
            </div>
            </div>
            
           
          </div>

          </div>
          

          {/* main content */}
          <div className="my-52 "> 
          {/* Card section */}
          <Card />

          </div>
        </main> 
        

    </div>
    // </div>
);
}