import React, { useState } from 'react'
import styles from './Card.module.scss'
import ContentLoader from 'react-content-loader'

function Card({
	id,
	name,
	url,
	price,
	onFavourite,
	onPlus,
	favourite = false,
	added = false,
	loading = false,
}) {
	const [isAdded, setIsAdded] = useState(added)
	const [isFavourite, setIsFavourite] = useState(favourite)

	const onClickPlus = () => {
		onPlus({ id, name, url, price })
		setIsAdded(!isAdded)
	}

	const onClickFavourite = () => {
		onFavourite({ id, name, url, price })
		setIsFavourite(!isFavourite)
	}

	return (
		<div className={styles.card}>
			{loading ? (
				<ContentLoader
					speed={2}
					width={200}
					height={350}
					viewBox='0 0 200 300'
					backgroundColor='#f3f3f3'
					foregroundColor='#ecebeb'
				>
					<rect x='0' y='30' rx='10' ry='10' width='200' height='180' />
					<rect x='0' y='187' rx='5' ry='5' width='200' height='15' />
					<rect x='0' y='217' rx='5' ry='5' width='140' height='15' />
					<rect x='0' y='250' rx='5' ry='5' width='110' height='25' />
					<rect x='165' y='250' rx='10' ry='10' width='32' height='32' />
				</ContentLoader>
			) : (
				<>
					<div className='favourite'>
						<img
							onClick={onClickFavourite}
							className='cu-p'
							src={isFavourite ? '/img/heart-1.svg' : '/img/heart-0.png'}
							alt='unliked'
						/>
					</div>
					<img width='100%' height={180} src={url} alt='sneakers' />
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
				</>
			)}
		</div>
	)
}

export default Card
