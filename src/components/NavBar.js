import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MenuIcon from "@mui/icons-material/Menu";
import BorderClearSharpIcon from "@mui/icons-material/BorderClearSharp";
import avatar from "../Images/avatar.jpg"

export default function NavBar() {
  return (
    <div className="w-full flex items-center justify-between p-2 h-12">
      <div className="border-2 border-gray-300">
        <div className="flex items-center gap-1 w-full h-full">
          <input className="outline-none pl-2" type="text" />
          <SearchIcon className="cursor-pointer text-indigo-500" />
        </div>
      </div>
      <div>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2">
            <LanguageIcon className="cursor-pointer text-indigo-500" />
            <span className="text-xs">English</span>
          </div>
          <NightsStayIcon className="cursor-pointer text-indigo-500" />
          <BorderClearSharpIcon className="cursor-pointer text-indigo-500" />
          <div className="relative">
          <NotificationsActiveIcon className="cursor-pointer text-indigo-500" />
          <span  className="bg-red-500 text-white rounded-full h-4 w-4 absolute text-[10px] font-bold text-center p-[1px] left-3 bottom-3"> 1</span>
          </div>
          <div className="relative">
          <ChatBubbleOutlinedIcon className="cursor-pointer text-indigo-500" />
          <span className="bg-red-500 text-white rounded-full h-4 w-4 absolute text-[10px] font-bold text-center p-[1px] left-3 bottom-3">3</span>
          </div>
          <MenuIcon className="cursor-pointer text-indigo-500" />
          <div >
            <div className="relative w-10 h-10 bg-red-500 rounded-full">
              <img className="rounded-full h-full w-full" src={avatar} alt="" />
            </div>
        </div>
        </div>
  
      </div>
    </div>
  );
}
