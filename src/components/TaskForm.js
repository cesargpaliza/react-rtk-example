// eslint-disable-next-line
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
    <form onSubmit={handleSubmit}>
        <input name='title' type="text" placeholder='Título' onChange={handleChangue} value={task.title}></input>        
        <textarea name='description' placeholder='Descripcion'onChange={handleChangue} value={task.description}></textarea>
        <button>Create</button>
    </form>
  )
}

export default TaskForm