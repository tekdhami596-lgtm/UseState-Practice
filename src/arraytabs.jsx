import { useState } from "react";

export default function ArrayTabs() {
  const [currentTab, setTab] = useState("all");


  /* const All=()=>{
    setTab('all')

  }

   const Images=()=>{
    setTab('images')
  }

   const Videos=()=>{
    setTab('videos')
  } */

  const Tabs = ["all", "images", "videos"];

  

  return (
    <>
      <div className="m-12">
        <ul className="mb-8 flex gap-4 capitalize">
          {Tabs.map((el) => {
            return (
              <li>
                <a
                  onClick={() => {
                    setTab(el);
                  }}
                  href="#"
                  className="text-red-500"
                >
                  {el}
                </a>
              </li>
            );
          })}
        </ul>
        {currentTab == "all" && (
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
  );
}
