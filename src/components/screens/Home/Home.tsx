import { Title } from 'src/components/shared/Title/Title'
import styles from './Home.module.scss'
import { HomeCards } from './HomeCards/HomeCards'

const Home: React.FC = () => {
	return (
		<div className={styles.root}>
			<Title title='All sneakers' />
			<HomeCards />
		</div>
	)
}
export { Home }
