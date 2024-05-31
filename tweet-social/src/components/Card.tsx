import { BsBookmarkFill } from "react-icons/bs";
import { BsChat } from "react-icons/bs";
import { BsFillHeartFill } from "react-icons/bs";
import { BsRepeat } from "react-icons/bs";


export default function LeftSidebar() {
    return (
<div className="flex flex-row">
    {/* comment, repost, like, impression , bookmark */}
    {/* 2 section one for the avatar, for content-> name, username, date ,in one line , next line -> content, next line -> icons  */}
    <div className="rounded-full w-fit h-fit mx-5 bg-red-800" >
        avatar
    </div>
    <div>
        <div className="flex flex-row">
        <span>name</span>
        <span>username</span>
        <span>date</span>
        </div>
        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ut id consequatur earum? Est officiis accusantium alias, dolores porro in.</div>
        <div className="flex flex-row text-white justify-around">
        < BsBookmarkFill/>
         <BsChat/>
         <BsFillHeartFill/>
        <BsRepeat/>
        </div>
        
    </div>
</div>

    )}