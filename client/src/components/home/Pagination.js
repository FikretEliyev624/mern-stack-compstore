import { useEffect, useState } from 'react';
import axios from "axios";


export default function Pagination(props) {
  // const [pageNumber, setPageNumber] = useState(0);
  // const [numberOfPages, setNumberOfPages] = useState(0);
  const pages = new Array(props.numberOfPages).fill(null).map((v, i) => i);
  
  // useEffect(() => {
  //   axios.get(`http://localhost:5000/products?page=${pageNumber}`)
  //     //.then((response) => response.json())
  //     .then((totalPages) => {
  //       //console.log(totalPages)
  //       setNumberOfPages(totalPages.data.totalPages);
  //     });
  // }, [pageNumber]);


  const gotoNext = () => {
    if(props.pageNumber + 1 < props.numberOfPages) {
      props.setNum(props.pageNumber + 1)
    }
  };

  const gotoPrevious = () => {
    if(props.pageNumber !== 0) {
      props.setNum(props.pageNumber - 1)
    }
  }

  return (
        <>
        
        <nav aria-label="Page navigation" className='flex dark:bg-darkmode items-center justify-center h-52 transition duration-500'>
    <ul className="inline-flex  space-x-2 my-48">
            <li><button onClick={gotoPrevious}  className="flex dark:hover:bg-warning items-center dark:text-white justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg>
              </button>
            </li>
            
            {pages?.map((pageIndex) => (
                  <li key={pageIndex}>
                    
                    <button  onClick={() => {
                      props.setNum(pageIndex)
                      // setPageNumber(pageIndex)
                    }
                      } className="dark:hover:bg-warning dark:focus:bg-warning w-10 dark:text-white focus:bg-ice h-10 focus:text-white text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">
                      {pageIndex + 1}
                    </button>
                  </li>
              ))}
            <li>
              <button  onClick={() => gotoNext()} className="dark:hover:bg-warning dark:text-white flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150  rounded-full focus:shadow-outline hover:bg-indigo-100">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg>
              </button>
            </li>
      </ul>
    </nav>
        </>
  )
}