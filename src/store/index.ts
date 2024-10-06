import { boardReducer } from '@/store/slices/board/board.slice'
import { projectReducer } from '@/store/slices/project/project.slice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    board: boardReducer,
    project: projectReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
