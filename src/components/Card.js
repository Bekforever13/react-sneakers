import React from 'react'

function Card() {
	return (
		<div className='card'>
			<div class='favourite'>
				<img src='/img/heart-1.svg' alt='unliked' />
			</div>
			<img width={133} height={112} src='/img/sneaker1.jpg' alt='sneakers' />
			<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
			<div className='d-flex justify-between align-center'>
				<div className='d-flex flex-column'>
					<span>Цена:</span>
					<h5>12 999руб.</h5>
				</div>
				<button className='button'>
					<img width={11} height={11} src='img/plus.svg' alt='plus' />
				</button>
			</div>
		</div>
	)
}

export default Card
