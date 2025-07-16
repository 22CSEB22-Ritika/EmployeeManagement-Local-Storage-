import React, { useEffect, useState } from 'react'

const Header = (props) => {
  const LoggedInuser = JSON.parse(localStorage.getItem('LoggedInUser'))
const role = LoggedInuser?.role
const username = role === 'admin' ? ' (Admin)' : ''

const logOutUser=()=>{
  localStorage.setItem('LoggedInUser','')
  props.changeUser('')
  // window.location.reload()
}


  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello<br/> <span className='text-3xl font-semibold'>{props.name}{username}👋</span></h1>
        <button onClick={logOutUser} className='text-lg font-medium bg-red-600 text-white px-5 py-2 rounded-sm'>Log out</button>
    </div>
  )
}

export default Header