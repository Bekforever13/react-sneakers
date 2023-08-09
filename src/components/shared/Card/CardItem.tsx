import styles from './CardItem.module.scss'
import { AddToFavoriteButton } from './AddToFavoriteButton/AddToFavoriteButton'
import { AddToCartButton } from './AddToCartButton/AddToCartButton'
import { TSneaker } from 'src/redux/sneakers/Sneakers.types'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderButton } from './OrderButton/OrderButton'
import { OrderDate } from './OrderDate/OrderDate'

const CardItem: React.FC<TSneaker> = props => {
	const { pathname } = useLocation()
	const { imgUrl, price, title } = props
	const navigate = useNavigate()

	const handleClickSneaker = () => {
		navigate(`/sneaker/${props.id}`)
	}

	return (
		<div className={styles.root}>
			{pathname !== '/orders' && <AddToFavoriteButton {...props} />}
			{pathname === '/orders' && <OrderDate {...props} />}

			<div onClick={handleClickSneaker}>
				<img width='100%' height={180} src={imgUrl} alt='sneakers' />
				<p>{title}</p>
			</div>
			<div className={styles.price_plus}>
				<div className={styles.price}>
					<span>Price:</span>
					<h5>${price}</h5>
				</div>
				{pathname === '/orders' && <OrderButton {...props} />}
				{pathname !== '/orders' && <AddToCartButton {...props} />}
			</div>
		</div>
	)
}
export { CardItem }
