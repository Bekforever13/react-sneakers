import { Spin } from 'antd'
import React from 'react'
import { UiButton } from 'src/components/ui/button/UiButton'
import check from '/img/check-1.svg'
import plus from '/img/check-0.svg'
import { useCustomGetId } from 'src/hooks/useCustomGetId'
import {
	useGetCartItemsQuery,
	useRemoveItemFromCartMutation,
	useSetItemToCartMutation,
} from 'src/redux/index.endpoints'

const SneakerAddToCartButton: React.FC = () => {
	const [disabled, setDisabled] = React.useState(false)
	const [
		removeFromApi,
		{ isLoading: removeLoading, isSuccess: removeSuccess },
	] = useRemoveItemFromCartMutation()
	const [addToCartApi, { isLoading: addLoading, isSuccess: addSuccess }] =
		useSetItemToCartMutation()

	const sneaker = useCustomGetId()
	const { data: cartItems } = useGetCartItemsQuery()
	const isCart = cartItems?.some(item => item.parentId === sneaker?.id)
	const findItemFromCartToDelete = cartItems?.find(
		item => item.slug === sneaker?.slug
	)

	const removeFromCart = () => {
		if (!disabled && findItemFromCartToDelete) {
			setDisabled(true)
			removeFromApi(findItemFromCartToDelete.id)
		}
	}

	React.useEffect(() => {
		if (removeSuccess || addSuccess) setDisabled(false)
	}, [removeSuccess, addSuccess])

	const addToCart = () => {
		if (!disabled && sneaker) {
			setDisabled(true)
			addToCartApi({ ...sneaker, parentId: sneaker.id })
		}
	}

	return (
		<div
			style={{ cursor: 'pointer' }}
			onClick={!isCart ? addToCart : removeFromCart}
		>
			<Spin spinning={removeLoading || addLoading}>
				<img src={isCart ? check : plus} />
			</Spin>
		</div>
	)
}
export { SneakerAddToCartButton }
