import { BrowserRouter, Route , Routes} from "react-router-dom"
import Home from "./pages/Home"
import "./App.css"
import MethodPage from "./pages/MethodPage"
function App() {

  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Home />}/>
      <Route path="method/:id" element= {<MethodPage/>}/>
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
