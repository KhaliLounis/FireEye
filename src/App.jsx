import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './routes/Login'
import Dashboard from './routes/Dashboard'
import Devices from './routes/Drones'
import Users from './routes/Users'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/devices" element={<Devices />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  )
}

export default App