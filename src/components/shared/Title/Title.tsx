import { TTitle } from 'src/@types/Types'
import styles from './Title.module.scss'
import { TitleSearchAndBack } from './TitleSearchAndBack/TitleSearchAndBack'
import { useSelectors } from 'src/hooks/useSelectors'

const Title: React.FC<TTitle> = title => {
	const { search } = useSelectors()
	return (
		<div className={styles.root}>
			<h1>{search ? `Results by '${search}'` : title.title}</h1>
			<TitleSearchAndBack />
		</div>
	)
}
export { Title }
