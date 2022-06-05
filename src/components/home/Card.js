import React,{ useEffect , useState } from 'react';
//import card from "./Carousel/img/download-removebg-preview.png";
import axios from "axios";
import Pagination from './Pagination';

export default function Card() {

    const [items,setItem]=useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    //const url='http://localhost:5000/products';

    useEffect(()=>{
        axios.get(`http://localhost:5000/products?page=${pageNumber}`)
        .then(res=>{
            setItem(res.data.posts)
            console.log(res.data.posts)
        })
    }, [pageNumber])

  return (
    <div className=''>
    
    <div className='flex flex-wrap'>
        {items?.map((elem, index)=>(

        <div key={index} className='h-97 w-80 mx-16 mt-9  dark:hover:bg-indigo-200 dark:hover:text-purple dark:border-white dark:bg-darkmode dark:hover:bg dark:text-white hover:text-blue-900 border-2 border-black hover:bg-zinc-200 hover:border-slate-400 transition duration-500'>
        
            <div>
                <img src={elem.img} className='my-2 w-[316px] h-[202px]'  alt=''/>
            </div>
            <p className='font-bold text-xl mx-3 text-center'>{elem.Name}</p>
            <div>
                <p className='text-base font-semibold mt-2 text-center'>{elem.Specifications}</p>
            </div>
            <div className='text-center mx-5 mt-2'>
                <span>
                <span className='mr-1'>{elem.Price}</span>
                <span>AZN</span>
                </span>
            </div>
            <div className='flex items-center justify-center my-[6px]'>
            <a className='ml-1 px-3 py-2 bg-lime-600 rounded-lg dark:bg-white dark:hover:bg-warning dark:text-darkmode dark:hover:text-white text-white hover:bg-ice transition duration-500  hover:text-yellow-100' href='/#'>Add to cart</a>
            <a className='ml-3 px-3 py-2 bg-indigo-600 rounded-lg dark:bg-cyan-rahid dark:hover:bg-bubble-gum dark:text-light dark:hover:text-white text-white hover:bg-ice transition duration-500  hover:text-yellow-100' href='/#'>Buy now</a>
                
            </div>
           
        </div>
        ))}
    </div>
    <Pagination className='flex justify-center items-center' setNum={setPageNumber}/>
    </div>
  )
}
