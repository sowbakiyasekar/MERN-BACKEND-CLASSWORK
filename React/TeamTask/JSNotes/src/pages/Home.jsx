import NavBar from "../components/NavBar"
import TopicsCard from "../components/TopicsCard"

const Home = () => {
    const topics = [
        {id:1,title:"variables",descrption:"Learn variables in javascript"},
        {id:2,title:"Operators",descrption:"Learn Operators in javascript"},
        {id:3,title:"Functions",descrption:"Learn Functions in javascript"},
        {id:4,title:"Array",descrption:"Learn Array in javascript"},
        {id:5,title:"Ojects",descrption:"Learn Ojects in javascript"},
        {id:6,title:"Dom Application",descrption:"Learn Dom Application in javascript"},
        {id:7,title:"Callback",descrption:"Learn Callback in javascript"},
        {id:8,title:"Async function",descrption:"Learn Async function in javascript"},
    ]
  return (
    <>
    <div className="flex flex-col gap-5">
    <div className=" flex justify-center font-bold text-2xl my-5">
        Javascript Learning 
    </div>

        <div className="grid grid-cols-4 gap-5">
            {topics.map((topic)=> (
                <TopicsCard key={topic.id} title={topic.title} description={topic.descrption}/>
            ))}
        </div>
    </div>
    </>
  )
}

export default Home