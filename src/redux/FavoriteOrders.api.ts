import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { urlFavOrd } from 'src/config/url.config'
import { TSneaker } from './sneakers/Sneakers.types'

export const apiFavoriteOrder = createApi({
	reducerPath: 'api/favoriteOrders',
	baseQuery: fetchBaseQuery({
		baseUrl: urlFavOrd,
	}),
	refetchOnFocus: true,
	tagTypes: ['favorites', 'orders'],
	endpoints: builder => ({
		getFavoriteItems: builder.query<TSneaker[], void>({
			query: () => ({
				url: '/favorites',
			}),
			providesTags: ['favorites'],
		}),
		setItemToFavorite: builder.mutation<TSneaker[], TSneaker>({
			query: body => ({
				url: '/favorites',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['favorites'],
		}),
		removeItemFromFavorite: builder.mutation<any, number>({
			query: id => ({
				url: `/favorites/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['favorites'],
		}),
		getAllOrders: builder.query<TSneaker[], void>({
			query: () => ({
				url: '/orders',
			}),
			providesTags: ['orders'],
		}),
		setItemToOrders: builder.mutation<TSneaker[], TSneaker>({
			query: body => ({
				url: '/orders',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['orders'],
		}),
		removeItemFromOrders: builder.mutation<any, number>({
			query: id => ({
				url: `/orders/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['orders'],
		}),
	}),
})
