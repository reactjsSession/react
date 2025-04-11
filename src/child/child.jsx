function ChildComponet({parentData,sendData}) {
    parentData = "hey,im not from parent"
    const sendataToParent = () =>{
        sendData("This is the child Data")
     }
    return(
        <>
        <h2>Child Component {parentData}</h2>

        <button onClick={sendataToParent}>Child Button</button>
        </>
    )
}

export default ChildComponet