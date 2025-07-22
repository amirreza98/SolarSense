// components/SystemSummaryPanel.jsx
import { BatteryCharging, PlugZap, AlertCircle, Zap } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const mockData = {
  status: "Operational", // یا "Warning", "Fault"
  renewableContribution: 68,
  storageEfficiency: 92,
  energyGeneratedToday: 34.7,
  energyConsumedToday: 31.2,
  batterySOC: 78,
  usageData: [
    { time: "00", value: 1.2 },
    { time: "04", value: 2.1 },
    { time: "08", value: 3.5 },
    { time: "12", value: 4.8 },
    { time: "16", value: 3.9 },
    { time: "20", value: 2.2 },
  ],
  logs: [
    { time: "14:05", message: "Battery reached 90%" },
    { time: "11:32", message: "Grid warning resolved" },
    { time: "09:10", message: "PV production peaked at 5.1kW" },
  ],
};

const statusStyles = {
  Operational: "bg-green-100 text-green-800",
  Warning: "bg-yellow-100 text-yellow-800",
  Fault: "bg-red-100 text-red-800",
};

export default function SystemSummaryPanel() {
  return (
    <div className="grid gap-6 p-6 bg-white rounded-2xl shadow-md grid-cols-1 md:grid-cols-2 xl:grid-cols-3 overflow-auto">
      {/* سیستم وضعیت */}
      <div className={`rounded-xl p-4 font-semibold ${statusStyles[mockData.status]}`}>
        <div className="text-sm">System Status</div>
        <div className="text-2xl">{mockData.status}</div>
      </div>

      {/* KPIها */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 bg-gray-100 rounded-xl p-4">
          <Zap className="text-blue-600" />
          <div>
            <div className="text-sm text-gray-500">Renewable Contribution</div>
            <div className="text-lg font-bold">{mockData.renewableContribution}%</div>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-gray-100 rounded-xl p-4">
          <BatteryCharging className="text-green-600" />
          <div>
            <div className="text-sm text-gray-500">Storage Efficiency</div>
            <div className="text-lg font-bold">{mockData.storageEfficiency}%</div>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-gray-100 rounded-xl p-4">
          <PlugZap className="text-yellow-600" />
          <div>
            <div className="text-sm text-gray-500">Battery SOC</div>
            <div className="text-lg font-bold">{mockData.batterySOC}%</div>
          </div>
        </div>
      </div>

      {/* نمودار */}
      <div className="bg-gray-50 p-4 rounded-xl col-span-1 md:col-span-2 xl:col-span-1">
        <div className="text-sm font-semibold mb-2">Usage Trend (Today)</div>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={mockData.usageData}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* رویدادهای اخیر */}
      <div className="bg-white border rounded-xl p-4 col-span-1 md:col-span-3">
        <div className="font-semibold mb-2 text-gray-800">Recent Events</div>
        <ul className="space-y-2">
          {mockData.logs.map((log, i) => (
            <li key={i} className="flex items-center text-sm text-gray-700">
              <AlertCircle className="w-4 h-4 text-gray-500 mr-2" />
              <span className="font-mono text-gray-500">{log.time}</span>
              <span className="ml-2">{log.message}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
