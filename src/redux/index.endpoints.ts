import { cartApi } from './cart/Cart.api'
import { apiFavoriteOrder } from './FavoriteOrders.api'
import { sneakersApi } from './sneakers/Sneakers.api'

export const { useGetAllSneakersQuery, useGetSneakerQuery } = sneakersApi

export const {
	useGetCartItemsQuery,
	useSetItemToCartMutation,
	useRemoveItemFromCartMutation,
} = cartApi

export const {
	useGetFavoriteItemsQuery,
	useRemoveItemFromFavoriteMutation,
	useSetItemToFavoriteMutation,
	useGetAllOrdersQuery,
	useRemoveItemFromOrdersMutation,
	useSetItemToOrdersMutation,
} = apiFavoriteOrder
