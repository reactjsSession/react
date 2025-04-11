import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ModalBox from './modalbox';
import MyComponent from './useEffectHooks/mycomponent';
 
 
 
 function App() {
const  [count, setCount]  = useState(100);
 
const handleEvent =() => {
  setCount(count + 1)
}


  return (
    <>
    <MyComponent/>
     </>
  )
}

export default App
