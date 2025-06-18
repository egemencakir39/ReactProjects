import { useState } from 'react'
import './App.css'
import UserCard from './components/UserCard';
import axios from 'axios';
import { useEffect } from 'react';
const baseURL = "https://randomuser.me/api/?results=5"
function App() {
  const [user, setuser] = useState([])

  const GetUser = async () => {
    const response = await axios.get(baseURL);
    console.log(response.data.results);
    setuser(response.data.results)
  }
  useEffect(() => {
    GetUser();
  }, [])


  return (
    <div>
      {user.map((users, index) => (
        <UserCard user1={users} key={index} />
      ))}

    </div>
  )
}

export default App
