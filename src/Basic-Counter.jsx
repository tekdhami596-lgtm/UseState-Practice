import { useState } from "react";

export default function BasicCounter() {
  const [count, setCount] = useState(0);
  return (
    <>
     <div className="text-center">
       <h1 className="mt-7 mb-5 text-2xl">Count : {count}</h1>
      <button onClick={() => setCount(count + 1)} className="border px-4 py-2 rounded hover:bg-red-600 hover:text-white hover:border-red-600 cursor-pointer mr-4 " >Add</button>
      <button onClick={() => setCount(count - 1)} className="border px-4 py-2 rounded hover:bg-red-600 hover:text-white hover:border-red-600 cursor-pointer mr-4 ">Subtract</button>
      <button onClick={() => setCount(0)} className="border px-4 py-2 rounded hover:bg-red-600 hover:text-white hover:border-red-600 cursor-pointer mr-4 " >Reset</button>
     </div>
    </>
  );
}
