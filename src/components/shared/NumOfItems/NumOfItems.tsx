import { TSneaker } from 'src/redux/sneakers/Sneakers.types'
import styles from './NumOfItems.module.scss'

interface propType {
	items: TSneaker[]
}

const NumOfItems: React.FC<propType> = ({ items }) => {

	return (
		<div
			className={styles.root}
			style={{ display: items?.length == 0 ? 'none' : 'block' }}
		>
			{items?.length}
		</div>
	)
}
export { NumOfItems }
