import React from 'react'
import Login from './Component/Login'
import Profile from './Component/Profile'

const App = () => {
  return (
    <div className='h-screen bg-[#1f242e] w-full mx-auto flex flex-col justify-center items-center'>
       <h1 className='text-center'>Context API</h1>
        <div className='w-full mx-auto'>
        <Login/>
        <Profile/>
        </div>
    </div>
  )
}

export default App