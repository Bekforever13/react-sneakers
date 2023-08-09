import React from 'react'
import styles from './NotFound.module.scss'
import { useNavigate } from 'react-router-dom'
import { UiButton } from 'src/components/ui/button/UiButton'

const NotFound: React.FC = () => {
	const navigate = useNavigate()
	const navigateToHomePage = () => navigate('/', { replace: true })

	return (
		<div className={styles.root}>
			<h1>Whoops!</h1>
			<span>404. Page is not found</span>
			<UiButton size='large' type='primary' onClick={navigateToHomePage}>Back to home</UiButton>
		</div>
	)
}

export { NotFound }
