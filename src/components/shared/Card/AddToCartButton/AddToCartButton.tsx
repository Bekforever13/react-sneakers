import React from 'react'
import { TSneaker } from 'src/redux/sneakers/Sneakers.types'
import check from '/img/check-1.svg'
import plus from '/img/check-0.svg'
import {
	useGetCartItemsQuery,
	useRemoveItemFromCartMutation,
	useSetItemToCartMutation,
} from 'src/redux/index.endpoints'
import { Spin } from 'antd'

const AddToCartButton: React.FC<TSneaker> = sneaker => {
	const [disabled, setDisabled] = React.useState(false)
	const { data } = useGetCartItemsQuery()
	const [
		removeFromApi,
		{ isLoading: removeLoading, isSuccess: removeSuccess },
	] = useRemoveItemFromCartMutation()
	const [addToCartApi, { isLoading: addLoading, isSuccess: addSuccess }] =
		useSetItemToCartMutation()

	const findItemWithParentId = data?.some(item => item.parentId === sneaker.id)
	const findItemFromCartToDelete = data?.find(
		item => item.slug === sneaker.slug
	)

	const removeFromCart = () => {
		if (!disabled && findItemFromCartToDelete) {
			setDisabled(true)
			removeFromApi(findItemFromCartToDelete.id)
		}
	}

	const addToCart = () => {
		if (!disabled) {
			setDisabled(true)
			addToCartApi({ ...sneaker, parentId: sneaker.id })
		}
	}

	React.useEffect(() => {
		if (removeSuccess || addSuccess) setDisabled(false)
	}, [removeSuccess, addSuccess])

	return (
		<span onClick={!findItemWithParentId ? addToCart : removeFromCart}>
			<Spin spinning={removeLoading || addLoading}>
				<img src={findItemWithParentId ? check : plus} />
			</Spin>
		</span>
	)
}
export { AddToCartButton }
