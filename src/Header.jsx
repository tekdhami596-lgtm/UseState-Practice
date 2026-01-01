import { Link, Outlet } from "react-router-dom";

export default function Header(){
  return(
    <>
    <div className=" bg-amber-400 m-0 p-4 w-100% ">
      <ul className="flex gap-4 text-xl ">
        <li>
          <Link to='/' className="hover:underline hover:text-blue-900">Home</Link>
        </li>
        <li>
          <Link to='basic-counter' className="hover:underline hover:text-blue-900">Basic-Counter</Link>
        </li>
         <li>
          <Link to='show-hide-text'  className="hover:underline hover:text-blue-900">Show-Hide-Text</Link>
        </li>
         <li>
          <Link to='array-tabs'  className="hover:underline hover:text-blue-900">Array Tabs</Link>
        </li>
         <li>
          <Link to='input-text'  className="hover:underline hover:text-blue-900">Input-text</Link>
        </li>
          <li>
          <Link to='todolist'  className="hover:underline hover:text-blue-900">ToDo-list</Link>
        </li>
        
      </ul> 
    </div>
     <Outlet />
    </>
  )
}