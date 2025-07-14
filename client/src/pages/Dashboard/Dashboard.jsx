import React from "react";
import MonitorringPanel from "../MonitoringPanel/MonitoringPanel";
import Alerts from "../Alerts/Alerts";
import InteractiveCharts from "../InteractiveCharts/InteractiveCharts";
import SystemSummary from "../SystemSummary/SystemSummary";



export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 md:grid-rows-2 gap-4 p-8 h-full">

      {/* MonitorringPanel */}
      <MonitorringPanel />

      {/* Alet panel */}
      <Alerts />

      {/* Interactive Charts */}
      <InteractiveCharts />


      {/* System summey */}
      <SystemSummary />

    </div>
  );
}

