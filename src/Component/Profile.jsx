import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {

    const {user} = useContext(UserContext);

    if(!user) return <div className='text-center text-white'>Login please!!!</div>

    return <div className='text-center text-white'>welcome {user.username}</div>
}

export default Profile