import { AiOutlineHeart } from 'react-icons/ai'
import styles from './HeaderFavorite.module.scss'
import { Link } from 'react-router-dom'
import { NumOfItems } from 'src/components/shared/NumOfItems/NumOfItems'
import { useGetFavoriteItemsQuery } from 'src/redux/index.endpoints'

const HeaderFavorite: React.FC = () => {
	const {data: favItems} = useGetFavoriteItemsQuery()

	return (
		<Link to='/favorites' className={styles.root}>
			{favItems && <NumOfItems items={favItems} />}
			<AiOutlineHeart />
		</Link>
	)
}
export { HeaderFavorite }
