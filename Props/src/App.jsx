import { useState } from 'react'

import './App.css'
import Product from './Product'
import Container from './Container'
function App() {
  const productName = "Buzdolabı";


  return (
    <div>
      <Container>
        <Product />
      </Container>
    </div>
  )
}

export default App
