import React from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'
import styles from './AddToFavoriteButton.module.scss'
import { TSneaker } from 'src/redux/sneakers/Sneakers.types'
import {
	useGetFavoriteItemsQuery,
	useRemoveItemFromFavoriteMutation,
	useSetItemToFavoriteMutation,
} from 'src/redux/index.endpoints'

const AddToFavoriteButton: React.FC<TSneaker> = sneaker => {
	const [disabled, setDisabled] = React.useState(false)
	const { data: favItems } = useGetFavoriteItemsQuery()
	const [addToFavorite, { isSuccess: addSuccess }] =
		useSetItemToFavoriteMutation()
	const [removeFromFavorite, { isSuccess: removeSuccess }] =
		useRemoveItemFromFavoriteMutation()

	const findItemFromFavoriteToDelete = favItems?.find(
		item => item.slug === sneaker.slug
	)

	const removeFromFav = () => {
		if (!disabled && findItemFromFavoriteToDelete) {
			setDisabled(true)
			removeFromFavorite(findItemFromFavoriteToDelete.id)
		}
	}

	const addToFav = () => {
		if (!disabled) {
			setDisabled(true)
			addToFavorite({ ...sneaker, isFavorite: sneaker.id })
		}
	}

	React.useEffect(() => {
		if (removeSuccess || addSuccess) setDisabled(false)
	}, [removeSuccess, addSuccess])

	return (
		<div
			onClick={findItemFromFavoriteToDelete ? removeFromFav : addToFav}
			className={styles.favourite}
		>
			<IconContext.Provider value={{ color: 'red' }}>
				{findItemFromFavoriteToDelete ? <AiFillHeart /> : <AiOutlineHeart />}
			</IconContext.Provider>
		</div>
	)
}
export { AddToFavoriteButton }
