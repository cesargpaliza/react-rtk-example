import { useSelector, useDispatch } from "react-redux"
import { deleteTask } from "../features/task/taskSlice"

const TaskList = () => {

  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <div>
        <h1>Task List</h1> 
        <div>
            {tasks.map( task => (
                <div key={task.id}>
                    <h3>
                        {`${task.title} - ${task.completed? '✅ ': '❎'}`}
                    </h3>
                    <p>{task.description}</p>
                    <button onClick={() => handleDelete(task.id)}>⌫ Delete</button>
                </div>
            ))}

        </div>        
    </div>
  )
}

export default TaskList