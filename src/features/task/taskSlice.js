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
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTask } = taskSlice.actions

export default taskSlice.reducer