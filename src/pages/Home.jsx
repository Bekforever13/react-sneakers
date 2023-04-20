import React from 'react'
import Card from '../components/Card'

function Home({
	items,
	cartItems,
	searchValue,
	setSearchValue,
	onChangeSearchInput,
	onAddToCart,
	onAddToFavourite,
}) {
	const renderItems = () => {
		return items
			.filter(i => i.name.toLowerCase().includes(searchValue.toLowerCase()))
			.map(val => (
				<Card
					key={val.id}
					onFavourite={obj => onAddToFavourite(obj)}
					onPlus={obj => onAddToCart(obj)}
					added={cartItems.some(obj => Number(obj.id) === Number(val.id))}
					{...val}
					loading={true}
				/>
			))
	}
	return (
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

			<div className='d-flex flex-wrap justify-center ml-12'>{renderItems}</div>
		</div>
	)
}

export default Home
