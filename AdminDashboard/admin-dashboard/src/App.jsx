import { useState } from 'react'
import './App.css'
import Sidebar from './components/sidebar'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/AppRouter'

function App() {


  return (
    <BrowserRouter>
      <div className='app'>
        <Sidebar />
        <div className='main'>
          <Router />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
