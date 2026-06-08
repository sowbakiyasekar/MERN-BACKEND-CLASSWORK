import { BrowserRouter, Route , Routes} from "react-router-dom"
import Home from "./assets/pages/Home"
import Push from "./assets/pages/Push"
function App() {

  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Home />}/>
      <Route path="/push" element= {<Push/>}/>
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
