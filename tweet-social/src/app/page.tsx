


import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import MiddleSection from "@/components/MiddleSection";
  

export default function Home() {
  return (

    <div className="flex flex-row h-screen justify-center w-full mx-10 my-3 relative ">
      {/*section 1, 2, 3 */}
      <div className="w-[20%] fixed left-0 mx-10 ">
      <LeftSidebar/>
      </div>
      <div className="absolute  w-[60%] flex flex-row">
      <div className=" justify-center w-fit  border-r-2 border-l-2 border-gray-800 ">
        <MiddleSection/>
      </div>
      <div className="w-[20%]"><RightSidebar/></div>

      </div>
      


    </div>
 
    
  );
}
