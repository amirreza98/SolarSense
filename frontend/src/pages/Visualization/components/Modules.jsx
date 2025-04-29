import React from 'react'
import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useMotionTemplate } from "framer-motion";
import ApplyNewRuleCard from './ApplyNewRuleCard';
import deviceModules from './DeviceModules/Devices.json';


function Modules() {
  const x1 = useMotionValue(50);
  const y1 = useMotionValue(50);
  const x2 = useMotionValue(50);
  const y2 = useMotionValue(150);
  const midX = useTransform([x1, x2], ([a, b]) => (a + b) / 2);
  const midY = useTransform([y1, y2], ([a, b]) => (a + b) / 2);
  const [randomNumber, setRandomNumber] = useState(Math.random() * 30);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomNumber(Math.random() * 3);
    }, 2500); 

    return () => clearInterval(interval);
  }, []);


  const textTransform = useMotionTemplate`translate(${midX + 150}px, ${midY + 375}px)`; 

  return (
    <div className="w-full h-full overflow-hidden">



      {/* Device map */}
      {deviceModules.map((device) => (
        <motion.div
          key={device.id}
          drag
          dragMomentum={false}
          style={{ x: device.position.x, y: device.position.y }}
          dragElastic={0.2}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-40 h-72 m-4 bg-gray-200 relative group overflow-hidden rounded-lg shadow-lg cursor-grab active:cursor-grabbing"
        >  
          <img
            className="absolute w-28 mix-blend-multiply m-4"
            src={device.img}
            alt={device.id}
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
            <p className="text-white text-xs p-2 text-left">
              <strong>{device.title}</strong>
              <ul className="list-disc list-inside text-sm mb-2">
                {device.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
                  <a href={device.catalogLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-blue-300 hover:underline'
                  >download cataloge</a>
            </p>
          </div> 
        </motion.div>
      ))}

      {/* SVG Line
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">

          <motion.line
            id={"animated-line"}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            transform={`translate(${150}, ${375})`}
            stroke="#00f"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="10 10"
            strokeDashoffset="0"
            style={{
              animation: 'flow 1s linear infinite',
            }}
          />
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="7" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <motion.text
              x={midX}
              y={midY}
              transform={`translate(${150}, ${375})`}
              textAnchor="middle"
              alignmentBaseline="middle"
              fontSize="26"
              fill="#000"
              fontWeight="bold"
              filter="url(#glow)"


            >
              {`3.${randomNumber.toFixed(0)} A @ 18.${randomNumber.toFixed(0)*56} V`}
            </motion.text>
      </svg>

      <style>
        {`
          @keyframes flow {
            to {
              stroke-dashoffset: -20;
            }
          }
        `}
      </style> */}
      
    </div>
  )
}

export default Modules