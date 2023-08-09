import { UiButton } from 'src/components/ui/button/UiButton'
import { useCustomGetId } from 'src/hooks/useCustomGetId'
import {
	useGetFavoriteItemsQuery,
	useRemoveItemFromFavoriteMutation,
	useSetItemToFavoriteMutation,
} from 'src/redux/index.endpoints'

const SneakerAddToFavoriteButton: React.FC = () => {
	const [addToFavorite] = useSetItemToFavoriteMutation()
	const [removeFromFavorite] = useRemoveItemFromFavoriteMutation()
	const data = useCustomGetId()
	const { data: favItems } = useGetFavoriteItemsQuery()
	const isFav = favItems?.find(item => item.isFavorite === data?.id)

	const handleClickFav = () => {
		if (data && !isFav) {
			addToFavorite(data)
		} else if (isFav && data) {
			removeFromFavorite(data.id)
		}
	}

	return (
		<UiButton onClick={handleClickFav} type='primary' danger size='large'>
			{isFav ? 'REMOVE FROM FAVORITE' : 'TO FAVORITE'}
		</UiButton>
	)
}
export { SneakerAddToFavoriteButton }
