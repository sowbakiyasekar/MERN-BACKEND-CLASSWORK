import { Navigate } from "react-router-dom"

const TaskTile = ({task}) => {
  return (
        <div className="bg-amber-500 flex-col justify-items-center m-2">
            <h2>Task {task.id}</h2>
            <h3>{task.title}</h3>
            <p>{task.concept}</p>
            <div><button className="p-2 bg-amber-900 rounded-2xl" onClick={() => Navigate(task.route)}>Open</button></div>

        </div>
  )
}

export default TaskTile


