import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Bell, Sun, BatteryCharging, Activity, LayoutDashboard  } from "lucide-react";

const data = [
  { time: "04:00", production: 0.2, consumption: 0.3, self: 0.1 },
  { time: "08:00", production: 2.5, consumption: 1.3, self: 1.0 },
  { time: "12:00", production: 4.2, consumption: 1.8, self: 2.1 },
  { time: "16:00", production: 3.1, consumption: 2.0, self: 1.5 },
  { time: "20:00", production: 1.2, consumption: 2.5, self: 0.6 },
];

export default function Dashboard() {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">

      {/* KPI Section */}
      <Card className="col-span-1 md:col-span-2 flex justify-between items-center p-4">
        <div>
          <p className="text-sm text-gray-500">Berlin, sonnenallee</p>
          <p className="text-lg font-semibold">25°C - Pretty Cloudy</p>
          <p className="text-xs text-gray-400">Last sync: 10 min ago</p>
          <div className="mt-2 flex items-center text-green-600 font-bold">
            <Activity className="w-4 h-4 mr-1" /> Active - 3.02 kW
            <LayoutDashboard className="w-4 h-4 ml-4 mr-1" /> 3.5 kWh
          </div>
        </div>
        <img src="/solar-panel.png" alt="solar" className="w-24 h-24" />
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

