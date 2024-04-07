import {configureStore} from '@reduxjs/toolkit'
import boardReducer from './slices/board/Board.slice'
import projectReducer from './slices/project/Project.slice.ts'

export const store = configureStore({
  reducer: {
    board: boardReducer,
    project: projectReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
