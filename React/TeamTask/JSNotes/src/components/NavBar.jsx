import { Link } from "react-router-dom"
import jsLogo from "../assets/jsicon.png"
const NavBar = () => {
  return (
    <>
    <div className="flex justify-between bg-gray-800 text-white sticky top-0 px-5 py-2">
        <div className="flex justify-between gap-5">
            <img src={jsLogo}/>
            <h1 className="text-xl m-2.5 font-serif text-yellow-300">JS Notes</h1>
        </div>
        <div className="flex m-3 justify-between gap-5">
            <Link to="/" className="hover:text-yellow-300">Home</Link>
            <Link to="" className="hover:text-yellow-300">Topics</Link>

        </div>
    </div>
    </>
  )
}

export default NavBar