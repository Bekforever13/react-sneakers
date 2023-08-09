import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CartDrawer } from 'src/components/layouts/header/HeaderUserCartFav/Cart/CartDrawer'
import { NumOfItems } from 'src/components/shared/NumOfItems/NumOfItems'
import { useActions } from 'src/hooks/useActions'
import { useGetCartItemsQuery } from 'src/redux/index.endpoints'

const Cart: React.FC = () => {
	const { data } = useGetCartItemsQuery()
	const { toggleCart } = useActions()
	const handleClickCart = () => toggleCart(true)

	return (
		<>
			<button style={{ position: 'relative' }} onClick={handleClickCart}>
				{data && <NumOfItems items={data} />}
				<AiOutlineShoppingCart />
			</button>
			<CartDrawer />
		</>
	)
}
export { Cart }
