import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
import CartDrawer from './components/CartDrawer'
import Header from './components/Header'

function App() {
	const [items, setItems] = useState([])
	const [cartItems, setCartItems] = useState([])
	const [searchValue, setSearchValue] = useState('')
	const [cartOpened, setCartOpened] = useState(false)

	useEffect(() => {
		axios
			.get('https://643f10d43dee5b763e152aff.mockapi.io/items')
			.then(res => setItems(res.data))
		axios
			.get('https://643f10d43dee5b763e152aff.mockapi.io/cart')
			.then(res => setCartItems(res.data))
	}, [])

	const onAddToCart = obj => {
		axios.post('https://643f10d43dee5b763e152aff.mockapi.io/cart', obj)
		setCartItems(prev => [...prev, obj])
	}

	const onRemoveItem = id => {
		axios.delete(`https://643f10d43dee5b763e152aff.mockapi.io/cart/${id}`)
		setCartItems(prev => prev.filter(item => item.id !== id))
	}

	const onChangeSearchInput = event => {
		setSearchValue(event.target.value)
	}

	return (
		<div className='wrapper clear'>
			{cartOpened && (
				<CartDrawer
					onRemoveItem={onRemoveItem}
					sneakers={cartItems}
					onClose={() => setCartOpened(false)}
				/>
			)}
			<Header onClickCart={() => setCartOpened(true)} />

			<div className='content p-40'>
				<div className='d-flex align-center justify-between mb-40'>
					<h1>
						{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}
					</h1>
					<div className='search-block d-flex'>
						<img src='/img/search.png' alt='Search' />
						{searchValue && (
							<img
								onClick={() => setSearchValue('')}
								className='clear cu-p'
								src='/img/btn-remove.svg'
								alt='clear'
							/>
						)}
						<input
							onChange={onChangeSearchInput}
							value={searchValue}
							placeholder='Поиск ...'
						/>
					</div>
				</div>

				<div className='d-flex flex-wrap justify-center ml-12'>
					{items
						.filter(i =>
							i.name.toLowerCase().includes(searchValue.toLowerCase())
						)
						.map(val => (
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
