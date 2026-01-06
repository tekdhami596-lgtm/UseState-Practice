import { ToastContainer } from "react-toastify";
import "react-loading-skeleton/dist/skeleton.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import BasicCounter from "./Basic-Counter";
import ShowHideText from "./Show-hide-text";
import InpuTextt from "./Input-Text";
import Home from "./Home";
import ArrayTabs from "./arraytabs";
import TodoList from "./Todolist";
import { ThemeContext } from "./themecontext";
import { useState } from "react";
import FetchAPI from "./fetchAPI";
import FetchLoaderAPI from "./fetch-user-with-loader";
import FetchProducts from "./fetch-product";

function App() {
  const [theme, setTheme] = useState("light");
  const ToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, ToggleTheme }}>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/basic-counter" element={<BasicCounter />} />
          <Route path="/show-hide-text" element={<ShowHideText />} />
          <Route path="/array-tabs" element={<ArrayTabs />} />
          <Route path="/input-text" element={<InpuTextt />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/fetchAPI" element={<FetchAPI />} />
          <Route path="/fetchloaderAPI" element={<FetchLoaderAPI />} />
          <Route path="/fetchproduct" element={<FetchProducts />} />
          <Route path="*" element={<div>404 page not found</div>} />
        </Route>
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </ThemeContext.Provider>
  );
}

export default App;
