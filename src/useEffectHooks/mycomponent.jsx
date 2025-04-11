import { useEffect, useState } from "react";

const BASE_URL = 'https://jsonplaceholder.typicode.com';
// We can use multi useEffect hooks in a component
//No array
// useEffect(()=>{})   // Runs after every render

// useEffect(()=>{},[]) // Runs once after render

// useEffect(()=>{},[count]) // Runs if any of the dependencies state change

// useEffect(()=>{

//  return ()=>{
//     // clean up memory leak
//  }  

// },[])



function MyComponent() {

    const [data, setData] = useState([])
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);
    const [isLoader, setLoader] = useState(false);
    const [searchParam, setSearchParam] = useState('');
    const [filterData, setFilterData] = useState([])

    useEffect(() => {

        // function fetchData(){
        //     fetch(`${BASE_URL}/comments?postId=${page}`)
        //     .then((res) => res.json())
        //     .then((res) => {
        //         setData(res)
        //         console.log(res);
        //      })
        // }

        // fetchData()
        const controller = new AbortController();
        const signal = controller.signal;

        const advanceFetchData = async () => {
            setLoader(true)
            try {
                const response = await fetch(`${BASE_URL}/comments?postId=${page}`)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                  }
          
                const res = await response.json();
                console.log(res)
                setData(res)
                setLoader(true)
            } catch (err) {
                setError(err.message || 'Something went wrong');
            } finally {
                setLoader(false)
            }
        }


        advanceFetchData()
        return () => {
            controller.abort();
            console.log("Clean up the API")
        }
    }, [page])


    useEffect(() => {

        const filter = Array.isArray(data) ? data.filter((item, index, self) => {
            return item.email.toLowerCase().includes(searchParam.toLowerCase())
        }) : [];
        setFilterData(filter)
        console.log(filter)
    }, [data, searchParam])


    const nextPageHandler = () => {
        setPage(page + 1)
    }


    const inputHandler = (e) => {
        const value = e.target.value
        setSearchParam(value)

    }
 
    return (
        <>
      
            <button onClick={nextPageHandler}>Next page {page}</button>
            <input value={searchParam} onChange={inputHandler} /> <button>Search</button>
            {isLoader && <div>Loading....</div>}
            {error && <div>Somthing went wrong, Please try again</div>}
            {!isLoader && <ul className="ul_container">
                {(!error && filterData.length == 0) && <div> No Data Found</div>}
                {filterData && filterData.map((item, index) => {
                    return (
                        <li key={item.id}> {item.id} - {item.email} - {item.name}</li>
                    )
                })}
            </ul>
            }
        </>
    )

}

export default MyComponent;