import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { api } from './index.api'
import { apiFavoriteOrder } from './FavoriteOrders.api'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { reducer as cart } from './cart/Cart.slice'
import { reducer as sneakers } from './sneakers/Sneakers.slice'

const reducers = combineReducers({
	cart,
	sneakers,
	[api.reducerPath]: api.reducer,
	[apiFavoriteOrder.reducerPath]: apiFavoriteOrder.reducer,
})

export const store = configureStore({
	reducer: reducers,
	middleware: gDM => gDM().concat(api.middleware, apiFavoriteOrder.middleware),
})

export type RootState = ReturnType<typeof store.getState>
setupListeners(store.dispatch)
