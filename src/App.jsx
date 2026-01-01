import {Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './Header'
import BasicCounter from './Basic-Counter'
import ShowHideText from './Show-hide-text'
import InpuTextt from './Input-Text'
import Home from './Home'
import ArrayTabs from './arraytabs'
import TodoList from './Todolist'

function App() {

  return (
    <>
     <Routes>
       <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/basic-counter" element={<BasicCounter />} />
          <Route path="/show-hide-text" element={<ShowHideText />} />
          <Route path="/array-tabs" element={<ArrayTabs />} />
          <Route path="/input-text" element={<InpuTextt />} />
          <Route path="/todolist" element={<TodoList />} />
        </Route>
     </Routes>
    </>
  )
}

export default App
