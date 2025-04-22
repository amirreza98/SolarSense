import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Bell, Sun, BatteryCharging, Activity, CloudSun  } from "lucide-react";

const data = [
  { time: "04:00", production: 0.2, consumption: 0.3, self: 0.1 },
  { time: "08:00", production: 2.5, consumption: 1.3, self: 1.0 },
  { time: "12:00", production: 4.2, consumption: 1.8, self: 2.1 },
  { time: "16:00", production: 3.1, consumption: 2.0, self: 1.5 },
  { time: "20:00", production: 1.2, consumption: 2.5, self: 0.6 },
];

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">

      {/* KPI Section */}
      <Card className="h-100 w-100 relative p-4">
        <div>
          <p className="m-2 text-sm text-gray-500">Berlin, sonnenallee</p>
          <p className="m-2 text-lg font-semibold">25°C</p>
          <p className="m-2 text-xs text-gray-400">Last sync: 10 min ago</p>
            <CloudSun className="absolute top-4 right-6 w-6 h-6" color="gray"/> 
            <p className="absolute top-10 right-6 text-sm text-gray-500 ">prety cloudy</p>
          <div className="bg-green-400 flex text-white      text-sm font-semibold w-24 ml-2 mt-24 rounded-lg">
              <Activity className="m-1 w-8 h-8" />
              <p className="text-l font-semibold">Active <br/> 3.02 kW</p> 
          </div>
          <div className=" flex text-sm font-semibold w-24 ml-2 mt-2">
              <p className="text-l text-gray-400 ">max: 3.02kW
                <br/> min: 0.02kW
              </p>
              </div>
        </div>
        <img src="../../public/assets/solar.svg" alt="solarr" className=" w-48 h-48 absolute top-14 right-6" />
      </Card>

      {/* Alerts Section */}
      <Card className="col-span-1">
        <CardContent className="space-y-2">
          <p className="font-semibold flex items-center"><Bell className="w-4 h-4 mr-2" /> Alerts (3)</p>
          <ul className="text-sm text-gray-600">
            <li>⚠️ Low Efficiency Detected - 20/11 14:05</li>
            <li>🔋 Battery Charge Low - 19/11 09:54</li>
            <li>✅ Battery Full - 18/11 16:42</li>
          </ul>
        </CardContent>
      </Card>

      {/* Chart Section */}
      <Card className="col-span-2">
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Power & Energy</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="production" stroke="#4ade80" name="Solar Production" />
              <Line type="monotone" dataKey="consumption" stroke="#60a5fa" name="Consumption" />
              <Line type="monotone" dataKey="self" stroke="#f472b6" name="Self Consumption" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Solar Panel Info Section */}
      <Card className="col-span-1">
        <CardContent>
          <img src="/solar-room.jpg" alt="panel" className="rounded-xl mb-2" />
          <p className="font-semibold">CMOS Solar Panel</p>
          <p className="text-sm text-gray-500">Peak Power: 6.8 kWp</p>
          <p className="text-sm text-gray-500">Installed: 10/01/2018</p>
          <p className="text-sm text-gray-500">Address: 12 Baker St, London</p>
        </CardContent>
      </Card>

    </div>
  );
}

