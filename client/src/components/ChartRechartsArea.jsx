import React from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const defaultColors = [
  '#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#00c49f', '#0088fe', '#d0ed57', '#a4de6c'
];

function ChartRechartsArea({ data, lines, granularity = "minute" }) {
  return (
  <>
    <ResponsiveContainer width="100%" height="100%" >
      <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        
        <defs>
          {lines.map((lineKey, index) => {
            const color = defaultColors[index % defaultColors.length];
            return (
              <linearGradient key={lineKey} id={`color-${lineKey}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            );
          })}
        </defs>

        <XAxis
        dataKey="timestamp"
        tickFormatter={(str) => {
          const d = new Date(str);
          if (granularity === 'day') return d.toLocaleDateString();
          if (granularity === 'hour') return d.getHours() + ":00";
          return d.toLocaleTimeString();
        }}
      />
        <YAxis />
        <Tooltip />

        {lines.map((lineKey, index) => {
          const color = defaultColors[index % defaultColors.length];
          return (
            <Area
              key={lineKey}
              type="monotone"
              dataKey={lineKey}
              stroke={color}
              fillOpacity={1}
              fill={`url(#color-${lineKey})`}
            />
          );
        })}
      </AreaChart>
    </ResponsiveContainer>
  </>
  )
}

export default ChartRechartsArea