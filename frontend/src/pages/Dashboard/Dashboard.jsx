import React from "react";
import DashboardQuickDetails from "./components/DashboardQuickDeitails";
import DashboardPowerFlow from "./components/DashboardPowerFlow";
import DashboardAlerts from "./components/DashboardAlerts";
import DashboardChart from "./components/DashboardChart";
import DashboardGridInfo from "./components/DasboardGridInfo";



export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

      {/* KPI Section */}
      <DashboardQuickDetails />

      {/* PowerFlow Section */}
      <DashboardPowerFlow />

      {/* Alerts Section */}
      <DashboardAlerts />

      {/* Chart Section */}
      <div className="md:col-span-2">
        <DashboardChart />
      </div>

      {/* Solar Panel Info Section */}
      <DashboardGridInfo />

    </div>
  );
}

