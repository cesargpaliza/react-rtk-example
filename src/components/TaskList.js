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
    <div className="w-4/6">
        <header className="flex justify-between items-center py-4">
            <h1 className="font-bold text-xl">Task List ({tasks.length})</h1> 
            <Link to='/create-task' className="bg-indigo-600 px-2 py-1 rounded-md text-sm">
                📝 Create task
            </Link>            

        </header>
        <div className="grid grid-cols-3 gap-4"> 
            {tasks.map( task => (
                <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
                    <div className="px-3 pt-2">
                        <h3 className="font-bold">{`${task.completed? '✅ ': '❎'} ${task.title}`}</h3>
                        <p className="text-base">{task.description}</p>
                    </div>
                    <div className="px-3 pt-2">
                        <button 
                            className="bg-red-400 px-2 py-1 text-md rounded-md"
                            onClick={() => handleDelete(task.id)}>⌫ Delete</button> 
                        <Link to={`/edit-task/${task.id}`}>
                            <button
                                className="bg-blue-400 px-2 py-1 text-md rounded-md mx-2"
                            >✎ Edit</button>
                        </Link>
                    </div>
                </div>
            ))}

        </div>        
    </div>
  )
}

export default TaskList