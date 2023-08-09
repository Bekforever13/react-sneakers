import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISneakersInitialState } from './Sneakers.types'

const initialState: ISneakersInitialState = {
	search: '',
}

const SneakerSlice = createSlice({
	name: 'SneakerSlice',
	initialState,
	reducers: {
		setSearch(state, { payload }: PayloadAction<string>) {
			state.search = payload
		},
	},
})

export const { reducer, actions } = SneakerSlice
