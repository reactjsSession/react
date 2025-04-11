import { useState } from "react"
import ChildComponet from "../child/child"

function ParentComponent() {
     const [data,setData] = useState("Parent component data")
     const [childData,setChildData] = useState("Parent component data 2");

     const ongetDataChild = (childData)=>{
        setChildData(childData)
     }
    return(
        <>
        <h1> Parent Component : {childData}</h1>
        <ChildComponet parentData={data}  sendData={ongetDataChild} />
        </>
    )
}

export default ParentComponent