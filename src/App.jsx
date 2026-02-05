import React, { useState, useEffect } from 'react'
import { getExpenses } from './services/expenseService';
import MainLayout from './layout/MainLayout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import { Route, Routes } from 'react-router'
import Dashboard from './pages/Dashboard'
import Expenses from './pages/Expenses'

function App() {

  const [expenses, setExpenses] = useState([])



  useEffect(() => {
    const loadExpenses = async () => {
      const data = await getExpenses()
      setExpenses(data)
    }
    loadExpenses()

  }, [])
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Dashboard expenses={expenses} />} />
          <Route path='/expenses' element={<Expenses expenses={expenses} setExpenses={setExpenses} />} />
        </Route>
      </Routes>
    </>

  )
}

export default App
