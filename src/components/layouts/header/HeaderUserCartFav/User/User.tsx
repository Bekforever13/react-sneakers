import { BiUserCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { NumOfItems } from 'src/components/shared/NumOfItems/NumOfItems'
import { useGetAllOrdersQuery } from 'src/redux/index.endpoints'
import styles from './User.module.scss'

const User: React.FC = () => {
	const { data } = useGetAllOrdersQuery()
	return (
		<Link to={'/orders'} className={styles.root}>
			<BiUserCircle />
			{data && <NumOfItems items={data} />}
		</Link>
	)
}
export { User }
