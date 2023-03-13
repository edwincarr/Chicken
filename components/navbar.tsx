"use client";
import Link from "next/link"
import Image from "next/image";
import Chicken from '../public/chicken-icon.png'
import { UserCircleIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-secondary">
      <div className="navbar-start">
        <Link href='/'>
          <Image src={Chicken} alt='Chicken Shop' className="w-12 p-0 btn btn-ghost hover:bg-transparent"/>
        </Link>
      </div>
      <div className="flex-none navbar-center">
        <Link className='btn btn-ghost normal-case text-xl hover:bg-hover' href='/menu'>Menu</Link>
        <Link className='btn btn-ghost normal-case text-xl hover:bg-hover' href='/locations'>Locations</Link>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar hover:bg-transparent">
            <div className="w-10 rounded-full">
              <UserCircleIcon className="text-primary"/>
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 p-2 menu menu-compact dropdown-content bg-neutral rounded-box w-52">
            <li><Link className='hover:bg-hover' href='/login'>Login</Link></li>
            <li><Link className='hover:bg-hover' href='/register'>Register</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
