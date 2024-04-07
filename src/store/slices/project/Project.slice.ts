import {createSlice} from '@reduxjs/toolkit'
import {v4 as uuidv4} from 'uuid'

export interface ProjectI {
  id: string
  title: string
}

export interface ProjectStateI {
  projects: ProjectI[],
  selectProject: string | null
}

export const getInitProjectState = () => ({
  projects: [
    {id: uuidv4(), title: 'Project 1'},
    {id: uuidv4(), title: 'Project 2'},
    {id: uuidv4(), title: 'Project 3'},
  ],
  selectProject: null
})

const initialState: ProjectStateI = getInitProjectState()

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    updateSelectProject: (state, action) => {
      state.selectProject = action.payload.id
    }
  },
})

export const {updateSelectProject} = projectSlice.actions
export default projectSlice.reducer