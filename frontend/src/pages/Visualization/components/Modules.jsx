import React from 'react'
import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useMotionTemplate } from "framer-motion";
import ApplyNewRuleCard from './ApplyNewRuleCard';


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
    <div className="bg-lime-400  h-screen w-screen p-8 overflow-hidden">

      {/* SVG Line */}
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
      </style>


      {/* Solar Module */}
      <motion.div
        drag
        dragMomentum={false}
        style={{ x: x1, y: y1 }}
        dragElastic={0.2}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-40 h-72 m-4 bg-gray-200 relative group overflow-hidden rounded-lg shadow-lg cursor-grab active:cursor-grabbing"
      >
        
        <img
          className="absolute w-28 mix-blend-multiply m-4"
          src="https://www.lucas-nuelle.com/images/axilon/NEUBILD/Artikelbilder/CO/32/CO3208-1Y-h310-ar.jpg"
          alt="Solar Module"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
          <p className="text-white text-xs p-2 text-left">
            <strong>Solar Module</strong>
            <br />
            <br />
            <ul>
              <li><strong>halogen spotlight:</strong></li>
              <li>Power: 500W</li>
              <li>Power supply: 230 V</li>
              <br />
              <li><strong>solar module:</strong></li>
              <li>No-load voltage: 21 V</li>
              <li>Short-circuit Curr: 650 mA</li>
              <li>Peak power: 10 Wp</li>
              <li>Weight: 33 kg</li>
              <li>Dimensions:</li>
              <li>1200 x 550 x 1100 mm (HxWxD)</li>
              <li>
                <a href="https://www.lucas-nuelle.com/index.php/page/317/pid/40460/apg/21532/Solar-module-with-solar-altitude-emulator.htm?print=1"
                target="_blank"
                rel="noopener noreferrer"
                className='text-blue-300 hover:underline'
                >download cataloge</a>
              </li>
            </ul>
          </p>
        </div> 
      </motion.div>

      {/* Inverter Module */}
      <motion.div
        drag
        dragMomentum={false}
        style={{ x: x2, y: y2 }}
        dragElastic={0.2}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.995 }}
        className="w-40 h-72 m-4 bg-gray-200 relative group  rounded-lg shadow-lg cursor-grab active:cursor-grabbing"
      >
        <img className="absolute w-28 mix-blend-multiply m-4" src="https://www.lucas-nuelle.com/images/axilon/NEUBILD/Artikelbilder/CO/32/CO3208-1Q-h310-ar.jpg" alt="Solar Module" />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
        <p className="text-white text-xs p-2">
        <strong>3-phase photovoltaic inverter</strong><br />
          <ul>
            <li><strong>features:</strong></li>
            <li>Feed management conforming EEG2012</li>
            <li>Power reduction adjustable</li>
            <li>USB port via SCADA Lab</li>
            <li>DC circuit breaker</li>
            <li>Overload voltage protection</li>
            <li>DC input voltage range: 250-1000V</li>
            <li>Output voltage: 3x400 V</li>
            <li>Power output: 3200 W</li>
            <li>Weight: 15 kg</li>
            <li>Dimensions:</li>
            <li>650 x 456 x 305 mm (HxWxD)</li>
          </ul>
        </p>
        <ApplyNewRuleCard />
        </div>
      </motion.div>
      
      {/* Load Module */}
      <motion.div
        drag
        dragMomentum={false}
        style={{ x: 900 , y: -290}}
        dragElastic={0.2}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-40 h-72 m-4 bg-gray-200 relative group overflow-hidden rounded-lg shadow-lg cursor-grab active:cursor-grabbing"
      >
        <img className="absolute w-28 mix-blend-multiply m-6" src="https://www.lucas-nuelle.com/images/axilon/NEUBILD/Artikelbilder/CO/32/CO3208-1J-h310-ar.jpg" alt="Solar Module" />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
        <p className="text-white text-xs p-2">
        <strong>Load unit 1kOhm, 500W</strong><br /><br />
          <ul>
            <li><strong>features:</strong></li>
            <li>Resistor:</li>
            <li>0...1 kOhm / 500 W continuously adjustable</li>
            <li>Current:</li>
            <li>0 – 50 Ohm max. 6A</li>
            <li>51 – 200 Ohm max 2A</li>
            <li>201- 1k Ohm max 0.6A</li>
            <li>Connection terminals:</li>
            <li>4 mm safety sockets</li>
            <li>Weight: 4.3 kg</li>
            <li>Dimensions:</li>
            <li>297 x 228 x 160 mm (HxWxD)</li>
          </ul>
        </p>
        </div>
      </motion.div>

      {/* quality meter Module */}
      <motion.div
        drag
        dragMomentum={false}
        style={{ x: 700 , y: -900}}
        dragElastic={0.2}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-40 h-72 m-4 bg-gray-200 relative group overflow-hidden rounded-lg shadow-lg cursor-grab active:cursor-grabbing"
      >
        <img className="absolute w-28 mix-blend-multiply m-6" src="https://www.lucas-nuelle.com/images/axilon/NEUBILD/Artikelbilder/CO/51/CO5127-1S-h310-ar.jpg" alt="Solar Module" />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
        <p className="text-white text-xs p-2">
        <strong>Load unit 1kOhm, 500W</strong><br />
          <ul>
            <li><strong>features:</strong></li>
            <li>Three-phase measurement up to 3x 400V / 5A</li>
            <li>Peak and mean detection</li>
            <li>Real-time clock</li>
            <li>Max. measurement values:</li>
            <li>Voltage P-P: 690 V</li>
            <li>Current: 5 A</li>
            <li>Fault tolerances:</li>
            <li>Voltage 0.2%, Current 0.2%</li>
            <li>Operating voltage: 110 V-230 V, 50/60 Hz</li>
            <li>Weight: 2 kg</li>
            <li>Dimensions:</li>
            <li>297 x 228 x 140 mm (HxWxD)</li>
          </ul>
        </p>
        </div>
      </motion.div>

      {/* Power-Multimeter Module */}
      <motion.div
        drag
        dragMomentum={false}
        style={{ x: 700 , y: -900}}
        dragElastic={0.2}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-40 h-72 m-4 bg-gray-200 relative group overflow-hidden rounded-lg shadow-lg cursor-grab active:cursor-grabbing"
      >
        <img className="absolute w-28 mix-blend-multiply m-6" src="https://www.lucas-nuelle.com/images/axilon/NEUBILD/Artikelbilder/CO/51/CO5127-2A-h310-ar.jpg" alt="Solar Module" />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
        <p className="text-white text-xs p-2">
        <strong>Power-Multimeter</strong><br />
          <ul>
            {/* <li><strong>features:</strong></li>
            <li>Three-phase measurement up to 3x 400V / 5A</li>
            <li>Peak and mean detection</li>
            <li>Real-time clock</li>
            <li>Max. measurement values:</li>
            <li>Voltage P-P: 690 V</li>
            <li>Current: 5 A</li>
            <li>Fault tolerances:</li>
            <li>Voltage 0.2%, Current 0.2%</li>
            <li>Operating voltage: 110 V-230 V, 50/60 Hz</li>
            <li>Weight: 2 kg</li>
            <li>Dimensions:</li>
            <li>297 x 228 x 140 mm (HxWxD)</li> */}
          </ul>
        </p>
        </div>
      </motion.div> 

      {/* power supply Module */}
      <motion.div
        drag
        dragMomentum={false}
        style={{ x: 900 , y: -1510}}
        dragElastic={0.2}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-40 h-72 m-4 bg-gray-200 relative group overflow-hidden rounded-lg shadow-lg cursor-grab active:cursor-grabbing"
      >
        <img className="absolute w-28 mix-blend-multiply m-6" src="https://www.lucas-nuelle.com/images/axilon/NEUBILD/Artikelbilder/CO/32/CO3212-5V-h310-ar.jpg" alt="Solar Module" />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
        <p className="text-white text-xs p-2">
        <strong>Three-phase power supply</strong><br />
          <ul>
            <li><strong>features:</strong></li>
            {/* <li>Three-phase measurement up to 3x 400V / 5A</li>
            <li>Peak and mean detection</li>
            <li>Real-time clock</li>
            <li>Max. measurement values:</li>
            <li>Voltage P-P: 690 V</li>
            <li>Current: 5 A</li>
            <li>Fault tolerances:</li>
            <li>Voltage 0.2%, Current 0.2%</li>
            <li>Operating voltage: 110 V-230 V, 50/60 Hz</li>
            <li>Weight: 2 kg</li>
            <li>Dimensions:</li>
            <li>297 x 228 x 140 mm (HxWxD)</li> */}
          </ul>
        </p>
        </div>
      </motion.div>  
    </div>
  )
}

export default Modules