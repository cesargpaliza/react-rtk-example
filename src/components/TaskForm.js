import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, editTask } from '../features/task/taskSlice'
import { useNavigate, useParams } from 'react-router-dom'

 
const TaskForm = () => {

    const [task, setTask] = useState({
        id: '',
        title: '',
        description: '',
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const tasks = useSelector(state => state.tasks)

    const handleChangue = e => {
        setTask({
            ...task, 
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if(params.id){
            dispatch(editTask(task))
            navigate('/')
        }else{
            const id = Math.random().toString(16).slice(2)
            const taskToDispatch = {...task, id}
            dispatch(addTask(taskToDispatch))
            navigate('/')
        }

    }
  
  useEffect(() => {
    console.log('tasks',tasks)
    if(params.id){
        //si encuentro un parametro id en la url
        setTask(tasks.find( task => task.id === params.id))
        dispatch(editTask(task))
        
    }

  }, [])
  

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
        <label htmlFor='title' className='block font-bold'>Title</label>
        <input 
            name='title' 
            type="text" 
            placeholder='Título' 
            onChange={handleChangue} 
            value={task.title}
            className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        />
        <label htmlFor='description' className='block font-bold'>Description</label>
        <textarea 
            name='description' 
            placeholder='Descripcion'
            onChange={handleChangue} 
            value={task.description}
            className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        ></textarea> 
        <button className="bg-blue-400 hover:bg-blue-500 px-2 py-1 text-md rounded-md">Create</button>
    </form>
  )
}

export default TaskForm