import { useState } from 'react'
import './App.css'
import LoginRoutes from './routes/LoginRoutes'
import DashboardRoutes from './routes/DashboardRoutes'
import { Toaster } from 'react-hot-toast'

function App() {
  const [token,setToken] = useState(false)
  return (
    <>
    <Toaster reverseOrder position='top-right'/>
    {token ?
  <DashboardRoutes/>
      :
      <LoginRoutes setToken={setToken}/>}
    </>
  )
}

export default App
