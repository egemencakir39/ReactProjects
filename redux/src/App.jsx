import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from './redux/counterSlice';

function App() {

  const dispactch = useDispatch();
  const { value } = useSelector((store) => store.counter)
  console.log(value);


  return (
    <div>
      <div>{value}</div>
      <div><button onClick={() => dispactch(increment())}>Arttır</button> <button onClick={() => dispactch(decrement())}>Azalt</button></div>
    </div>
  )
}

export default App
