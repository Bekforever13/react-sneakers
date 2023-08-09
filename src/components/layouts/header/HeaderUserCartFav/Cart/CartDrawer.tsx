import React from 'react'
import { Drawer } from 'antd'
import { useSelectors } from 'src/hooks/useSelectors'
import { useActions } from 'src/hooks/useActions'
import { EmptyCart } from 'src/components/layouts/header/HeaderUserCartFav/Cart/EmptyCart/EmptyCart'
import { CartItems } from './CartItems/CartItems'
import { useGetCartItemsQuery } from 'src/redux/index.endpoints'

const CartDrawer: React.FC = () => {
	const { cartDrawerToggler } = useSelectors()
	const { data } = useGetCartItemsQuery()
	const { toggleCart } = useActions()

	const onClose = () => {
		toggleCart(!cartDrawerToggler)
	}

	return (
		<Drawer
			title='Cart'
			placement='right'
			closable={true}
			onClose={onClose}
			open={cartDrawerToggler}
		>
			{data && data.length > 0 ? <CartItems /> : <EmptyCart />}
		</Drawer>
	)
}

export { CartDrawer }
