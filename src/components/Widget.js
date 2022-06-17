import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import MonetizationOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
export default function Widget({ type }) {
  let data;
  const amount=500;
  const percentage=25;

  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PeopleAltIcon className="self-end bg-red-100 p-1 text-red-600 rounded-full" />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon className="self-end bg-indigo-100 p-1 text-indigo-600 rounded-full" />
        ),
      };
      break;
    case "orders":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon className="self-end bg-yellow-100 p-1 text-yellow-600 rounded-full" />
        ),
      };
      break;
    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View all net earnings",
        icon: (
          <MonetizationOutlinedIcon className="self-end bg-green-100 p-1 text-green-600 rounded-full" />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="p-2 flex items-center justify-between bg-red w-[15rem] h-[7rem] rounded-xl shadow-3xl hover:-translate-y-1 transition duration-1000">
      <div className="flex flex-col p-1 space-y-2 h-full">
        <h1 className="text-xs text-gray-500">{data.title}</h1>
        <h1 className="text-3xl font-medium">{data.isMoney?`$ ${amount}`:amount}</h1>
        <p className="decoration-dotted text-[12px] underline underline-offset-1 cursor-pointer">
          {data.link}
        </p>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="flex items-center">
          <KeyboardArrowUpIcon className="cursor-pointer" />
          <span className="text-sm">{percentage}%</span>
        </div>
        <div className="flex justify-end">
        {data.icon}
        </div>
      </div>
    </div>
  );
}
