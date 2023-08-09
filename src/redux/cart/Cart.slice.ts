import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartInitialState } from './Cart.types'

const initialState: ICartInitialState = {
	cartDrawerToggler: false,
}

const cartSlice = createSlice({
	name: 'cartSlice',
	initialState,
	reducers: {
		toggleCart(state, { payload }: PayloadAction<boolean>) {
			state.cartDrawerToggler = payload
		},
	},
})

export const { reducer, actions } = cartSlice
