import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext';

const Login = () => {

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setUser({username,password});
    }

  return (
    <div className='w-full  flex flex-col justify-center items-center'>
        <h2 className='text-white'>Login</h2>
        <input className='my-2' type="text" placeholder='username' value={username} onChange={(e)=>{setUsername(e.target.value)}} />
        <input className='my-2' type="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <button className='my-2 text-white' onClick={onSubmitHandler}>Submit</button>
    </div>
  )
}

export default Login