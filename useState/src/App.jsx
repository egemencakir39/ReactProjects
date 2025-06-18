import { useState } from 'react'
import './App.css'

function App() {
  const [count, setcount] = useState(0);

  const arttir = () => {
    setcount(count + 1);
  }
  const zero = () => {
    setcount(0);
  }

  return (
    <div>
      <div>{count}</div>
      <div><button onClick={arttir}>Arttır</button></div>
      <div><button onClick={zero}>Sıfırla</button></div>

    </div>
  )
}

export default App
