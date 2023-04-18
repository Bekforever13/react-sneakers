import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import CartDrawer from './components/CartDrawer'
import Header from './components/Header'

function App() {
	const [items, setItems] = useState([])
	const [cartItems, setCartItems] = useState([])
	const [cartOpened, setCartOpened] = useState(false)

	useEffect(() => {
		fetch('https://643f10d43dee5b763e152aff.mockapi.io/items')
			.then(res => res.json())
			.then(data => setItems(data))
	}, [])

	const onAddToCart = obj => {
		setCartItems(prev => [...prev, obj])
	}

	return (
		<div className='wrapper clear'>
			{cartOpened && (
				<CartDrawer sneakers={cartItems} onClose={() => setCartOpened(false)} />
			)}
			<Header onClickCart={() => setCartOpened(true)} />

			<div className='content p-40'>
				<div className='d-flex align-center justify-between mb-40'>
					<h1>Все кроссовки</h1>
					<div className='search-block d-flex'>
						<img src='/img/search.png' alt='Search' />
						<input placeholder='Поиск ...' />
					</div>
				</div>

				<div className='d-flex flex-wrap justify-center ml-12'>
					{items.map(val => (
						<Card
							key={val.id}
							name={val.name}
							price={val.price}
							url={val.url}
							onClickFavourite={() => console.log('favourite clicked')}
							onPlus={obj => onAddToCart(obj)}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default App
