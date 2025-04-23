import React from 'react'
import { Card } from "./ui/card";
import { Activity, CloudSun } from "lucide-react";
import { CardContent } from "./ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { time: "04:00", production: 0.2, consumption: 0.3, self: 0.1 },
    { time: "08:00", production: 2.5, consumption: 1.3, self: 1.0 },
    { time: "12:00", production: 4.2, consumption: 1.8, self: 2.1 },
    { time: "16:00", production: 3.1, consumption: 2.0, self: 1.5 },
    { time: "20:00", production: 1.2, consumption: 2.5, self: 0.6 },
  ];

function DashboardChart() {
  return (
    <div>
        <Card className="h-96">
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
    </div>
  )
}

export default DashboardChart