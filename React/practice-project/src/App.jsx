import Background from "./components/Background"
import NavBar from "./components/NavBar"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import TaskPage from "./pages/TaskPage"
import Dashboard from "./pages/Dashboard"

const App=()=> {

  return (
    <>
    <NavBar/>
    <Background/>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/task/:id" element={<TaskPage />} />
</Routes>
      
  
    </>
  )
}

export default App
