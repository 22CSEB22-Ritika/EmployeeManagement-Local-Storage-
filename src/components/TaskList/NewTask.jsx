import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='h-full w-[300px] bg-blue-400 rounded-xl flex-shrink-0 p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2'>{data.description}</p>
            <div className='mt-4 '><button className='bg-green-700 px-2 py-1 text-sm rounded'>Accept</button></div>
        </div>
  )
}

export default NewTask