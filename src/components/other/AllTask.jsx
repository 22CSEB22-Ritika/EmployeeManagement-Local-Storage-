import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const authData=useContext(AuthContext)
  return (
    <div id='tasklist' className="p-5 bg-[#1c1c1c] mt-5 rounded ">
         <div className='bg-red-400 flex justify-between py-2 px-4 rounded mb-2 border-red-600 border-3'>
            <h2 className='w-1/5 py-1 px-1 rounded font-bold'>Employee Name</h2>
            <h3 className='w-1/5 py-1 px-1 rounded font-bold'>New Task</h3>
            <h5 className='w-1/5 py-1 px-1 rounded font-bold'>Active Task</h5>
            <h5 className='w-1/5 py-1 px-1 rounded font-bold'>Completed</h5>
            <h5 className='w-1/5 py-1 px-1 rounded font-bold'>Failed</h5>
        </div>
        <div> 
        {authData.employees.map(function(elem ,idx){
            return <div className='border-2 border-emerald-400 flex justify-between py-2 px-4 rounded mb-2' key={idx}>
            <h2 className='w-1/5 py-1 px-1 rounded font-bold '>{elem.name}</h2>
            <h3 className='w-1/5 py-1 px-1 rounded !text-blue-600 font-bold'>{elem.taskCounts.newTask}</h3>
            <h5 className='w-1/5 py-1 px-1 rounded !text-yellow-400 font-bold'>{elem.taskCounts.active}</h5>
            <h5 className='w-1/5 py-1 px-1 rounded !text-green-600 font-bold'>{elem.taskCounts.completed}</h5>
            <h5 className='w-1/5 py-1 px-1 rounded !text-red-600 font-bold'>{elem.taskCounts.failed}</h5>
        </div>
        })}
        </div>


    </div>
  )
}

export default AllTask