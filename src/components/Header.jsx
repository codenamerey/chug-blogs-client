import Link from "next/link"
import { useContext } from "react"

const Header = ({ UserContext }) => {
  let {first_name, last_name, email_address, setUser} = useContext(UserContext);
  const user = {
    first_name,
    last_name,
    email_address
  }

  const handleLogoutClick = () => {
    localStorage.removeItem('jwt-token');
    setUser(null);
  }

  return (
    <header className='px-6 py-3 bg-gradient-to-tr from-orange-700 to-orange-900 flex justify-between items-center'>
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
            <Link href='/register/local'>
              <li>Sign Up</li>
            </Link>
            </ul>
          }

          {
            user.first_name &&
            <ul>
              <li><button className=" bg-red-900 text-white px-6 py-3 rounded-full shadow-lg" onClick={handleLogoutClick}>Log Out</button></li>
            </ul>
          }

        </nav>
    </header>
  )
}

export default Header