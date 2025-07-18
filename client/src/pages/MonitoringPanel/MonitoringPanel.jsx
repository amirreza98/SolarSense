import React from 'react'
import { motion } from "framer-motion";
import ChartRecharts from '../../components/ChartRecharts';

const data = [
  { TimeStamp: 'A', Voltage: 4000, Curent: 2400, Frequncy: 2400 },
  { TimeStamp: 'B', Voltage: 3000, Curent: 1398, Frequncy: 2210 },
  { TimeStamp: 'C', Voltage: 2000, Curent: 9800, Frequncy: 2290 },
  { TimeStamp: 'D', Voltage: 2780, Curent: 3908, Frequncy: 2000 },
  { TimeStamp: 'E', Voltage: 1890, Curent: 4800, Frequncy: 2181 },
  { TimeStamp: 'F', Voltage: 2390, Curent: 3800, Frequncy: 2500 },
  { TimeStamp: 'G', Voltage: 3490, Curent: 4300, Frequncy: 2100 },
];

function MonitorringPanel() {
  return (
    <motion.div className="relative h-full w-full flex">
      <div className="w-full h-full bg-white p-4 rounded-lg shadow-md flex flex-col">
        <h2 className="text-xl font-semibold mb-4">Monitoring Panel</h2>
        <div className="flex-1 min-h-0">
          <ChartRecharts data={data} lines={["Voltage"]} />
        </div>
        <div className="flex-1 min-h-0">
          <ChartRecharts data={data} lines={["Curent"]} />
        </div>
        <div className="flex-1 min-h-0">
          <ChartRecharts data={data} lines={["Frequncy"]} />
        </div>
      </div>
    </motion.div>
  )
}

export default MonitorringPanel
