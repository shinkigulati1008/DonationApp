import  { useState } from 'react'
import { NavLink } from "react-router-dom";
import logoImg from '../assets/logo.png'

const Header = () => {
    let linkClassName = "block text-2xl lg:text-xl lg:inline-block mt-8 lg:mt-0 text-white hover:text-violet-300 mr-6 transition-colors duration-300";
    let activeClassName = "block text-2xl lg:text-xl lg:inline-block mt-8 lg:mt-0 text-white mr-6";
  
    let navCloseClassName = "w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block";
    let navOpenClassName = "w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:block open-nav h-screen lg:h-max";
  
    const [isNavToggle, setNavToggle] = useState(false);
  
    const toggleClass = () => {
      setNavToggle(!isNavToggle);
      window.scrollTo(0, 0);
    };
  
    const closeNav = () => {
      setNavToggle(false);
      window.scrollTo(0, 0);
    };
  return (
    <header className="fixed w-full top-0 z-50">
    <nav className="flex items-center justify-between flex-wrap bg-sky-300 py-4 px-6">
      <div className="flex items-center justify-center text-white w-14 lg:w-36 mr-6">
        <NavLink to="/" onClick={closeNav}>
          <img className="h-20 w-20 mr-2" src={logoImg} alt="logo" />
        </NavLink>
      </div>
      <div className="flex items-center lg:order-last">
        <div className="lg:hidden">
          <button onClick={toggleClass} className="flex items-center px-3 py-2 border rounded text-white border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      <div className={isNavToggle ? navOpenClassName : navCloseClassName}>
        <div className="text-lg font-semibold lg:flex-grow" onClick={toggleClass}>
          <NavLink to="/" className={({ isActive }) => (isActive ? activeClassName : linkClassName)}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? activeClassName : linkClassName)}>
            About Us
          </NavLink>
          <NavLink to="/credits" className={({ isActive }) => (isActive ? activeClassName : linkClassName)}>
            Credits
          </NavLink>
          <NavLink to="/terms" className={({ isActive }) => (isActive ? activeClassName : linkClassName)}>
            Terms of Service
          </NavLink>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Header
