import { UiButton } from 'src/components/ui/button/UiButton'
import { useCustomGetId } from 'src/hooks/useCustomGetId'
import {
	useGetCartItemsQuery,
	useRemoveItemFromCartMutation,
	useSetItemToCartMutation,
} from 'src/redux/index.endpoints'

const SneakerAddToCartButton: React.FC = () => {
	const [removeFromApi] = useRemoveItemFromCartMutation()
	const [setItemToCart] = useSetItemToCartMutation()
	const data = useCustomGetId()
	const { data: cartItems } = useGetCartItemsQuery()
	const isCart = cartItems && cartItems.find(item => item.id === data?.id)

	const handleClickCart = () => {
		if (data && !isCart) {
			setItemToCart(data)
		} else if (data && isCart) {
			removeFromApi(data.id)
		}
	}
	return (
		<UiButton onClick={handleClickCart} type='primary' size='large'>
			{isCart ? 'REMOVE FROM CART' : 'TO CART'}
		</UiButton>
	)
}
export { SneakerAddToCartButton }
