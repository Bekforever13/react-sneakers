import { useSelectors } from 'src/hooks/useSelectors'
import { useGetSearchResultsQuery } from 'src/redux/index.endpoints'
import styles from '../Home.module.scss'
import { HomeSearchCards } from './HomeSearchCards'
import { HomeAllCards } from './HomeAllCards'

const HomeCards: React.FC = () => {
	const { search } = useSelectors()
	const { data: searchResults } = useGetSearchResultsQuery(search)

	return (
		<div className={styles.card_items_wrapper}>
			{searchResults && searchResults?.length > 0 ? (
				<HomeSearchCards />
			) : (
				<HomeAllCards />
			)}
		</div>
	)
}
export { HomeCards }
