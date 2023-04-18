import React, { useState } from 'react'
import styles from './Card.module.scss'

function Card({ name, url, price, onClickFavourite, onPlus }) {
	const [isAdded, setIsAdded] = useState(false)

	const onClickPlus = () => {
		onPlus({ name, url, price })
		setIsAdded(!isAdded)
	}

	return (
		<div className={styles.card}>
			<div className='favourite' onClick={onClickFavourite}>
				<img src='/img/heart-1.svg' alt='unliked' />
			</div>
			<img width={133} height={112} src={url} alt='sneakers' />
			<p>{name}</p>
			<div className='d-flex justify-between align-center'>
				<div className='d-flex flex-column'>
					<span>Цена:</span>
					<h5>{price + ' '}руб.</h5>
				</div>
				<img
					className='cu-p'
					onClick={onClickPlus}
					src={isAdded ? 'img/check-1.svg' : 'img/check-0.svg'}
					alt='plus'
				/>
			</div>
		</div>
	)
}

export default Card
