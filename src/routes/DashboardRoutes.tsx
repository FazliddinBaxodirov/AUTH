import { Route, Routes } from "react-router-dom"
import Dashboard from "../pages/Dashboard"

const DashboardRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default DashboardRoutes
