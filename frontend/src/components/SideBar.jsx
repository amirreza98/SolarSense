
import { Columns3Cog, LayoutDashboard, CircleGauge, ChartArea, Bell ,Link, Download, Settings } from 'lucide-react';

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-20 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
                    
        <SideBarIcon icon={<Columns3Cog size="28" />} text= {"💡"} />
        <Divider />
        <SideBarIcon icon={<LayoutDashboard size="20" />} text= {"Dashboard"} />
        <SideBarIcon icon={<ChartArea  size="20" />} text= {"Real-time Visualization"} />
        <SideBarIcon icon={<CircleGauge size="20" />} text= {"Performance Analytics"} />
        <SideBarIcon icon={<Bell size="20" />} text= {"Anomaly Alerts"} />
        <SideBarIcon icon={<Link size="20" />} text= {"Digital Twin Section"} />
        <SideBarIcon icon={<Download size="20" />} text= {"Download Reports"} />
        <Divider />
        <SideBarIcon icon={<Settings size="22" />} text= {"Setting"} />
    </div>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;