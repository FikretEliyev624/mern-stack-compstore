import React,{useState} from 'react';
import {  Link, Route, Routes } from "react-router-dom";
import Signup from '../signup/Signup';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
const Login=() => {
    
  const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
 

  const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};


  const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/users/login";
			const tkn = await axios.post(url, data);
      localStorage.setItem('USER_DATA', JSON.stringify(tkn.data))
			// localStorage.setItem("token", JSON.stringify(tkn.data.token));
			// localStorage.setItem("email", JSON.stringify(tkn.data.email));

			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
        toast.error(error.response.data.message)
			}
		}
	};
  
  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
    <div className='dark:bg-darkmode h-[400px]'>
      <div className='flex items-center justify-center dark:bg-darkmode transition duration-500'>
        <div className='bg-[#f3f7f9] h-[350px] w-[450px] mt-16 rounded-lg dark:bg-gray-400'>
          <p className='text-5xl flex justify-center mt-2 text-midnight hover:text-cyan-700 dark:text-light dark:hover:text-lime-200'>Login</p>
        <form onSubmit={handleSubmit}>
        <div className='flex flex-col items-center mt-8'>
            <div className="relative z-0 w-80 mb-6 group">
              <input onChange={handleChange} value={data.email} type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-100 dark:focus:border-cyan-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 dark:peer-focus:text-cyan-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
          </div>
          <div className="relative z-0 w-80 mb-6 group">
            <input autoComplete="true" onChange={handleChange} value={data.password}  type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-100 dark:focus:border-cyan-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 dark:peer-focus:text-cyan-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
          </div>
        
         <a href='/#' className='text-sky  hover:text-blue-400 dark:hover:text-blue-200 dark:text-lime-50 italic mt-2'>Forgot Password</a>
         <p className='font-medium my-1 text-gray-700 dark:text-light'>Don't have an account yet? <Link to='/signup' className='text-sky hover:text-blue-400 italic dark:text-yellow-300 dark:hover:text-green-300'>Sign Up</Link></p>
        <button type='submit' className='py-2 px-5 mx-2 my-2 rounded-lg hover:bg-blue-800 bg-midnight dark:bg-indigo-300 text-white dark:hover:text-light dark:hover:bg-indigo-600 dark:text-midnight'>Login</button>
        </div>
        </form>

        </div>
      </div>

              <Routes>
                <Route  path="/signup" element={<Signup />}/>
              </Routes>

    </div>
    </>
  )
}

export default Login;