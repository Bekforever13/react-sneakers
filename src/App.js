import Card from './components/Card'
import CartDrawer from './components/CartDrawer'
import Header from './components/Header'

function App() {
	return (
		<div className='wrapper clear'>
			<CartDrawer />
			<Header />

			<div className='content p-40'>
				<div className='d-flex align-center justify-between mb-40'>
					<h1>Все кроссовки</h1>
					<div className='search-block d-flex'>
						<img src='/img/search.png' alt='Search' />
						<input placeholder='Поиск ...' />
					</div>
				</div>

				<div className='d-flex'>
					<Card />
				</div>
			</div>
		</div>
	)
}

export default App
