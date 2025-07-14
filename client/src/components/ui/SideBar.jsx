
import { Link } from "react-router-dom";
import { Columns3Cog, LayoutDashboard, CircleGauge, ChartArea, Bell ,MonitorCheck, Download, Settings } from 'lucide-react';

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-20 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
                    
        <SideBarIcon icon={<Columns3Cog size="28" />} text= {"💡"} />
        <Divider />
        <SideBarIcon icon={<LayoutDashboard size="20" />} text= {"Dashboard"} to="/" />
        <SideBarIcon icon={<CircleGauge size="20" />} text= {"Monitoring Panel"} to="/MonitoringPanel"/>
        <SideBarIcon icon={<Bell size="20" />} text= {"Anomaly Alerts"} to="/Alerts"/>
        <SideBarIcon icon={<ChartArea  size="20" />} text= {"Interactive Charts Visualization"} to="/InteractiveCharts"/>
        <SideBarIcon icon={<MonitorCheck size="20" />} text= {"System Summary panel"} to="/SystemSummary"/>
        <SideBarIcon icon={<Download size="20" />} text= {"Download Reports"} to="/reports"/>
        <Divider />
        <SideBarIcon icon={<Settings size="22" />} text= {"Setting"} to="/settings"/>
    </div>
  );
};

const SideBarIcon = ({ icon, text, to }) => (
  <Link to={to} className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </Link>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;