import './App.css'
import Dashboard from './pages/Dashboard'
import SideBar from './components/SideBar'

function App() {

  return (
    <>
      <div className="w-full h-screen flex">
        <div className="h-screen w-20">
          <SideBar />
        </div>
        <div className="bg-lime-400 w-full h-full p-8">
          <Dashboard />
        </div>
      </div>
    </>
  )
}

export default App
