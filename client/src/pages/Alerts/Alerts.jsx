import { motion } from "framer-motion";
import useIsMobile from '../../hooks/useIsMobile';
import { useEffect, useState } from "react";

// const alerts = [
//   {
//     "timestamp": "2025-07-14T08:45:00Z",
//     "eventType": "Overvoltage",
//     "severityLevel": "red",
//     "componentAffected": "PV inverter",
//     "status": "Active",
//     "acknowledgedBy": null
//   },
//   {
//     "timestamp": "2025-07-14T07:30:12Z",
//     "eventType": "Battery Overload",
//     "severityLevel": "yellow",
//     "componentAffected": "Battery bank",
//     "status": "Resolved",
//     "acknowledgedBy": {
//       "operator": "Ali Rezaei",
//       "responseTime": "2025-07-14T07:45:00Z"
//     }
//   },
//   {
//     "timestamp": "2025-07-13T23:15:45Z",
//     "eventType": "Inverter Failure",
//     "severityLevel": "red",
//     "componentAffected": "PV inverter",
//     "status": "Active",
//     "acknowledgedBy": null
//   },
//   {
//     "timestamp": "2025-07-13T21:05:30Z",
//     "eventType": "Info: System Check",
//     "severityLevel": "green",
//     "componentAffected": "Monitoring system",
//     "status": "Resolved",
//     "acknowledgedBy": {
//       "operator": "Sara Ahmadi",
//       "responseTime": "2025-07-13T21:10:00Z"
//     }
//   },
//   {
//     "timestamp": "2025-07-14T06:00:00Z",
//     "eventType": "Temperature Warning",
//     "severityLevel": "yellow",
//     "componentAffected": "Battery bank",
//     "status": "Active",
//     "acknowledgedBy": null
//   }
// ];

const severityColors = {
  red: "#f87171", // قرمز روشن
  yellow: "#fbbf24", // زرد
  green: "#34d399", // سبز
};



function Alerts() {
  const isMobile = useIsMobile();
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
  const fetchAlerts = async () => {
    try {
      const response = await fetch("http://localhost:8000/faults?limit=10");
      if (!response.ok) throw new Error("Failed to fetch alerts");
      const data = await response.json();
      setAlerts(data); // اطمینان حاصل کن که API دقیقا یک آرایه از alertها برمی‌گردونه
    } catch (err) {
      console.error("Error fetching alerts:", err);
      setError("Could not fetch alerts");
    } finally {
      setLoading(false);
    }
  };

  fetchAlerts();
}, []);

  return (
    <motion.div
      className="h-full lg:col-span-2 md:col-span-1 w-full overflow-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full h-full bg-white p-4 rounded-lg shadow-md overflow-auto">
        <h2 className="text-xl font-semibold mb-4">Alerts</h2>
        {loading ? (
          <p>Loading alerts...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : alerts.length === 0 ? (
          <p>No alerts found.</p>
        ) : (
          <div>
            <h2 className="text-xl font-bold mb-4">Alerts Dashboard</h2>
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2 text-left">Timestamp</th>
                  <th className="border p-2 text-left">Event Type</th>
                  {!isMobile && (
                    <>
                      <th className="border p-2 text-left">Severity</th>
                      <th className="border p-2 text-left">Location</th>
                      <th className="border p-2 text-left">Status</th>
                      <th className="border p-2 text-left">Acknowledged By</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {alerts.map((alert, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border p-2">
                      {new Date(alert.timestamp).toLocaleString()}
                    </td>
                    <td className="border p-2">{alert.fault_label}</td>

                    {!isMobile && (
                      <>
                        <td
                          className="border p-2 font-semibold"
                          style={{
                            color: severityColors[alert.severityLevel] || "gray",
                          }}
                        >
                          {alert.severity?.toUpperCase() || "N/A"}
                        </td>
                        <td className="border p-2">{alert.location}</td>
                        <td className="border p-2">{alert.status}</td>
                        <td className="border p-2">
                          {alert.acknowledgedBy
                            ? `${alert.acknowledgedBy.operator} (${new Date(
                                alert.acknowledgedBy.responseTime
                              ).toLocaleTimeString()})`
                            : "-"}
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Alerts