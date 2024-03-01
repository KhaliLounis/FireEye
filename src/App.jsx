import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './routes/Login'
import Dashboard from './routes/Dashboard'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />


      </Routes>
    </Router>
  )
}

export default App
