import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

interface UserI {
  fullName: string
  icon: string
  id: string
}

interface TagI {
  color: string
  name: string
}

export interface TaskI {
  assignee?: UserI
  id: number
  tags?: TagI[]
  title: string
}

export interface ColumnI {
  tasks: TaskI[]
  title: string
}

export interface ColumnsI {
  [x: string]: ColumnI
}

export interface BoardStateI {
  columns: ColumnsI
}

export const getInitBoardData = () => {
  return {
    [uuidv4()]: {
      tasks: [
        { id: 1, title: 'Task 1' },
        { id: 2, title: 'Task 2' },
        { id: 3, title: 'Task 3' },
      ],
      title: 'To do',
    },
    [uuidv4()]: {
      tasks: [
        { id: 4, title: 'Task 4' },
        { id: 5, title: 'Task 5' },
        { id: 6, title: 'Task 6' },
      ],
      title: 'In progress',
    },
    [uuidv4()]: {
      tasks: [
        { id: 7, title: 'Task 7' },
        { id: 8, title: 'Task 8' },
        { id: 9, title: 'Task 9' },
      ],
      title: 'Done',
    },
  }
}

const initialState: BoardStateI = {
  columns: getInitBoardData(),
}

export const boardSlice = createSlice({
  initialState,
  name: 'counter',
  reducers: {
    updateColumns: (state, action: PayloadAction<Record<string, ColumnI>>) => {
      state.columns = {
        ...state.columns,
        ...action.payload,
      }
    },
  },
})

export const { updateColumns } = boardSlice.actions
export const boardReducer = boardSlice.reducer
