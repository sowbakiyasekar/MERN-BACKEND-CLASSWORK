import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import MultiStepForm from "./pages/MultiStepForm"
import SavedNews from "./pages/SavedNews"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/saved" element={<SavedNews/>}/>
          <Route path="/multi-step-form" element={<MultiStepForm/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App