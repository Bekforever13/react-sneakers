import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layouts/Layout'
import { routes } from './components/routes'
import styles from './assets/styles/App.module.scss'
import './assets/styles/base/_reset.scss'
import { NotFound } from 'src/components/screens/NotFound/NotFound'

function App() {
	return (
		<div className={styles.app}>
			<Routes>
				<Route path='/' element={<Layout />}>
					{routes.map(({ path, element }) => (
						<Route key={path} path={path} element={element} />
					))}
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	)
}

export { App }
