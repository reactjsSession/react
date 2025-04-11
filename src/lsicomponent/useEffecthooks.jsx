import { useEffect, useState } from "react";

function MyEcthooksExample() {
    const [count, setCount] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [data, setData] = useState('');
    const [selectUser,setSelectedUser] = useState(null)

    useEffect(() => {
        console.log("use Effect triggered");
        const controller = new AbortController();
        const signal = controller.signal;
        console.log(signal)

        //   fetch("https://jsonplaceholder.typicode.com/users")
        //   .then((res) => res.json())
        //   .then((res) => {
        //     console.log(res)
        //   })

        fetchData(signal);

        return () => {
            controller.abort();
            console.log("Aboard call")
        }
    }, []);

    const viewItemHandler = () => {
      console.log(data)
    }
    const fetchData = async (signal) => {
        console.log("response call");

        try {
            const responseData = await fetch("https://jsonplaceholder.typicode.com/users",{signal});
            const respon = await responseData.json();
            setData(respon)
        } catch (err) {
            console.log(err)
        }

    }

    const handleEvent = () => {
        setCount((pre) => {
            return pre + 1
        })
    }


    console.log("componenr re render")

    return (
        <div>
            <p> State {count}</p>
            <button onClick={handleEvent}>count</button>

            <table>
            <thead>

                <tr>
                    <th>Id</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                     {data && data.map((item) =>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td><button onClick={()=>setSelectedUser(item)} >view</button></td>

                            </tr>
                        ))}
                    </tbody>
             </table>
             {
                selectUser && (
                    <div className="modal-box"> 
                    <div>{selectUser.name}</div>
                   <div>{selectUser.email}</div>
                 </div>
                )
             }
        </div>

    )
}

export default MyEcthooksExample