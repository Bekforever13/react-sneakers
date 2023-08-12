import { CardItem } from 'src/components/shared/Card/CardItem'
import { useSelectors } from 'src/hooks/useSelectors'
import { useGetAllSneakersQuery } from 'src/redux/index.endpoints'
import { TSneaker } from 'src/redux/sneakers/Sneakers.types'

const HomeAllCards: React.FC = () => {
	const { search } = useSelectors()
	const { data } = useGetAllSneakersQuery(search)

	return (
		<>
			{data &&
				data.map((sneaker: TSneaker) => (
					<CardItem key={sneaker.id} {...sneaker} />
				))}
		</>
	)
}
export { HomeAllCards }
