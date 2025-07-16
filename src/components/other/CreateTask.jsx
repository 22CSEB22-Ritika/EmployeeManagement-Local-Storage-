import React, { useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { useContext } from 'react'

const CreateTask = () => {
  const { employees } = useContext(AuthContext)

  const [taskTitle, settaskTitle] = useState('')
  const [taskDescription, settaskDescription] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [assignTo, setassignTo] = useState('')
  const [category, setcategory] = useState('')


const [newTask, setnewTask] = useState({})

  const submitHandler=(e)=>{
    e.preventDefault()
    // console.log("Task Created")
    setnewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false})
    const data=JSON.parse(localStorage.getItem('employees'))
    data.forEach(function(elem){
      // console.log(elem.name)
      if(assignTo === elem.name){
      elem.tasks.push(newTask)
      elem.taskCounts.newTask+=1
      // console.log(elem)

      }
    })
    localStorage.setItem('employees', JSON.stringify(data))

    // console.log(Task)
    settaskDate("")
    setassignTo("")
    settaskDescription("")
    setcategory("")
    settaskTitle("")

  }

  return (
<div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className="flex items-start w-full justify-between flex-wrap">
          
            <div className="w-1/2">
                <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input 
              value={taskTitle}
              onChange={(e)=>{
                settaskTitle(e.target.value)
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] bg-transparent border-gray-400 mb-4" type="text" placeholder="Make ui design" required/>
            </div>
              <div>
                <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                <input 
                value={taskDate}
                onChange={(e)=>{
                  settaskDate(e.target.value)
                }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] bg-transparent border-gray-400 mb-4" type="date" required/>
              </div>
              <div>
  <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
  <select
    value={assignTo}
    onChange={(e) => setassignTo(e.target.value)}
    className="text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] bg-transparent border-gray-400 mb-4 "
    required
  >
    <option className='!text-black' value="" disabled>Select Employee</option>
    {employees && employees.map((emp) => (
      <option className='!text-black' key={emp.id} value={emp.name}>
        {emp.name}
      </option>
    ))}
  </select>
</div>

              <div>
                <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                <input 
                value={category}
                onChange={(e)=>{
                  setcategory(e.target.value)
                }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] bg-transparent border-gray-400 mb-4" type="text" placeholder="design,dev,etc" required/>
              </div>
            </div>
            <div className="w-2/5 flex flex-col items-start">
                 <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea 
            value={taskDescription}
            onChange={(e)=>{
              settaskDescription(e.target.value)
            }}
            className="text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] bg-transparent border-gray-400 mb-4" name="" id="" cols="30" rows="10" required></textarea>
           
          <button className="bg-emerald-500 py-3 px-5 rounded text-sm mt-4 w-full hover:bg-emerald-600 ">Create Task</button> </div>
        </form>
      </div>
  )
}

export default CreateTask