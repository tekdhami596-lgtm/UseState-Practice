import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "./themecontext";

export default function BasicCounter() {
   const {theme, ToggleTheme}=useContext(ThemeContext)
  const [count, setCount] = useState(0);
  return (
    <>
     <div className={`text-center  justify-start min-h-screen w-full ${ theme === "light" ? "text-black bg-white" : "text-white bg-gray-800"}`}>
      <div className="min-h-screen flex flex-col items-center">
     <div> <h1 className=" mb-10 text-2xl">Count : {count}</h1></div>
     <div>
       <button onClick={() => setCount(count + 1)} className="border px-4 py-2 rounded hover:bg-red-600 hover:text-white hover:border-red-600 cursor-pointer mr-4 " >Add</button>
      <button onClick={() => setCount(count - 1)} className="border px-4 py-2 rounded hover:bg-red-600 hover:text-white hover:border-red-600 cursor-pointer mr-4 ">Subtract</button>
      <button onClick={() => setCount(0)} className="border px-4 py-2 rounded hover:bg-red-600 hover:text-white hover:border-red-600 cursor-pointer mr-4 " >Reset</button>
     </div>
      </div>
     </div>
    </>
  );
}
