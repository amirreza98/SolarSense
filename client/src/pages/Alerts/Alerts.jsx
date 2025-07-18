import { motion } from "framer-motion";

const alerts = [
  {
    "timestamp": "2025-07-14T08:45:00Z",
    "eventType": "Overvoltage",
    "severityLevel": "red",
    "componentAffected": "PV inverter",
    "status": "Active",
    "acknowledgedBy": null
  },
  {
    "timestamp": "2025-07-14T07:30:12Z",
    "eventType": "Battery Overload",
    "severityLevel": "yellow",
    "componentAffected": "Battery bank",
    "status": "Resolved",
    "acknowledgedBy": {
      "operator": "Ali Rezaei",
      "responseTime": "2025-07-14T07:45:00Z"
    }
  },
  {
    "timestamp": "2025-07-13T23:15:45Z",
    "eventType": "Inverter Failure",
    "severityLevel": "red",
    "componentAffected": "PV inverter",
    "status": "Active",
    "acknowledgedBy": null
  },
  {
    "timestamp": "2025-07-13T21:05:30Z",
    "eventType": "Info: System Check",
    "severityLevel": "green",
    "componentAffected": "Monitoring system",
    "status": "Resolved",
    "acknowledgedBy": {
      "operator": "Sara Ahmadi",
      "responseTime": "2025-07-13T21:10:00Z"
    }
  },
  {
    "timestamp": "2025-07-14T06:00:00Z",
    "eventType": "Temperature Warning",
    "severityLevel": "yellow",
    "componentAffected": "Battery bank",
    "status": "Active",
    "acknowledgedBy": null
  }
];

const severityColors = {
  red: "#f87171", // قرمز روشن
  yellow: "#fbbf24", // زرد
  green: "#34d399", // سبز
};


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
        <div>
          <h2 className="text-xl font-bold mb-4">Alerts Dashboard</h2>
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2 text-left">Timestamp</th>
                <th className="border p-2 text-left">Event Type</th>
                <th className="border p-2 text-left">Severity</th>
                <th className="border p-2 text-left">Component</th>
                <th className="border p-2 text-left">Status</th>
                <th className="border p-2 text-left">Acknowledged By</th>
              </tr>
            </thead>
            <tbody>
              {alerts.map((alert, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border p-2">
                    {new Date(alert.timestamp).toLocaleString()}
                  </td>
                  <td className="border p-2">{alert.eventType}</td>
                  <td
                    className="border p-2 font-semibold"
                    style={{ color: severityColors[alert.severityLevel] }}
                  >
                    {alert.severityLevel.toUpperCase()}
                  </td>
                  <td className="border p-2">{alert.componentAffected}</td>
                  <td className="border p-2">{alert.status}</td>
                  <td className="border p-2">
                    {alert.acknowledgedBy
                      ? `${alert.acknowledgedBy.operator} (${new Date(
                          alert.acknowledgedBy.responseTime
                        ).toLocaleTimeString()})`
                      : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  )
}

export default Alerts