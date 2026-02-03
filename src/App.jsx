import React, {useState, useEffect} from 'react'
import { getExpenses} from './services/expenseService';
import MainLayout from './layout/MainLayout'
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
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Dashboard expenses={expenses} />} />
          <Route path='/expenses' element={<Expenses expenses={expenses} setExpenses={setExpenses}/>} />
        </Route>
      </Routes>
  )
}

export default App
