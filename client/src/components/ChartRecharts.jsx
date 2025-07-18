import React from 'react' 
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function ChartRecharts({ data, lines }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 2, right: 5, bottom: 0, left: -18 }}>
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
