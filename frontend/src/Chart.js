import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function Chart() {
  const [data, setData] = useState([]);
  const [range, setRange] = useState("24h");

  useEffect(() => {
    fetch(`http://localhost:3001/api/sensors?range=${range}`)
      .then((res) => res.json())
      .then((json) => {
        const cleaned = json.map((item) => ({
          timestamp: new Date(item.timestamp).toLocaleString("de-DE", {
            day: "2-digit",
            // month: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          }),
          Active_Power: item.Current_Phase_Average,
          Horizontal_Radiation: item.Global_Horizontal_Radiation/10,
        }));
        setData(cleaned);
      })
      .catch((err) => console.error("خطا:", err));
  }, [range]);

  return (
    <div style={{ width: "100%", height: "450px" }}>
      <h2>Active Power - Radiation</h2>



      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="Active_Power"
            stroke="#8884d8"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="Horizontal_Radiation"
            stroke="#82ca9d"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
      <div style={{ marginBottom: "1rem", textAlign: "center" }}>
        <button onClick={() => setRange("2h")}>2 Hours</button>
        <button onClick={() => setRange("24h")}>24 Hours</button>
        <button onClick={() => setRange("1m")}>1 Month</button>
      </div>
    </div>
  );
}

export default Chart;
