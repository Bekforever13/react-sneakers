import { CardItem } from 'src/components/shared/Card/CardItem'
import { useSelectors } from 'src/hooks/useSelectors'
import { useGetSearchResultsQuery } from 'src/redux/index.endpoints'
import { TSneaker } from 'src/redux/sneakers/Sneakers.types'

const HomeSearchCards: React.FC = () => {
	const { search } = useSelectors()
	const { data: searchResults } = useGetSearchResultsQuery(search)

	return (
		<>
			{searchResults &&
				searchResults.map((sneaker: TSneaker) => (
					<CardItem key={sneaker.id} {...sneaker} />
				))}
		</>
	)
}
export { HomeSearchCards }
