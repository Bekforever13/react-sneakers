import React from 'react'

function CartDrawer({ onClose, sneakers = [], onRemoveItem }) {
	return (
		<div className='overlay'>
			<div className='drawer'>
				<div className='d-flex justify-between '>
					<h2 className='mb-30'>Корзина</h2>
					<img
						onClick={onClose}
						className='cu-p'
						src='/img/btn-remove.svg'
						alt='close'
					/>
				</div>

				{sneakers.length > 0 ? (
					<>
						<div className='items'>
							{sneakers.map(obj => (
								<div
									key={obj.id}
									className='cartItem d-flex align-center mb-20'
								>
									<div
										style={{
											backgroundImage: `url(${obj.url})`,
										}}
										className='cartItemImg'
									></div>
									<div className='mr-20 flex'>
										<p className='mb-5'>{obj.name}</p>
										<b>{obj.price}руб.</b>
									</div>
									<img
										onClick={() => onRemoveItem(obj.id)}
										className='removeBtn'
										src='/img/btn-remove.svg'
										alt='remove'
									/>
								</div>
							))}
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
					</>
				) : (
					<div className='cartEmpty d-flex align-center justify-center flex-column flex'>
						<img
							className='mb-20'
							width={120}
							height={120}
							src='/img/empty-cart.png'
							alt='empty-cart'
						/>
						<h2>Корзина пустая</h2>
						<p className='opacity-6'>
							Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
						</p>
						<button onClick={onClose} className='greenButton'>
							<img src='/img/arrow.svg' alt='arrow' />
							Вернуться назад
						</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default CartDrawer
