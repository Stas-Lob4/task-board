import { RootState } from '@/store'

export const getColumn = (columnId: string) => (state: RootState) => state.board.columns[columnId]
export const getColumns = (state: RootState) => state.board.columns
