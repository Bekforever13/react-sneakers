import styles from './Sneaker.module.scss'
import { SneakerAddToFavoriteButton } from './SneakerAddToFavoriteButton/SneakerAddToFavoriteButton'
import { SneakerAddToCartButton } from './SneakerAddToCartButton/SneakerAddToCartButton'

const SneakerButtons: React.FC = () => {
	return (
		<div className={styles.buttons}>
			<SneakerAddToFavoriteButton />
			<SneakerAddToCartButton />
		</div>
	)
}
export { SneakerButtons }
