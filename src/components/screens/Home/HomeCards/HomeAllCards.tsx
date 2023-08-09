import { CardItem } from 'src/components/shared/Card/CardItem'
import { useGetAllSneakersQuery } from 'src/redux/index.endpoints'
import { TSneaker } from 'src/redux/sneakers/Sneakers.types'

const HomeAllCards: React.FC = () => {
	const { data } = useGetAllSneakersQuery()

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
