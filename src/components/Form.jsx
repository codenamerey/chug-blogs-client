import React from 'react'

const Form = ({ children }) => {
  return (
    <form method="post" className='bg-white shadow-lg shadow-gray-700 flex flex-col items-center m-10 mt-0 md:w-1/2 md:m-0 [&>input[type="text"]]:outline-none [&>input[type="text"]]:border [&>input[type="text"]]:px-6 [&>input[type="text"]]:py-3 p-2 align-middle'>
        {children}
    </form>
  )
}

export default Form