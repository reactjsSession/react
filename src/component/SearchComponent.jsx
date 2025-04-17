import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SearchComponent(props) {
  const [searchParam, setSearchParam] = useState('');
  const [searchResult,setSearchResult] = useState([]);
  const navigate = useNavigate();

    useEffect(()=>{
   
    const filterData = async () => {
        try{
        const response = await fetch(`https://dummyjson.com/products/search?limit=5&q=${searchParam}`)
        const data = await response.json();
        console.log(data)
        setSearchResult(data)
        } catch(error){

        }
     }

     if (searchParam === '') {
        setSearchResult([]);
      } else {
        filterData()
      }
       
     
    },[searchParam]);

    const serachHandler =(event) => {
         
      const value = event.target.value
       setSearchParam(value)
    }
    const handleProductClick = () =>{
         
        setSearchResult([]);
    }
    return (
  
<form className="max-w-lg mx-auto">
    <div className="flex">
        <label for="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        <button id="dropdown-button" data-dropdown-toggle="dropdown" className="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
            </li>
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
            </li>
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
            </li>
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
            </li>
            </ul>
        </div>
        <div className="relative w-full">
            <input type="search" value={searchParam} onChange={serachHandler} id="search-dropdown" style={{width:'350px'}} className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray-500" placeholder="Search Mockups, Logos, Design Templates..." autoComplete="off" />
            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-gray-700 rounded-e-lg border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </div>
        {searchResult.products && 
        <div className='search-result'>
        <div className='product_grid'>
                         
            {searchResult.products.length == 0 && <div className='not-found'>Not Found</div>}      
            {searchResult.products.map((item) => {
                return(
                   
                    <div className="product-list" key={item.id}>
                
                    <div onClick={() => handleProductClick()}> 
                        <Link to={`/main/product/${item.id.toString()}`}>
                    <img
                      src={item.images[0]} 
                      alt="Front of mens Basic Tee in black."
                      className="aspect-square rounded-md bg-gray-200 object-cover group-hover:opacity-75"
                    />
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                                {item.title}
                         
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{item.category} - {item.availabilityStatus}</p>
                      </div>
                      <p className="price text-sm font-medium text-gray-900">{item.price}</p>
                    </div>
                    </Link>
                    </div>
                    
                  </div>
                )
            })}
                  </div>

        </div>
        }
    </div>
</form>


    );
}

export default SearchComponent;