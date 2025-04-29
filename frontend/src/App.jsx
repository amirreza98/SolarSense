import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import SideBar from './components/ui/SideBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Visualization from './pages/Visualization/Visualization'
import Analytics from './pages/Analytics/Analytics'
import Alerts from './pages/Alerts/Alerts'
import DigitalTwin from './pages/DigitalTwin/DigitalTwin'
import Reports from './pages/Reports'
import SettingsPage from './pages/SettingsPage'

function App() {

  return (
    <>
      <div className="flex">
        <BrowserRouter>
          <div className="h-screen w-20 z-10">
            <SideBar />
          </div>
          <div className="bg-lime-400 w-full h-screen p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/visualization" element={<Visualization />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/digital-twin" element={<DigitalTwin />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
