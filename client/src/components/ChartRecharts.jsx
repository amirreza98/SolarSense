import React from 'react' 
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function ChartRecharts({ data, lines , height=100 }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="TimeStamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        {lines.map((lineKey) => (
          <Line key={lineKey} type="monotone" dataKey={lineKey} stroke="#8884d8" />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default ChartRecharts
