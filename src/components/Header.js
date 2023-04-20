import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
	return (
		<header className='d-flex justify-between align-center p-40'>
			<Link to='/'>
				<div className='d-flex align-center'>
					<img width={40} height={40} src='/img/logo.svg' alt='' />
					<div className='headerInfo'>
						<h3 className='text-uppercase'>React Sneakers</h3>
						<p className='opacity-5'>Магазин лучших кроссовок</p>
					</div>
				</div>
			</Link>
			<ul className='d-flex'>
				<li onClick={props.onClickCart} className='mr-30 cu-p'>
					<img
						className='cu-p'
						width={18}
						height={18}
						src='/img/cart.svg'
						alt=''
					/>
					<span>1205 руб.</span>
				</li>
				<li>
					<Link to='/favourites'>
						<img
							className='cu-p'
							width={18}
							height={18}
							src='/img/favourite.svg'
							alt=''
						/>
					</Link>
					<img
						className='cu-p'
						width={18}
						height={18}
						src='/img/person.svg'
						alt=''
					/>
				</li>
			</ul>
		</header>
	)
}

export default Header
