import React from 'react'
import { IconContext } from 'react-icons/lib'
import { UiButton } from 'src/components/ui/button/UiButton'
import { useCustomGetId } from 'src/hooks/useCustomGetId'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import {
	useGetFavoriteItemsQuery,
	useRemoveItemFromFavoriteMutation,
	useSetItemToFavoriteMutation,
} from 'src/redux/index.endpoints'

const SneakerAddToFavoriteButton: React.FC = () => {
	const [disabled, setDisabled] = React.useState(false)
	const [addToFavorite, { isSuccess: addSuccess }] =
		useSetItemToFavoriteMutation()
	const [removeFromFavorite, { isSuccess: removeSuccess }] =
		useRemoveItemFromFavoriteMutation()
	const sneaker = useCustomGetId()
	const { data: favItems } = useGetFavoriteItemsQuery()
	const isFav = favItems?.find(item => item.isFavorite === sneaker?.id)
	const findItemFromFavoriteToDelete = favItems?.find(
		item => item.slug === sneaker?.slug
	)

	const removeFromFav = () => {
		if (!disabled && findItemFromFavoriteToDelete) {
			setDisabled(true)
			removeFromFavorite(findItemFromFavoriteToDelete.id)
		}
	}

	const addToFav = () => {
		if (!disabled && sneaker) {
			setDisabled(true)
			addToFavorite({ ...sneaker, isFavorite: sneaker.id })
		}
	}

	React.useEffect(() => {
		if (removeSuccess || addSuccess) setDisabled(false)
	}, [removeSuccess, addSuccess])

	return (
		<div
			style={{ fontSize: '30px', cursor: 'pointer' }}
			onClick={!isFav ? addToFav : removeFromFav}
		>
			{findItemFromFavoriteToDelete ? (
				<IconContext.Provider value={{ color: 'red' }}>
					<AiFillHeart />
				</IconContext.Provider>
			) : (
				<IconContext.Provider value={{ color: 'red' }}>
					<AiOutlineHeart />
				</IconContext.Provider>
			)}
		</div>
	)
}
export { SneakerAddToFavoriteButton }
