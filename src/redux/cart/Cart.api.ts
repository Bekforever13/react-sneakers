import { api } from '../index.api'
import { TSneaker } from '../sneakers/Sneakers.types'

export const cartApi = api.injectEndpoints({
	endpoints: builder => ({
		getCartItems: builder.query<TSneaker[], void>({
			query: () => ({
				url: '/cart',
			}),
			providesTags: ['sneakers'],
		}),
		setItemToCart: builder.mutation<TSneaker[], TSneaker>({
			query: body => ({
				url: '/cart',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['sneakers'],
		}),
		removeItemFromCart: builder.mutation<any, number>({
			query: id => ({
				url: `/cart/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['sneakers'],
		}),
	}),
})
