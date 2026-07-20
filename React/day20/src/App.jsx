import { useState } from "react"

const App = () => {

  const [ price, setPrice] = useState(2)

  const handleClick = () => {
  const quantity = 10

  setPrice(quantity*price)

  }
  return (
    <>
    <h1>{price}</h1>
    <button onClick={handleClick}>click</button>
    </>
  )
}

export default App