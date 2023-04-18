import React from 'react'
import styles from './Card.module.scss'

function Card({ name, url, price }) {
	const onClickBtn = () => {
		alert(name)
	}
	return (
		<div className={styles.card}>
			<div className='favourite'>
				<img src='/img/heart-1.svg' alt='unliked' />
			</div>
			<img width={133} height={112} src={url} alt='sneakers' />
			<p>{name}</p>
			<div className='d-flex justify-between align-center'>
				<div className='d-flex flex-column'>
					<span>Цена:</span>
					<h5>{price + ' '}руб.</h5>
				</div>
				<button onClick={onClickBtn} className='button'>
					<img width={11} height={11} src='img/plus.svg' alt='plus' />
				</button>
			</div>
		</div>
	)
}

export default Card
