import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import SingleUser from './SingleUser';

const BASE_URL = "https://randomuser.me/api/?results=5"

export const UserList = () => {

    const [users, setUser] = useState([]);

    const GetUser = async () => {
        const response = await axios.get(BASE_URL);
        setUser(response.data.results);
        console.log(response.data.results);
    }

    useEffect(() => {
        GetUser();
    }, [])

    return (
        <div>
            <ul>
                {users.map((user, index) => (
                    <li>
                        {' '}
                        <SingleUser user={user} key={index} />{' '}
                    </li>
                ))}
            </ul>

        </div>

    )
}

export default UserList
