import React from 'react'
import {useState} from "react"
function Header() {
    const [click,setClick]=useState("olive");
return (
    <div className='w-full h-screen duration-100'  style={{backgroundColor: click}}>
    <div class="flex h-80 w-80 ">
            <img onClick={() => setClick("pink")} src="pexels-jonaskakaroto-736230.jpg" 
                alt="Pink rose "></img>
            <img  onClick={()=> setClick("purple")}src="pexels-pixabay-36753.jpg" 
                alt="Purple flower "></img>
            <img onClick={()=> setClick("red")}src="pexels-picjumbo-com-55570-196664.jpg" 
                alt="Red flower "></img>
            <img  onClick={()=> setClick("black")}src="pexels-eye4dtail-614874.jpg" 
                alt="Black flower "></img>
            <img  onClick={()=> setClick("green")}src="pexels-karolina-grabowska-4467139.jpg" 
                alt="Green flower "></img>
    </div>
    </div>
)
}

export default Header