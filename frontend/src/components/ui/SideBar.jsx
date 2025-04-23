
import { Link } from "react-router-dom";
import { Columns3Cog, LayoutDashboard, CircleGauge, ChartArea, Bell ,Link as LinkIcon, Download, Settings } from 'lucide-react';

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-20 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
                    
        <SideBarIcon icon={<Columns3Cog size="28" />} text= {"💡"} />
        <Divider />
        <SideBarIcon icon={<LayoutDashboard size="20" />} text= {"Dashboard"} to="/" />
        <SideBarIcon icon={<ChartArea  size="20" />} text= {"Real-time Visualization"} to="/visualization"/>
        <SideBarIcon icon={<CircleGauge size="20" />} text= {"Performance Analytics"} to="/analytics"/>
        <SideBarIcon icon={<Bell size="20" />} text= {"Anomaly Alerts"} to="/alerts"/>
        <SideBarIcon icon={<LinkIcon size="20" />} text= {"Digital Twin Section"} to="/digital-twin"/>
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