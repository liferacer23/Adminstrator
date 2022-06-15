import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import BorderStyleIcon from "@mui/icons-material/BorderStyle";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SettingsIcon from '@mui/icons-material/Settings';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
export default function SideBAr() {


    const MaterialUISwitch = styled(Switch)(({ theme }) => ({
        width: 62,
        height: 34,
        padding: 7,
        '& .MuiSwitch-switchBase': {
          margin: 1,
          padding: 0,
          transform: 'translateX(6px)',
          '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
              )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
              opacity: 1,
              backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
          },
        },
        '& .MuiSwitch-thumb': {
          backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
          width: 32,
          height: 32,
          '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
              '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
          },
        },
        '& .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
          borderRadius: 20 / 2,
        },
      }));
      
  return (
    <div className="md:absolute -left-[150px] lg:static h-fit w-1/6 p-2 flex flex-col space-y-2 bg-white">
      {/*  Logo  Section */}
      <div className="text-indigo-500 text-indigo-500w-full h-8 flex justify-center items-center font-[800] text-xl">
        Admin
      </div>
      <hr className="bg-gray-300 h-[1.5px]" />
      {/*  Main  Section */}
      <div className="flex flex-col space-y-1 items-center">
        <span className="w-[90%] text-left text-[10px] text-gray-500">
          MAIN
        </span>
        <div className="flex  w-[80%] items-center gap-2 cursor-pointer p-[2px] hover:bg-indigo-100">
          <DashboardIcon className="text-indigo-500" />
          <h1 className="text-sm font-medium text-gray-500 hover:text-indigo-500">Dashboard</h1>
        </div>
      </div>
      {/*  List  Section */}
      <div className="flex flex-col space-y-1 items-center">
        <span className="w-[90%] text-left text-[10px] text-gray-500">
          LISTS
        </span>
        <div className="flex  w-[80%] items-center gap-2 cursor-pointer p-[2px] hover:bg-indigo-100">
          <PeopleIcon className="text-indigo-500" />
          <h1 className="text-sm font-medium text-gray-500 hover:text-indigo-500">Users</h1>
        </div>
        <div className="flex  w-[80%] items-center gap-2 cursor-pointer p-[2px] hover:bg-indigo-100">
          <Inventory2Icon className="text-indigo-500" />
          <h1 className="text-sm font-medium text-gray-500 hover:text-indigo-500">Products</h1>
        </div>
        <div className="flex  w-[80%] items-center gap-2 cursor-pointer p-[2px] hover:bg-indigo-100">
          <BorderStyleIcon className="text-indigo-500" />
          <h1 className="text-sm font-medium text-gray-500 hover:text-indigo-500">Orders</h1>
        </div>
        <div className="flex  w-[80%] items-center gap-2 cursor-pointer p-[2px] hover:bg-indigo-100">
          <AirportShuttleIcon className="text-indigo-500" />
          <h1 className="text-sm font-medium text-gray-500 hover:text-indigo-500">Delivery</h1>
        </div>
      </div>
      {/*  USeful  Section */}
      <div className="flex flex-col space-y-1 items-center">
        <span className="w-[90%] text-left text-[10px] text-gray-500">
          USEFUL
        </span>
        <div className="flex  w-[80%] items-center gap-2 cursor-pointer p-[2px] hover:bg-indigo-100">
          <QueryStatsIcon className="text-indigo-500" />
          <h1 className="text-sm font-medium text-gray-500 hover:text-indigo-500">Stats</h1>
        </div>
        <div className="flex  w-[80%] items-center gap-2 cursor-pointer p-[2px] hover:bg-indigo-100">
          <NotificationsActiveIcon className="text-indigo-500" />
          <h1 className="text-sm font-medium text-gray-500 hover:text-indigo-500">Notifications</h1>
        </div>
      </div>
      {/*  Services  Section */}
      <div className="flex flex-col space-y-1 items-center">
        <span className="w-[90%] text-left text-[10px] text-gray-500">
          SERVICES
        </span>
        <div className="flex  w-[80%] items-center gap-2 cursor-pointer p-[2px] hover:bg-indigo-100">
          <HealthAndSafetyIcon className="text-indigo-500" />
          <h1 className="text-sm font-medium text-gray-500 hover:text-indigo-500">System Health</h1>
        </div>
        <div className="flex  w-[80%] items-center gap-2 cursor-pointer p-[2px] hover:bg-indigo-100">
          <InsertDriveFileIcon className="text-indigo-500" />
          <h1 className="text-sm font-medium text-gray-500 hover:text-indigo-500">Logs</h1>
        </div>
        <div className="flex  w-[80%] items-center gap-2 cursor-pointer p-[2px] hover:bg-indigo-100">
          <SettingsIcon className="text-indigo-500" />
          <h1 className="text-sm font-medium text-gray-500 hover:text-indigo-500">Settings</h1>
        </div>
      </div>
            {/*  USer  Section */}
            <div className="flex flex-col space-y-1 items-center">
        <span className="w-[90%] text-left text-[10px] text-gray-500">
          USER
        </span>
        <div className="flex  w-[80%] items-center gap-2 cursor-pointer  p-[2px] hover:bg-indigo-100">
          <AccountCircleIcon className="text-indigo-500" />
          <h1 className="text-sm font-medium text-gray-500 hover:text-indigo-500">Profile</h1>
        </div>
        <div className="flex  w-[80%] items-center gap-2 cursor-pointer p-[2px] hover:bg-indigo-100">
          <LogoutIcon className="text-indigo-500" />
          <h1 className="text-sm font-medium text-gray-500 hover:text-indigo-500">Logout</h1>
        </div>
      </div>
        {/*  Color Options */}
        <div className="flex  w-[80%] items-center gap-2 cursor-pointer">
        <MaterialUISwitch  />
          <h1 className="text-sm font-medium text-gray-500 hover:text-indigo-500">Color</h1>
        </div>
      
    </div>
  );
}
