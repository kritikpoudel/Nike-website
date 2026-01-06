import {headerLogo}from '../assets/images'
import{hamburger} from'../assets/icons'
import { navLinks } from '../constants'
import { useState } from 'react'
const Nav = () => {
    const[open,setOpen]=useState(false)
  return (
    <header className='padding-x py-8 absolute z-20 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
            <img src={headerLogo} alt="logo" width={130} height={29} />
            </a>
            <ul className='flex-1 flex items-center justify-center gap-16 max-lg:hidden'>
                {navLinks.map((item)=>(
                    <li key={item.label}>
                        <a href={item.href} className='leading-normal text-lg text-slate-gray font-montserrat'>{item.label}</a>
                    </li>
                ))}
            </ul>
            {/* <div className='hidden max-lg:block'><img src={hamburger} alt="hamburger" width={25} height={25} onClick={()=>setOpen(true)}/></div> */}
            <button
          onClick={() => setOpen(!open)}
          className="hidden max-lg:flex flex-col gap-1.5 z-50"
        >
          <span
            className={`h-0.5 w-6 bg-black transition-transform duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-black transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-black transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
        </nav>
        <div
        className={`hidden max-lg:block fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="hidden max-lg:flex flex-col gap-6 pt-28 px-6 items-center">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg font-montserrat text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
        
    </header>
  )
}

export default Nav