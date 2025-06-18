import React from 'react'
import './UserCard.css'

function UserCard({ user1 }) {
    return (
        <div className='base'>
            <ul>
                <li>
                    <div className='picture'>
                        <img src={user1.picture.large} alt="" />

                    </div>
                    <div className='info'>
                        <p>Name: {user1.name.first}</p>

                    </div>
                </li>
            </ul>

        </div>
    )
}

export default UserCard