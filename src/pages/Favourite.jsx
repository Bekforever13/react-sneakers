import React from 'react'
import Card from '../components/Card'

function Favourite({ items, onAddToFavourite }) {
	return (
		<div className='content p-40'>
			<div className='d-flex align-center justify-between mb-40'>
				<h1>Мои закладки</h1>
			</div>

			<div className='d-flex flex-wrap justify-center ml-12'>
				{items.map(val => (
					<Card
						key={val.id}
						favourite={true}
						onFavourite={onAddToFavourite}
						{...val}
					/>
				))}
			</div>
		</div>
	)
}

export default Favourite
