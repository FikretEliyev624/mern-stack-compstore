import React,{useState, useEffect} from 'react';
import { MdComputer } from 'react-icons/md';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { FaSearch } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';
import { FiMoon } from 'react-icons/fi';
import DarkMode from './DarkMode';
import {  Link, Route, Routes } from "react-router-dom";
import About from './about/About';
import Contactus from './contact/Contactus';
import Signup from './signup/Signup';
import Login from './login/Login';
import Home from "./home/Home";
import Bucket from './addtocart/Bucket';


export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
 const lStorage=  localStorage.getItem("token")  ;
 const LSemail=  JSON.parse(localStorage.getItem("email"))  ;
 
 
    let userName=LSemail.split('@')
  
useEffect(()=>{
   if (lStorage && (JSON.parse(lStorage))) {
   setIsLoggedIn(true)
    }else{
      setIsLoggedIn(false)
    } 
}, [lStorage])
   
    const [colorTheme,setTheme]=DarkMode();

    const logout = ()=>{
      localStorage.removeItem("token");
      setIsLoggedIn(false)
    }
  return (

    <div>


        <nav className='p-3 bg-white dark:bg-darkmode   shadow flex items-center justify-between transition duration-500'>
          <div>
            <a href='/#' className='text-teal-300 dark:text-white dark:hover:text-yellow-200 hover:text-sky'><MdComputer size={40} /></a>
          </div>
          <ul className='flex items-center flex-row'>
              <li className='mx-4 text-teal-300 dark:text-white dark:hover:text-yellow-200  hover:text-sky font-bold'><Link to='/' className='text-xl flex'>Home</Link></li>
              <li className='mx-4 text-teal-300 dark:text-white  flex dark:hover:text-yellow-200 hover:text-sky font-bold'><Link to='/about' className='text-xl'>About</Link></li>
              <li className='mx-4 text-teal-300 dark:text-white  flex dark:hover:text-yellow-200 hover:text-sky font-bold'><Link to='/contactus' className='text-xl'>Contact Us</Link></li>
            
            {isLoggedIn?<li className='mx-4 flex text-lime-500 select-none dark:text-yellow-300   font-bold text-xl uppercase' ><FaUser className='my-[6px] mr-1' size={17} />{userName[0]}</li> : <Link to='/signup' className='bg-teal-300 dark:bg-white dark:text-darkmode  dark:hover:bg-yellow-200 dark:hover:text-white  font-bold px-6 py-2 rounded ml-10 hover:bg-sky text-white'>Sign Up</Link>}
             {isLoggedIn?
            
             <Link to="/login" onClick={logout} className='bg-teal-300 dark:bg-white dark:text-darkmode  dark:hover:bg-yellow-200 dark:hover:text-white font-bold px-6 py-2 rounded ml-3 hover:bg-sky text-white'>Logout</Link>
             :<Link to='/login' className='bg-teal-300 dark:bg-white dark:text-darkmode  dark:hover:bg-yellow-200 dark:hover:text-white font-bold px-6 py-2 rounded ml-3 hover:bg-sky text-white'>Login</Link>} 
              
              <Link to='/bucket' className='px-6 py-2 rounded ml-3 dark:text-white dark:hover:text-yellow-200 text-teal-300 hover:text-sky'><HiOutlineShoppingCart size={35} /></Link>
            
              <div  className="relative mx-auto w-max ">
                    <input type="search" 
              className="peer cursor-pointer relative z-10 h-12 w-12 dark:text-white  rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-sky dark:focus:border-yellow-200 focus:pl-16 focus:pr-4" />
                <FaSearch size={30} className="absolute  inset-y-0 dark:text-white text-teal-300 dark:hover:text-yellow-200 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-sky dark:peer-focus:border-yellow-200 peer-focus:stroke-teal-300" />
                
                
            </div>
              
                    <span className='mx-9 transition duration-500' onClick={()=>setTheme(colorTheme)}>
                        {colorTheme==="light"  ?
                       (<FiMoon size={30} color={"#e5e5e5"} />):
                       (<FiSun size={30} color={'#ffd700'} />) }
                    </span>
               
          </ul>
      </nav>
              <Routes>
                  <Route path="/"  element={<Home />}/>
                <Route  path="/about" element={<About />}/>
                <Route  path="/contactus" element={<Contactus />}/>
                <Route  path="/signup" element={<Signup />}/>
                <Route  path="/login/*" element={<Login />}/>
                <Route  path="/bucket" element={<Bucket />}/>
              </Routes>
    </div>
  )
}

