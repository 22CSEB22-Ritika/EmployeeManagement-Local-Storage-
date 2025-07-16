import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const authdata = useContext(AuthContext)
  const [loggedInData, setloggedInData] = useState(null)

  useEffect(() => {
    const LoggedInuser=localStorage.getItem('LoggedInUser')
    // console.log(LoggedInuser)
    if(LoggedInuser){
      const userData=JSON.parse(LoggedInuser)
      setUser(userData.role)
      setloggedInData(userData.data)

    }

  },[])
  

  // console.log(authdata?.employees)  
  const handleLogin = (email, password) => {
    if (authdata && authdata.admin && authdata.employees) {
      const admin = authdata.admin.find(
        (a) => email === a.email && password === a.password
      )
      if (admin) {
        setUser('admin')
        setloggedInData(admin)
        localStorage.setItem(
          'LoggedInUser',
          JSON.stringify({ role: 'admin', data: admin })
        )
        return
      }

      const employee = authdata.employees.find(
        (e) => email === e.email && password === e.password
      )
      if (employee) {
        setUser('employee')
        setloggedInData(employee)
        localStorage.setItem(
          'LoggedInUser',
          JSON.stringify({ role: 'employee', data: employee })
        )
        return
      }

      alert('Invalid Credentials')
    } else {
      alert('User data not loaded yet. Please wait.')
    }
  }
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} isLoading={!authdata} /> : null}

      {user === 'admin' && <AdminDashboard data={loggedInData} changeUser={setUser}/>}
      {user === 'employee' && <EmployeeDashboard data={loggedInData} changeUser={setUser}/>}
    </>
  )
}

export default App
