import NavBar from "../components/NavBar"
import TopicsCard from "../components/TopicsCard"

const Home = () => {
    const topics = [
        {id:1,title:"variables",descrption:"LEarn variables in javascript"},
        {id:2,title:"variables",descrption:"LEarn variables in javascript"},
        {id:3,title:"variables",descrption:"LEarn variables in javascript"},
        {id:4,title:"variables",descrption:"LEarn variables in javascript"},
        {id:5,title:"variables",descrption:"LEarn variables in javascript"},
        {id:6,title:"variables",descrption:"LEarn variables in javascript"},
        {id:7,title:"variables",descrption:"LEarn variables in javascript"},
        {id:8,title:"variables",descrption:"LEarn variables in javascript"},
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