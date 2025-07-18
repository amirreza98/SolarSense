import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#0088FE", "#00C49F"];

function ChartRecharts({ data, lines }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 20, right: 30, bottom: 5, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="TimeStamp" 
          tickFormatter={(tick) => {
            // فرض کن TimeStamp رشته ISO هست، فقط ساعت و دقیقه نمایش داده بشه
            const date = new Date(tick);
            return `${date.getHours()}:${date.getMinutes()}`;
          }} 
        />
        <YAxis />
        <Tooltip labelFormatter={(label) => {
          const date = new Date(label);
          return date.toLocaleString();
        }} />
        <Legend />
        {lines.map((lineKey, index) => (
          <Line
            key={lineKey}
            type="monotone"
            dataKey={lineKey}
            stroke={COLORS[index % COLORS.length]}
            dot={false}
            strokeWidth={2}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default ChartRecharts;
