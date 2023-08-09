import logo from '/img/logo.png'
import styles from './HeaderLogo.module.scss'
import { Link } from 'react-router-dom'

const HeaderLogo: React.FC = () => {
	return (
		<Link to='/' className={styles.root}>
			<img src={logo} />
			<div>
				<h2>REACT SNEAKERS</h2>
				<span>The best sneakers shop</span>
			</div>
		</Link>
	)
}
export { HeaderLogo }
