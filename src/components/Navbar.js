import React from "react";
import {Link} from 'react-router-dom'

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className={`relative flex flex-wrap items-center justify-between ${navbarOpen ? "bg-black transition-all ease-in-out duration-500" : "bg-neutral-700 transition-all ease-in-out duration-500"} md:bg-[#303030]`}>
        <div className="w-full mx-auto flex flex-wrap items-center">
          <div className="w-full relative flex lg:w-auto lg:static py-2 md:hidden">
            <button
              className="text-[#ccc] z-10 hover:text-slate-50 text-xl pl-2 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none md:hidden"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
              {/* humberger menu */}
              <div class={`menu-btn flex justify-center items-center h-8 w-8 cursor-pointer transition-all duration-500 ease-in-out ${navbarOpen ? "open" : null}`}>
                <div class="menu-btn__burger bg-white rounded-sm shadow-slate-700 transition-all duration-500 ease-in-out before:absolute before:w-4 before:h-0.5 before:bg-white before:rounded-sm before:shadow-slate-700 before:transition-all before:duration-500 before:ease-in-out before:-translate-y-1 after:absolute after:w-4 after:h-0.5 after:bg-white after:rounded-sm after:shadow-slate-700 after:transition-all after:duration-500 after:ease-in-out after:translate-y-1 after"></div>
              </div>
              
            </button>
            <Link to='/' className="absolute w-full text-center text-[#ccc]  cursor-default md:text-left md:static">
              <i class='bx bxl-apple text-2xl cursor-pointer hover:text-slate-50'></i>
            </Link>
          </div>

          <div
            className={
              "lg:flex items-center w-full md:flex md:items-center xl:container md:mx-auto xl:px-32 2xl:px-64 " +
              (navbarOpen ? " flex md:static" : " hidden")
            }
            id="example-navbar-danger"
          > 
            <ul className="flex flex-col lg:flex-row lg:ml-auto w-full h-100 md:flex-row md:h-auto md:items-center md:justify-around md:py-2">
              <li className="nav-item px-3 relative border-b border-p pb-4 md:border-none md:hidden">
                <label class="relative block md:hidden md:border-none">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                    <i class='bx bx-search-alt-2 text-p' ></i>
                  </span>
                  <input class="placeholder:text-p block bg-[#1D1D1F] w-full rounded-md py-1.5 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm text-slate-200 font-semibold placeholder:font-normal placeholder:font-inter placeholder:tracking-tight" placeholder="Cari di apple.com" type="text" name="search"/>
                </label>
              </li>
              <li className="nav-item font-inter text-[#ccc] py-2.5 px-12 border-b border-p md:p-0 md:border-none hidden md:inline-block">
                  <Link to ='/' className="absolute w-full text-center text-[#ccc]  cursor-default md:text-left md:static" href="#pablo">
                    <i class='bx bxl-apple text-2xl cursor-pointer hover:text-slate-50 md:text-lg'></i>
                </Link>
              </li>
              <li className="nav-item font-inter text-[#ccc] py-2.5 px-12 border-b border-p md:p-0 md:text-xxs md:font-sans  md:border-none">
                <a href="#" className="hover:text-slate-200">Mac</a>
              </li>
              <li className="nav-item font-inter text-[#ccc] py-2.5 px-12 border-b border-p md:p-0 md:text-xxs md:font-sans md:border-none">
                <a href="#" className="hover:text-slate-200">iPad</a>
              </li>
              <li className="nav-item font-inter text-[#ccc] py-2.5 px-12 border-b border-p md:p-0 md:text-xxs md:font-sans md:border-none">
                <Link to="/iphone" className="hover:text-slate-200">iPhone</Link>
              </li>
              <li className="nav-item font-inter text-[#ccc] py-2.5 px-12 border-b border-p md:p-0 md:text-xxs md:font-sans md:border-none">
                <a href="#" className="hover:text-slate-200">Watch</a>
              </li>
              <li className="nav-item font-inter text-[#ccc] py-2.5 px-12 border-b border-p md:p-0 md:text-xxs md:font-sans md:border-none">
                <a href="#" className="hover:text-slate-200">AirPods</a>
              </li>
              <li className="nav-item font-inter text-[#ccc] py-2.5 px-12 border-b border-p md:p-0 md:text-xxs md:font-sans md:border-none">
                <a href="#" className="hover:text-slate-200">TV & Rumah</a>
              </li>
              <li className="nav-item font-inter text-[#ccc] py-2.5 px-12 border-b border-p md:p-0 md:text-xxs md:font-sans md:border-none">
                <a href="#" className="hover:text-slate-200">Hanya di Apple</a>
              </li>
              <li className="nav-item font-inter text-[#ccc] py-2.5 px-12 border-b border-p md:p-0 md:text-xxs md:font-sans md:border-none">
                <a href="#" className="hover:text-slate-200">Dukungan</a>
              </li>
              <li className="nav-item font-inter text-[#ccc] py-2.5 px-12 md:p-0 md:text-xxs md:font-sans">
                <a href="#" className="hover:text-slate-200">Tempat Membeli</a>
              </li>
              <li className="nav-item font-inter text-[#ccc] py-2.5 px-12 md:p-0 text-xl md:font-sans hidden md:inline-block">
                <i class='bx bx-search-alt-2 hover:text-white cursor-pointer'></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}