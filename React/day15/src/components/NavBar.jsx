const NavBar = () => {
  return (
    <>
    <div className="bg-rose-700 flex justify-between p-5">
        <div className="flex justify-between text-white gap-2">
            <img src="https://www.bing.com/th/id/OIP.9TkS4L7uiaI2FwTXAzUDvAHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2" alt="logo" className="w-10"/>
            <h2 className="m-2">Search & Filter</h2>
        </div>
        <div className="flex justify-end text-white gap-2">
            <h2>Home</h2>
            <h2>Wishlist</h2>
            <h2>Cart</h2>
            <h2>Logout</h2>
        </div>
    </div>
    </>
  )
}

export default NavBar