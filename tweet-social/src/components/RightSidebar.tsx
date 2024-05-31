import { BsGear } from "react-icons/bs";
import { BsCardImage } from "react-icons/bs";

import { BsFillEmojiLaughingFill } from "react-icons/bs";
import { BsCalendar2DayFill } from "react-icons/bs";




export default function RightSidebar() {
    return (
        

            <div className="bg-red-700 border-rose-200 justify-items-center w-fit ">
{/* <div className="flex w-1/4  border-l-2 border-gray-700 px-3 mx-2 absolute">  */}

                        <section >
            {/* search bar */}
            <input type="text" placeholder="search" className=" mx-3 bg-gray-800 text-gray-700 px-3 py-2 rounded-3xl fixed " />
            {/* what's happening */}
            <div className="absolute mt-20 text-gray-500 border-2 border-gray-800 mx-10 rounded-2xl p-4">
              What's happening
            {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="m-3 text-left" >
            <h3>trending </h3>
            <div>#username</div>
            <h3>123 posts</h3>

            </div>
          

         
        ))}
            </div>
            
            
          </section>
          </div>

            
        
    );
}