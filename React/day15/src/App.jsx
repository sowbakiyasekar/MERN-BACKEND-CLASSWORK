import { useEffect, useState } from "react"
import NavBar from "./components/NavBar"
import ProductCard from "./components/ProductCard"

const App = () => {
  const [uniquecat, setUnicat] = useState([])
  const[allProducts,setProducts] = useState([])
  const[cat,setCat] = useState("")
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("")

  const responseData = async()=> {
    try {
      const getData = await fetch('https://dummyjson.com/products')

      const changedData =await getData.json()
      // console.log(changedData.products)

      setProducts(changedData.products)
      const uniqueDatas = [...new Set(changedData.products.map((e)=>e.category))]

      // console.log(uniqueDatas)

      setUnicat(uniqueDatas)
      
    }

    catch(error) {
      alert('error',error)
    }
  }




  useEffect(()=> {
    responseData()
  },[]) 

  let filteredData = cat ? allProducts.filter((e)=>e.category===cat):allProducts

  const handleChange = (e) => {
    setCat(e.target.value)
  }
 
  const handleSort = (e) => {
    setSort(e.target.value)
  }

  
  // const sortedData = [...filteredData]

  if(sort ==="asc"){
    filteredData.sort((a,b)=>a.price-b.price)
  }
  if(sort ==="desc"){
    filteredData.sort((a,b)=>b.price-a.price)
  }

  const handleSearch = (e)=> {
    setSearch(e.target.value)
  }
  if(search) {
    filteredData = filteredData.filter((e)=>e.title.toLowerCase().includes(search))
  }
    return (
      <>
      <NavBar/>
      <div className="flex justify-between">
        <input type="text" placeholder="Type search..." onChange={handleSearch}/>
        <select onChange={handleChange}>
          <option value="">Select category</option>
          {uniquecat.map((e,i)=> (
            <option value={e} key={i+1}>{e}</option>
          ))}
        </select>
          <select onChange={handleSort}>
            <option value="">chooseOne</option>
            <option value="desc">High to Low</option>
            <option value="asc">Low to High</option>
          </select>
        </div>
      <div className="grid grid-cols-3 gap-5">
        {filteredData.map((e,i)=>(
          <ProductCard data={e} key={i+1}/>
        ))}
      </div>
      </>
  )
}

export default App