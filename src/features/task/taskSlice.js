import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: "1",
        title: "task 1",
        description: "Task 1 description",
        completed: false,
    },
    {
        id: "2",
        title: "task 2",
        description: "Task 2 description",
        completed: true,
    },
]

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action) => {
        state.push(action.payload)
        //en RTK si se puede realizar esta accion
        //que seria similar a:
        //[...state, action.payload]
    },
    editTask: (state, action) => {
      console.log('EDIT', action.payload)
      const {id, title, description} = action.payload
      const taskFound = state.find(task => task.id === id)
      if(taskFound){
        taskFound.title = title
        taskFound.description = description
      }

    },
    deleteTask: (state, action) => {      
      const taskFound = state.find(task => task.id === action.payload)
      if(taskFound){
        state.splice(state.indexOf(taskFound), 1)
      }
    }

  },
})

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, editTask } = taskSlice.actions

export default taskSlice.reducer