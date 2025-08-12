import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 class='text-blue-400 text-3xl font-bold'> BackGround Changer</h1>
    <Header />
     
       
    </>
  )
}

export default App
