import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../features/task/taskSlice'

const TaskForm = () => {

    const [task, setTask] = useState({
        id: '',
        title: '',
        description: '',
    })
    const dispatch = useDispatch()

    const handleChangue = e => {
        setTask({
            ...task, 
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const id = Math.random().toString(16).slice(2)
        const taskToDispatch = {...task, id}
        dispatch(addTask(taskToDispatch))
    }

  return (
    <form onSubmit={handleSubmit}>
        <input name='title' type="text" placeholder='Título' onChange={handleChangue}></input>        
        <textarea name='description' placeholder='Descripcion'onChange={handleChangue}></textarea>
    </form>
  )
}

export default TaskForm