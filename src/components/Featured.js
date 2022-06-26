import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowDownUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
export default function Featured() {
  return (
    <div className="shadow-3xl flex flex-col p-2 w-[35%]">
      <div className="flex justify-between">
        <h1 className="text-sm">Total Revenue</h1>
        <MoreVertIcon className="cursor-pointer text-sm" />
      </div>
      <div className="flex flex-col space-y-4 items-center">
        <div className="w-[100px] h-[100px]"> 
          <CircularProgressbar value={70} text="70%" strokeWidth={4} />
        </div>  
        <div className="flex flex-col items-center space-y-2 ">
          <h1 className="text-sm font-semibold text-gray-500">Total sales made today</h1>
          <h1 className="text-3xl font-semibold">$400</h1>
          <h1 className="text-xs text-center text-gray-500 w-[70%]">Previous transaction processing payment may not be included</h1>
         {/* Summary */}
         <div className="flex space-x-5 text-sm">
          <div className="flex flex-col items-center space-y-3">
            <div className="text-gray-800"> Target</div>
            <div className="flex items-center text-red-500" ><KeyboardArrowDownIcon className="text-red-500"/>  $12.6k</div>
        
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className="text-gray-800"> Last Weekend</div>
            <div className="flex items-center text-green-500" ><KeyboardArrowDownUpOutlinedIcon className="text-green-500" />  $12.6k</div>
        
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className="text-gray-800"> Last Month</div>
            <div className="flex items-center text-green-500" ><KeyboardArrowDownUpOutlinedIcon className="text-green-500" />  $12.6k</div>
        
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
