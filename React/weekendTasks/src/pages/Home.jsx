import NavBar from "../components/NavBar";
import TaskTile from "../components/TaskTile";

const Home = () => {

    const tasks = [
        {id: 1,title: "Debounced Search",concept: "AbortController",route: "/debounced-search"},
        {id: 2,title: "Infinite Scroll",concept: "Intersection Observer",route: "/infinite-scroll"},
        {id: 3,title: "Multi Step Form",concept: "useReducer",route: "/multi-step-form"},
        {id: 4,title: "Shopping Cart",concept: "Context API • useReducer",route: "/shopping-cart"}
    ];

    return (
        <>
            <NavBar />
            <div className="grid grid-cols-2 gap-4 justify-items-centercenter m-5 p-10">
                {
                tasks.map((task) => (
                <TaskTile key={task.id} task={task}/>))
                }
            </div>
        </>
    );
};

export default Home;