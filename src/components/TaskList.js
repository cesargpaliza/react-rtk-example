import { useSelector, useDispatch } from "react-redux"
import { deleteTask } from "../features/task/taskSlice"
import { Link } from 'react-router-dom'

const TaskList = () => {

  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <div>
        <header>
            <h1>Task List ({tasks.length})</h1> 
            <Link to='/create-task'>
                Create task
            </Link>            

        </header>
        <div>
            {tasks.map( task => (
                <div key={task.id}>
                    <h3>
                        {`${task.title} - ${task.completed? '✅ ': '❎'}`}
                    </h3>
                    <p>{task.description}</p>
                    <button onClick={() => handleDelete(task.id)}>⌫ Delete</button> 
                    <Link to={`/edit-task/${task.id}`}>
                        <button>✎ Edit</button>
                    </Link>
                </div>
            ))}

        </div>        
    </div>
  )
}

export default TaskList