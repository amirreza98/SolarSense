import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import SideBar from './components/ui/SideBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Alerts from './pages/Alerts/Alerts'
import InteractiveCharts from './pages/InteractiveCharts/InteractiveCharts'
import MonitoringPanel from './pages/MonitoringPanel/MonitoringPanel'
import SystemSummary from './pages/SystemSummary/SystemSummary'
import SettingsPage from './pages/SettingsPage'

function App() {

  return (
    <>
      <div className="flex">
        <BrowserRouter>
          <div className="h-screen w-20 z-10">
            <SideBar />
          </div>
          <div className="bg-lime-400 w-full">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/MonitoringPanel" element={<MonitoringPanel />} />
              <Route path="/Alerts" element={<Alerts />} />
              <Route path="/InteractiveCharts" element={<InteractiveCharts />} />
              <Route path="/SystemSummary" element={<SystemSummary />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
