import { ThemeContext } from "./themecontext";
import { useContext } from "react";

export default function Home() {
  const {theme, ToggleTheme}=useContext(ThemeContext)

  return (
    <>
      <div className={`text-center flex items-center justify-center min-h-screen w-full   ${ theme === "light" ? "text-black bg-slate-50" : "text-white bg-gray-800"}`}>
       <div>
         <h1  className="text-4xl md:text-5xl font-extrabold tracking-wide">React Js practice</h1>
        <h2 className="mt-4 text-xl md:text-2xl  font-medium">Tek Dhami</h2>
       </div>
      </div>
    </>
  );
}
