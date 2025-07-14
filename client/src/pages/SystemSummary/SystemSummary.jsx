import { motion } from "framer-motion";

function SystemSummary() {
  return (
    <motion.div
      className="h-full w-full flex"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full h-full bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Monitoring Panel</h2>
        {/* Add your monitoring components here */}
        <p>Monitoring data will be displayed here.</p>
      </div>
    </motion.div>
  )
}

export default SystemSummary