import styles from '../Home.module.scss'
import { HomeAllCards } from './HomeAllCards'

const HomeCards: React.FC = () => {
	return (
		<div className={styles.card_items_wrapper}>
			<HomeAllCards />
		</div>
	)
}
export { HomeCards }
