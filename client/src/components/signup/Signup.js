import React,{useState} from 'react'
import {  Link, Route, Routes,useNavigate} from "react-router-dom";
import Login from '../login/Login';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export default function Signup() {


  const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};


  
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/users/signup";
			const { data: res } = await axios.post(url, data);
			navigate("/login"); 
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
    <div className='dark:bg-darkmode h-[600px]'>
      <div className='flex items-center justify-center dark:bg-darkmode'>
        <div className='bg-[#f3f7f9] h-[500px] w-[600px] mt-16 rounded-lg dark:bg-gray-400 transition duration-500'>
          <p className='text-5xl flex dark:text-light dark:hover:text-lime-200 justify-center mt-2 text-midnight hover:text-cyan-700'>Sign up</p>
        <form onSubmit={handleSubmit}>
        <div className='flex  items-center justify-center mt-14'>
          <div className="relative z-0 w-52 mb-6 group mx-4 ">
            <input onChange={handleChange} value={data.firstName} type="text" name="firstName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-100 dark:focus:border-cyan-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="firstName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 dark:peer-focus:text-cyan-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
          </div> 
          <div className="relative z-0 w-52 mb-6 group">
            <input onChange={handleChange} type="text" value={data.lastName}  name="lastName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-100 dark:focus:border-cyan-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="lastName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 dark:peer-focus:text-cyan-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
          </div> 
        </div>
        <div className='flex flex-col items-center mt-10'>
          <div className="relative z-0 w-80 mb-6 group">
        <input onChange={handleChange} value={data.email} type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-100 dark:focus:border-cyan-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 dark:peer-focus:text-cyan-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
          </div>
          <div className="relative z-0 w-80 mb-6 group">
            <input onChange={handleChange} value={data.password} type="password" name="password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-100 dark:focus:border-cyan-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 dark:peer-focus:text-cyan-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
          </div>
        
        <p className='font-medium my-3 text-gray-700 dark:text-light'>Already have an account? <Link to='/login' className='text-sky hover:text-blue-400 dark:text-yellow-300 dark:hover:text-green-300 italic'>Login</Link></p>
        <button className='py-2 px-5 mx-2 my-3 rounded-lg hover:bg-blue-800 dark:bg-indigo-300 dark:hover:text-light dark:hover:bg-indigo-600 dark:text-midnight bg-midnight text-white'>Create Account</button>
        </div>
        </form>

        </div>
      </div>

              <Routes>
                <Route  path="/login/*" element={<Login  />}/>
              </Routes>



    </div>
    </>
  )
}
