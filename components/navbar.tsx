"use client";
import Link from "next/link"
import { UserCircleIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-secondary">
      <div className="navbar-start">
        <Link className='btn btn-ghost normal-case text-xl' href='/'>Chicken Store</Link>
      </div>
      <div className="flex-none navbar-center">
        <Link className='btn btn-ghost normal-case text-xl' href='/menu'>Menu</Link>
        <Link className='btn btn-ghost normal-case text-xl' href='/locations'>Locations</Link>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <UserCircleIcon />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 p-2 menu menu-compact dropdown-content bg-neutral rounded-box w-52">
            <li><Link className='hover:bg-opacity-50' href='/login'>Login</Link></li>
            <li><Link className='hover:bg-opacity-50' href='/register'>Register</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
