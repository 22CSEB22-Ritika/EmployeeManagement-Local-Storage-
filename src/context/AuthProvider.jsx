import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

// Context Object
export const AuthContext = createContext()

// Provider Component
const AuthProvider = ({ children }) => {
  // localStorage.clear()
  const [userdata, setUserdata] = useState(null)

  useEffect(() => {
    setLocalStorage()
    const { employees, admin } = getLocalStorage()
    setUserdata({ employees, admin })
  }, [])

  return (
    <AuthContext.Provider value={userdata}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
