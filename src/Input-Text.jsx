import { useState } from "react";
import { ThemeContext } from "./themecontext";
import { useContext } from "react";


export default function InpuTextt() {
    const { theme, ToggleTheme } = useContext(ThemeContext);
  const [text, setText] = useState("");
  const [user, setUser] = useState([{ name: "", city: "" }]);
  return (
    <>
      <div   className={`text-center flex flex-col items-center justify-start min-h-screen w-full   ${
          theme === "light"
            ? "text-black bg-slate-50"
            : "text-white bg-gray-800"
        }`}>
        <div className="text-center mt-10">
          <label htmlFor="text">Enter Something : </label>
          <input
            type="text"
            id="text"
            value={text}
            placeholder="Type something"
            onChange={(e) => setText(e.target.value)}
            className="border-2 h-10 mb-6"
          />
          <p className="text-3xl">
            You types :<b> {text}</b>
          </p>
        </div>

        <div>
          <input
            className="border-2 px-10 py-3 mt-10 ml-15 mb-15"
            type="text"
            placeholder="Enter name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <input
            className="border-2 px-10 py-3 mt-10 ml-15 mb-15"
            type="text"
            placeholder="Enter City"
            value={user.city}
            onChange={(e) => setUser({ ...user, city: e.target.value })}
          />

          {
            <ul className="text-center mt-10">
              <li>Name : {user.name}</li>
              <li>City: {user.city}</li>
            </ul>
          }
        </div>
      </div>
    </>
  );
}
