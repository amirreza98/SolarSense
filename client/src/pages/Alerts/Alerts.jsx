import { motion } from "framer-motion";

function Alerts() {
  return (
    <motion.div
      className="h-full lg:col-span-2 md:col-span-1 w-full flex"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full h-full bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Alerts</h2>
        {/* Add your alert components here */}
        <p>Alert data will be displayed here.</p>
      </div>
    </motion.div>
  )
}

export default Alerts