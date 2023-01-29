import React from 'react'

const Form = ({ children, submitFunction }) => {


  return (
    <form id='login-form' onSubmit={submitFunction} method="post" className='bg-white shadow-lg shadow-gray-700 flex flex-col items-center m-10 mt-0 md:w-1/2 md:m-0 [&>input[type="text"]]:outline-none [&>input[type="text"]]:border [&>input[type="text"]]:px-6 [&>input[type="text"]]:py-3 p-2 align-middle [&>input[type="password"]]:outline-none [&>input[type="password"]]:border [&>input[type="password"]]:px-6 [&>input[type="password"]]:py-3'>
        {children}
    </form>
  )
}

export default Form