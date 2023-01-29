import Link from "next/link"
import { useContext } from "react"

const Header = ({ UserContext }) => {
  let {first_name, last_name, email_address} = useContext(UserContext);
  const user = {
    first_name,
    last_name,
    email_address
  }

  return (
    <header className='px-6 py-3 bg-gradient-to-tr from-orange-700 to-orange-900 flex justify-between'>
        <div className=' flex items-center gap-x-2'>
            <img className='w-24' src="https://www.clipartmax.com/png/middle/65-659792_pixel-beer-glass-outlien.png" alt="beer" />
            <h3 className='text-2xl font-bold text-white'>Chug <br /> Blogs</h3>
        </div>
        
        <nav>
          {
            !user.first_name &&
            <ul className='flex items-center h-full gap-3 [&>a]:bg-orange-400 [&>a]:p-2 [&>a]:shadow-inner'>
            <Link href='/login'>
              <li>Log In</li>
            </Link>
            <Link href='/signup'>
              <li>Sign Up</li>
            </Link>
            </ul>
          }

          {
            user.first_name &&
            <ul>
              <li>Welcome, {user.first_name}</li>
            </ul>
          }

        </nav>
    </header>
  )
}

export default Header