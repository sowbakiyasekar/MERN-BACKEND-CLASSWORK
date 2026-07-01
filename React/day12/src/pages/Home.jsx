// import { useEffect, useState } from "react"

// const Home = () => {
//     const [data,setData] = useState("welcome react !!")
//     const [count, setCount] = useState(0)
//     console.log("component rendirng..")
//     useEffect(()=>{
//         console.log("usereffect running...")

//         const dataShowing = ()=> {
//         setData("changing")
//     }
//         dataShowing()
//     },[])

//     // const countChange = ()=> {
//     //     setCount(count+1)
//     // }

//     // useEffect(()=> {
//     //     const timer = setInterval(()=>{
//     //         setCount((prev)=>(prev+1))
//     //     },1000)

//     //     // return ()=> {
//     //     //     clearInterval(timer)
//     //     // }
//     // },[])
//   return (
//     <div>
//         <h1>Use Effect</h1>
//         <p>{data}</p>

//         <p>COUNT- {count}</p>
//         {/* <button onClick={countChange}>cliick to change</button> */}
//     </div>
//   )
// }

// export default Home



const Home = () => {
    const fetchData = async()=> {
        const takeData = await fetch("https://dummyjson.com/products")
        console.log(takeData)
        const parsing = await takeData.json()
        console.log(parsing.products)
        
    }
    fetchData()
  return (
    <>
    </>
  )
}

export default Home