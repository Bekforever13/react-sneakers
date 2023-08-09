import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { baseUrl } from 'src/config/url.config'

export const api = createApi({
	reducerPath: 'api/sneakers',
	baseQuery: fetchBaseQuery({
		baseUrl,
	}),
	refetchOnFocus: true,
	tagTypes: ['sneakers'],
	endpoints: build => ({
		default: build.query({
			query: () => 'default',
		}),
	}),
})
