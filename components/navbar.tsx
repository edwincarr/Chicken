// "use client";
import Link from "next/link"
import Image from "next/image";
import Chicken from '../public/chicken-icon.png'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState, useEffect } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <div className={`navbar bg-neutral text-secondary fixed transition-all duration-500 ${ show ? '' : 'md:-translate-y-96'}`}>
      <div className="navbar-start">
        <Link href='/'>
          <Image src={Chicken} alt='Chicken Shop' className="w-12 p-0 btn btn-ghost min-w-0 hover:bg-transparent"/>
        </Link>
      </div>
      <div className="navbar-center invisible absolute md:visible md:relative">
        <ul className="flex flex-row gap-4">
          <li><Link className='btn btn-ghost normal-case text-lg hover:bg-hover' href='/menu'>Menu</Link></li>
          <li><Link className='btn btn-ghost normal-case text-lg hover:bg-hover' href='/locations'>Locations</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="btn btn-primary font-bold p-2 md:mr-14">
          <Link href='/order'>Order Carryout</Link>
        </div>
        <div className="dropdown dropdown-end invisible absolute md:visible md:relative">
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
        <div className="dropdown dropdown-end" >
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <div className="w-10">
              <Bars3Icon className="text-secondary"/>
            </div>
          </label>
          <ul tabIndex={0} className="menu mt-3 p-2 dropdown-content w-52">
            <li className="menu-title">
              <span>Navigation</span>
            </li>
            <li><Link href='/menu'>Menu</Link></li>
            <li><Link href='/locations'>Locations</Link></li>
            <li className="menu-title">
              <span>Profile</span>
            </li>
            <li><Link href='/login'>Login</Link></li>
            <li><Link href='/register'>Register</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
