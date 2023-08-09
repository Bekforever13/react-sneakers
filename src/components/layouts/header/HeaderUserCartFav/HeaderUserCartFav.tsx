import styles from './HeaderUserCartFav.module.scss'
import { HeaderFavorite } from './HeaderFavorite/HeaderFavorite'
import { Cart } from './Cart/Cart'
import { User } from './User/User'

const HeaderUserCartFav: React.FC = () => {
	return (
		<div className={styles.root}>
			<Cart />
			<HeaderFavorite />
			<User />
		</div>
	)
}
export { HeaderUserCartFav }
