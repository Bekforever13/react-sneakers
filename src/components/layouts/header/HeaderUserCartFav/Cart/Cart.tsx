import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CartDrawer } from 'src/components/layouts/header/HeaderUserCartFav/Cart/CartDrawer'
import { NumOfItems } from 'src/components/shared/NumOfItems/NumOfItems'
import { useActions } from 'src/hooks/useActions'
import { useGetCartItemsQuery } from 'src/redux/index.endpoints'

const Cart: React.FC = () => {
	const [totalPrice, setTotalPrice] = React.useState<number>()
	const { data } = useGetCartItemsQuery()
	const { toggleCart } = useActions()
	const handleClickCart = () => toggleCart(true)

	React.useEffect(() => {
		async function getSum() {
			let sum = await data?.reduce((prev, cur) => prev + +cur.price, 0)
			setTotalPrice(sum)
		}
		getSum()
	}, [data])

	return (
		<>
			<button style={{ position: 'relative' }} onClick={handleClickCart}>
				{totalPrice && <span>${totalPrice}</span>}
				{data && <NumOfItems items={data} />}
				<AiOutlineShoppingCart />
			</button>
			<CartDrawer />
		</>
	)
}
export { Cart }
