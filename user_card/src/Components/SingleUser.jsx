import React from 'react'


const SingleUser = ({ user }) => {
    return (
        <div className='base_div'>
            <div className='picture'>
                <img src={user.picture.large} alt="" />
            </div>

            <div className='info'>
                <h3>{user.name.title}, {user.name.first} {user.name.last}</h3>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.location.city}, {user.location.country}</p>
            </div>
        </div>
    )
}

export default SingleUser