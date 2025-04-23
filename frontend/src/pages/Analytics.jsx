import React from 'react'
import Modules from '../components/Modules/Modules'
import { motion } from "framer-motion";

function Analytics() {
  return (
    <div className="bg-gray-400 flex flex-wrap justify-center items-center">
      <Modules />

      {/* پیکان متحرک */}
      <div className="relative w-32 h-11 overflow-hidden">
        <motion.div
          className="absolute left-0 top-1/2 -translate-y-1/2 text-yellow-500 text-2xl"
          animate={{ x: ["-10%", "100%"] }}
          transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
        >
          ---→➡️
        </motion.div>
      </div>
    </div>
  )
}

export default Analytics