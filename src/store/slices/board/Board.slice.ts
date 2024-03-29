import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

interface TaskI {
	id: number;
	title: string;
}

export interface ColumnI {
	title: string;
	tasks: TaskI[];
}

export interface ColumnsI {
	[x: string]: ColumnI;
}

export interface BoardStateI {
	column: ColumnsI;
}

export const getInitialBoardState = () => {
	return {
		[uuidv4()]: {
			title: "To do",
			tasks: [
				{ id: 1, title: "Task 1" },
				{ id: 2, title: "Task 2" },
				{ id: 3, title: "Task 3" },
			]
		},
		[uuidv4()]: {
			title: "In progress",
			tasks: [
				{ id: 4, title: "Task 4" },
				{ id: 5, title: "Task 5" },
				{ id: 6, title: "Task 6" },
			]
		},
		[uuidv4()]: {
			title: "Done",
			tasks: [
				{ id: 7, title: "Task 7" },
				{ id: 8, title: "Task 8" },
				{ id: 9, title: "Task 9" },
			]
		},
	}
}

const initialState: BoardStateI = {
	column: getInitialBoardState(),
}

export const boardSlice = createSlice({
	name: 'board',
	initialState,
	reducers: {
		updateColumns: (state, action: PayloadAction<ColumnsI>) => {
			state.column = {
				...state.column,
				...action.payload
			}
		}
	},
})

export const { updateColumns } = boardSlice.actions

export default boardSlice.reducer