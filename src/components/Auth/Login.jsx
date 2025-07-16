import React, { useState } from 'react'

const Login = ({handleLogin,isLoading}) => {

    const [email, setemail] = useState('')
    const [password, setpass] = useState('')

const submit=(e)=>{
    e.preventDefault()
    if (!isLoading) {
      handleLogin(email, password)
    } else {
      alert('Please wait, loading user data...')
    }
    setemail("")
    setpass("")
}

  return (
    <div className='flex items-center justify-center h-screen w-screen '>
        <div className='border-2 border-emerald-600 p-20 rounded-xl ml-2'> 
            <form onSubmit={(e)=>{
                submit(e)
            }} className='flex flex-col items-center justify-center'>
                <input
                 value={email}
                 onChange={(e)=>{
                    setemail(e.target.value)
                 }} 
                className= " outline-none bg-transparent border-2 font-medium text-lg placeholder-gray-400 rounded-full py-2 px-6 border-emerald-600 " type="email" placeholder='Enter your email' required/>
                <input 
                value={password}
                 onChange={(e)=>{
                    setpass(e.target.value)
                 }} 
                className="bg-transparent border-2 text-lg font-medium placeholder-gray-400 rounded-full border-emerald-600 py-2 px-6 mt-5"  type="password" placeholder='Enter password' required/>
                <button className=' border-none text-white text-xl rounded-full hover:bg-emerald-700  bg-emerald-600 py-2 px-8 w-full font-semibold mt-7'>Log in</button>
            </form>

        </div>

    </div>
  )
}

export default Login