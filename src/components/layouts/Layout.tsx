import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'

import { Header } from './header/Header'

const Layout: React.FC = () => {
	return (
		<div className={styles.root}>
			<Header />
			<Outlet />
		</div>
	)
}
export { Layout }
