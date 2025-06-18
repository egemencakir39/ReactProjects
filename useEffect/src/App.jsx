import { useEffect, useState } from 'react'

import './App.css'
import { use } from 'react';


function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  useEffect(() => {
    console.log("her zaman çalışır")
  })

  useEffect(() => {
    console.log("ilk renderda çalışır")
  }, [])

  useEffect(() => {
    console.log("İçindeki state değiştiğinde çalışır firstname")
  }, [firstName])

  useEffect(() => {
    console.log("İçindeki state değiştiğinde çalışır lastname")
  }, [lastName])


  return (
    <div>
      <div><button onClick={() => setFirstName("Egemen")}>İsim Değiştir</button></div>
      <div><button onClick={() => setLastName("Çakır")}>Soyisim değiştir</button></div>
    </div>
  )
}

export default App
