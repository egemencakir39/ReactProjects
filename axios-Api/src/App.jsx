import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

const BASE_URL = "https://jsonplaceholder.typicode.com/users"

function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL);
    console.log(response.data);
  }

  const createUser = async (newUser) => {
    const response = await axios.post(BASE_URL, newUser)
    console.log("newuser", response.data)
  }
  const updateuser = async (userId, updatedUser) => {
    await axios.put(`${BASE_URL}/${userId}`, updatedUser);
  }

  const deleteUser = async (userId) => {
    const deletedResponse = await axios.delete(`${BASE_URL}/${userId}`);
    console.log(deletedResponse.data);
  }

  useEffect(() => {


    // const newUser = {
    //   "username": "egemen",
    //   "surname": "cakır"
    // }
    // createUser(newUser);
    // updateuser("1", {
    //   "username": "Egemen"
    // })
    // getAllUsers();
    deleteUser(2);

  }, []);

  return (
    <div>se</div>
  )
}

export default App
