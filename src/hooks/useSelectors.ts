import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from 'src/redux'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useSelectors = () => {
	const { cart } = useAppSelector(s => s)
	const { sneakers } = useAppSelector(s => s)
	return { ...cart, ...sneakers }
}
