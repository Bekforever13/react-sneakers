import { TTitle } from 'src/@types/Types'
import styles from './Title.module.scss'
import { TitleSearchAndBack } from './TitleSearchAndBack/TitleSearchAndBack'

const Title: React.FC<TTitle> = title => {
	return (
		<div className={styles.root}>
			<h1>{title.title}</h1>
			<TitleSearchAndBack />
		</div>
	)
}
export { Title }
