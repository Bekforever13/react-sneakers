import { bindActionCreators } from '@reduxjs/toolkit'
import React from 'react'
import { useDispatch } from 'react-redux'
import { actions as cart } from 'src/redux/cart/Cart.slice'
import { actions as sneakers } from 'src/redux/sneakers/Sneakers.slice'

const rootActions = {
	...cart,
	...sneakers,
}

export const useActions = () => {
	const dispatch = useDispatch()
	return React.useMemo(
		() => bindActionCreators(rootActions, dispatch),
		[dispatch]
	)
}
