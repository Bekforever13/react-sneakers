import React from 'react'

function CartDrawer() {
	return (
		<div style={{ display: 'none' }} className='overlay'>
			<div className='drawer'>
				<div className='d-flex justify-between '>
					<h2 className='mb-30'>Корзина</h2>
					<img className='cu-p' src='/img/btn-remove.svg' alt='close' />
				</div>

				<div class='items'>
					<div className='cartItem d-flex align-center mb-20'>
						<div
							style={{
								backgroundImage: 'url(/img/sneaker1.jpg)',
							}}
							className='cartItemImg'
						></div>
						<div className='mr-20 flex'>
							<p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
							<b>12 999руб.</b>
						</div>
						<img className='removeBtn' src='/img/btn-remove.svg' alt='remove' />
					</div>
					<div className='cartItem d-flex align-center mb-20'>
						<div
							style={{
								backgroundImage: 'url(/img/sneaker1.jpg)',
							}}
							className='cartItemImg'
						></div>
						<div className='mr-20 flex'>
							<p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
							<b>12 999руб.</b>
						</div>
						<img className='removeBtn' src='/img/btn-remove.svg' alt='remove' />
					</div>
				</div>

				<div className='cartTotalBlock'>
					<ul>
						<li className='d-flex'>
							<span>Итого:</span>
							<div></div>
							<b>21 498 руб.</b>
						</li>
						<li className='d-flex'>
							<span>Налог 5%:</span>
							<div></div>
							<b>1073 руб.</b>
						</li>
					</ul>
					<button className='greenButton'>
						Оформить заказ <img src='/img/arrow.svg' alt='arrow' />
					</button>
				</div>
			</div>
		</div>
	)
}

export default CartDrawer
