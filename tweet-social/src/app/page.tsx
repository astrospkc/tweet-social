


import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import MiddleSection from "@/components/MiddleSection";
import Middleheader from "@/components/Middleheader";
  

export default function Home() {
  return (
   

      <div className="flex flex-row h-screen justify-center  mx-10 my-3  max-w-full min-h-full ">
      {/*section 1, 2, 3 */}
     <div className="w-[20%] fixed left-0 mx-10 h-full">
      <LeftSidebar/>
      </div>
      <div className="absolute  w-[60%] left-1/5 flex flex-row overflow-hidden">
      
      <div className="   w-full  border-r-2 border-l-2  border-gray-800  ">
        <MiddleSection/>
      </div>
      <div className=""><RightSidebar/></div>

      </div>
      </div>
      

   

    
  );
}



           
{/* //        <div class="min-h-screen flex">
//   <div class="w-20 bg-gray-200 p-4 fixed h-full">  Section 1 Content
//   </div>
//   <div class="flex flex-col w-60 overflow-hidden">  <div class="bg-gray-300 p-4 sticky top-0">  Section 2 Header
//     </div>
//     <div class="flex-grow overflow-y-auto bg-gray-100 p-4">  Section 2 Scrollable Content
//       <p>...</p>  </div>
//   </div>
//   <div class="w-20 bg-gray-400 p-4 overflow-y-auto">  Section 3 Content
//     <p>...</p>  </div>
// </div> */}
