import React from 'react'
import MainLayout from './layout/MainLayout'
import './App.css'
import { Route, Routes } from 'react-router'
import Dashboard from './pages/Dashboard'
import Expenses from './pages/Expenses'
function App() {


  return (
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/expenses' element={<Expenses />} />
        </Route>
      </Routes>
  )
}

export default App
