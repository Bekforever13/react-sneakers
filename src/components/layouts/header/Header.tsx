import { HeaderLogo } from './HeaderLogo/HeaderLogo'
import { HeaderUserCartFav } from './HeaderUserCartFav/HeaderUserCartFav'
import styles from './Header.module.scss'

const Header: React.FC = () => {
	return (
		<div className={styles.root}>
			<HeaderLogo />
			<HeaderUserCartFav />
		</div>
	)
}
export { Header }
