import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CartDrawer from './components/CartDrawer'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Favourite from './pages/Favourite'

function App() {
	const [items, setItems] = useState([])
	const [cartItems, setCartItems] = useState([])
	const [favourites, setFavourites] = useState([])
	const [searchValue, setSearchValue] = useState('')
	const [cartOpened, setCartOpened] = useState(false)
	const [isReady, setIsReady] = useState(false)

	useEffect(() => {
		async function fetchData() {
			const cartResp = await axios.get(
				'https://643f10d43dee5b763e152aff.mockapi.io/cart'
			)
			const favResp = await axios.get(
				'https://644166d8792fe886a8a6a9be.mockapi.io/favourites'
			)
			const itemResp = await axios.get(
				'https://643f10d43dee5b763e152aff.mockapi.io/items'
			)
			setCartItems(cartResp.data)
			setFavourites(favResp.data)
			setItems(itemResp.data)
		}
		fetchData()
	}, [])

	const onAddToCart = obj => {
		try {
			if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
				setCartItems(prev =>
					prev.filter(el => Number(el.id) !== Number(obj.id))
				)
				axios.delete(
					`https://643f10d43dee5b763e152aff.mockapi.io/cart/${obj.id}`
				)
			} else {
				axios.post('https://643f10d43dee5b763e152aff.mockapi.io/cart', obj)
				setCartItems(prev => [...prev, obj])
			}
		} catch (error) {
			alert('error onAddToCart')
		}
	}

	const onRemoveItem = id => {
		axios.delete(`https://643f10d43dee5b763e152aff.mockapi.io/cart/${id}`)
		setCartItems(prev => prev.filter(item => item.id !== id))
	}

	const onAddToFavourite = async obj => {
		try {
			if (favourites.find(favObj => favObj.id === obj.id)) {
				axios.delete(
					`https://644166d8792fe886a8a6a9be.mockapi.io/favourites/${obj.id}`
				)
			} else {
				const { data } = await axios.post(
					'https://644166d8792fe886a8a6a9be.mockapi.io/favourites',
					obj
				)
				setFavourites(prev => [...prev, data])
			}
		} catch (error) {
			alert('error onAddToFavourite')
		}
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
			<Routes>
				<Route
					path='/'
					element={
						<Home
							cartItems={cartItems}
							items={items}
							searchValue={searchValue}
							setSearchValue={setSearchValue}
							onChangeSearchInput={onChangeSearchInput}
							onAddToCart={onAddToCart}
							onAddToFavourite={onAddToFavourite}
						/>
					}
				></Route>
				<Route
					path='/favourites'
					element={
						<Favourite onAddToFavourite={onAddToFavourite} items={favourites} />
					}
				/>
			</Routes>
		</div>
	)
}

export default App
