import React  from 'react';
import { Area, AreaChart, XAxis,  CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';
const data = [
  {
 name:"January",
 Total:3220
  },
  {
 name:"February",
 Total:1000
  },
  {
 name:"March",
 Total:2354
  },
  {
 name:"April",
 Total:3211
  },
  {
 name:"May",
 Total:800
  },
  {
 name:"June",
 Total:902
  },
  
  {
 name:"July",
 Total:3420
  },
  {
 name:"August",
 Total:2420
  },
  
];
export default function Chart() {
 
    return (
      <div className='shadow-3xl w-[60%] p-2 text-sm'>
        <h1>Last 6 Months (Revenue)</h1>
      <ResponsiveContainer width="100%" aspect={2/1}>
      <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" stroke='gray'/>
{/* <YAxis /> */}
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
</AreaChart>
    </ResponsiveContainer>
  </div>
    );
  
 
  
}
