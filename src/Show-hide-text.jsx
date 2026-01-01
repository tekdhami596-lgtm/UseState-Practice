import { useState } from "react"

export default function ShowHideText(){
  const [currentTab,setTab] = useState("all")
  const [show, setshow]=useState(false)

  /* const All=()=>{
    setTab('all')

  }

   const Images=()=>{
    setTab('images')
  }

   const Videos=()=>{
    setTab('videos')
  } */

  return(
    <>


   <div className="text-center mt-10 text-3xl">
     <button onClick={()=>setshow(!show)} className="border px-4 py-2 rounded hover:bg-red-600 hover:text-white hover:border-red-600 cursor-pointer mr-4 ">
      {show?"Hide":"show"}
    </button >
    {show&& <p className="mt-6 font-extrabold">Hello React</p>}
    </div>




    <div className="m-12">
      <ul className="mb-8 flex gap-4 capitalize">
        <li>
          <a onClick={()=>{setTab('all')}} href='#'  className={currentTab == "all" ? "text-red-500":"" }>all</a>
        </li>
        <li>
          <a onClick={()=>{setTab('images')}}  href='#' className={currentTab == "images" ? "text-red-500":"" }>images</a>
        </li>
        <li>
          <a onClick={()=>{setTab('videos')}}  href='#' className={currentTab == "videos" ? "text-red-500":"" }>videos</a>
        </li>
      </ul>
      {  currentTab == "all" && (
        <div>
          <h2>All</h2>
          <p>
            ALL Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            aliquam ea nobis exercitationem animi! Fugit esse culpa distinctio
            labore repudiandae facilis possimus reprehenderit hic quia quos
            quidem veniam, cumque voluptates.
          </p>
        </div>
      )}

      {currentTab == "images" && (
        <div>
          <h2>Images</h2>
          <p>
            Images Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Alias aliquam ea nobis exercitationem animi! Fugit esse culpa
            distinctio labore repudiandae facilis possimus reprehenderit hic
            quia quos quidem veniam, cumque voluptates.
          </p>
        </div>
      )}
      {currentTab == "videos" && (
        <div>
          <h2>Videos</h2>
          <p>
            Videso Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Alias aliquam ea nobis exercitationem animi! Fugit esse culpa
            distinctio labore repudiandae facilis possimus reprehenderit hic
            quia quos quidem veniam, cumque voluptates.
          </p>
        </div>
      )}
    </div> 
    </>
  )
}