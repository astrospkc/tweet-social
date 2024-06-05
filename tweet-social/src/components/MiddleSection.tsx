

import Card from "./Card";
import Middleheader from "./Middleheader";





export default function MiddleSection() {
    return (
        
        // <div className=" flex flex-row absolute left-1/4 border-l-2 border-gray-700 px-5  bg-white">
        <div className="flex flex-col min-h-full min-w-full  ">
        
        <div className=" p-4 sticky top-0">
          <Middleheader/>
  </div>

          {/* main content */}
          <div className="my-36 "> 
          {/* Card section */}
          <Card />

          </div>
        
        

    </div>
    // </div>
);
}