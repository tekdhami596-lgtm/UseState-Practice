import { useState } from "react"

export default function ThemeHeader(){

  const [dark,setDark]=useState(false)

  const changetodark=()=>{
    setDark(true)
  }
  return(
   <div className="border-3 px-15 py-8">
     <button className="mr-5 cursor-pointer" onClick={changetodark}>Change to dark mode</button>
    {/* <button className="mr-5 cursor-pointer" onClick={changetolight}>Change to light mode</button> */}


    
   </div>

  )
   
  
}

