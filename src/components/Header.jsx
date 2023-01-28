import React from 'react'

const Header = () => {
  return (
    <header className='px-6 py-3 bg-gradient-to-tr from-orange-700 to-orange-900'>
        <div className=' flex items-center gap-x-2'>
            <img className='w-24' src="https://www.clipartmax.com/png/middle/65-659792_pixel-beer-glass-outlien.png" alt="beer" />
            <h3 className='text-2xl font-bold text-white'>Chug <br /> Blogs</h3>
        </div>
            
    </header>
  )
}

export default Header