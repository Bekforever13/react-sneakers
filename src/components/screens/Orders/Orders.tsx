import { CardItem } from 'src/components/shared/Card/CardItem'
import { Title } from 'src/components/shared/Title/Title'
import styles from './Orders.module.scss'
import { useGetAllOrdersQuery } from 'src/redux/index.endpoints'

const Orders: React.FC = () => {
	const { data: orders } = useGetAllOrdersQuery()
	return (
		<div>
			<Title title='My Orders' />
			{!orders?.length ? (
				<h2 className={styles.empty_h2}>You don't have any orders</h2>
			) : (
				<div className={styles.wrapper}>
					{orders?.map(item => {
						return <CardItem key={item.id} {...item} />
					})}
				</div>
			)}
		</div>
	)
}
export { Orders }
