import { api } from '../index.api'
import { TSneaker } from './Sneakers.types'

export const sneakersApi = api.injectEndpoints({
	endpoints: builder => ({
		getAllSneakers: builder.query<TSneaker[], void>({
			query: () => ({
				url: '/items',
			}),
		}),
		getSearchResults: builder.query<TSneaker[], string>({
			query: search => ({
				url: `/items?search=${search}`,
			}),
		}),
		getSneaker: builder.query<TSneaker, string>({
			query: id => ({
				url: `/items/${id}`,
			}),
		}),
	}),
})
