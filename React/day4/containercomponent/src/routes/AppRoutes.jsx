import { Routes } from "react-router-dom"
import ArrayofArray from "../components/ArrayofArray"

const AppRoutes = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/arrofarr" element={<ArrayofArray/>}/>
        </Routes>
        </>
    )
}
export default AppRoutes