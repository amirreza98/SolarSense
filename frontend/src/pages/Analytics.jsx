import React from 'react'
import { Card } from '../components/ui/card'

function Analytics() {
  return (
    <div className="flex flex-wrap justify-center items-center h-screen p-8">
      {/* Solar Module */}
      <Card className="w-40 h-72 m-4 bg-gray-200 relative group overflow-hidden rounded-lg shadow-lg">
        <a href="https://www.lucas-nuelle.com/index.php/page/317/pid/40460/apg/21532/Solar-module-with-solar-altitude-emulator.htm?print=1" target="_blank" rel="noopener noreferrer">
          <img className="absolute w-28 mix-blend-multiply" src="https://www.lucas-nuelle.com/images/axilon/NEUBILD/Artikelbilder/CO/32/CO3208-1Y-h310-ar.jpg" alt="Solar Module" />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
          <p className="text-white text-xs p-2">
          <strong>Solar Module</strong><br /><br />
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
            </ul>
          </p>
          </div>
        </a>
      </Card>

      {/* Inverter Module */}
      <Card className="w-40 h-72 m-4 bg-gray-200 relative group overflow-hidden rounded-lg shadow-lg">
        <img className="absolute w-28 mix-blend-multiply" src="https://www.lucas-nuelle.com/images/axilon/NEUBILD/Artikelbilder/CO/32/CO3208-1Q-h310-ar.jpg" alt="Solar Module" />
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
        </div>
      </Card>
      
      {/* Load Module */}
      <Card className="w-40 h-72 m-4 bg-gray-200 relative group overflow-hidden rounded-lg shadow-lg">
        <img className="absolute w-28 mix-blend-multiply m-2" src="https://www.lucas-nuelle.com/images/axilon/NEUBILD/Artikelbilder/CO/32/CO3208-1J-h310-ar.jpg" alt="Solar Module" />
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
      </Card>

      {/* Load Module */}
      <Card className="w-40 h-72 m-4 bg-gray-200 relative group overflow-hidden rounded-lg shadow-lg">
        <img className="absolute w-28 mix-blend-multiply m-2" src="https://www.lucas-nuelle.com/images/axilon/NEUBILD/Artikelbilder/CO/51/CO5127-1S-h310-ar.jpg" alt="Solar Module" />
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
      </Card>

      {/* quality meter Module */}
      <Card className="w-40 h-72 m-4 bg-gray-200 relative group overflow-hidden rounded-lg shadow-lg">
        <img className="absolute w-28 mix-blend-multiply m-2" src="https://www.lucas-nuelle.com/images/axilon/NEUBILD/Artikelbilder/CO/51/CO5127-1S-h310-ar.jpg" alt="Solar Module" />
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
      </Card> 
    </div>
  )
}

export default Analytics