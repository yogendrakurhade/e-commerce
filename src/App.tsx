import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'

function App() {
const [sidebarToggle, setSidebarToggle] = useState<boolean>(false);
  return (
    <div className='flex'>
      <Sidebar sidebarToggle={sidebarToggle}/>
      <Dashboard sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
    </div>
  )
}

export default App
