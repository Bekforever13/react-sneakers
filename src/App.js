function App() {
	return (
		<div className='wrapper clear'>
			<header className='d-flex justify-between align-center p-40'>
				<div className='d-flex align-center'>
					<img width={40} height={40} src='/img/logo.svg' alt='' />
					<div className='headerInfo'>
						<h3 className='text-uppercase'>React Sneakers</h3>
						<p className='opacity-5'>Магазин лучших кроссовок</p>
					</div>
				</div>
				<ul className='d-flex'>
					<li className='mr-30'>
						<img width={18} height={18} src='/img/cart.svg' alt='' />
						<span>1205 руб.</span>
					</li>
					<li>
						<img width={18} height={18} src='/img/favourite.svg' alt='' />
						<img width={18} height={18} src='/img/person.svg' alt='' />
					</li>
				</ul>
			</header>
			<div className='content p-40'>
				<h1 className='mb-40'>Все кроссовки</h1>

				<div className='d-flex'>
					<div className='card'>
						<img
							width={133}
							height={112}
							src='/img/sneaker1.jpg'
							alt='sneakers'
						/>
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
					<div className='card'>
						<img
							width={133}
							height={112}
							src='/img/sneaker2.jpg'
							alt='sneakers'
						/>
						<p>Мужские Кроссовки Nike Air Max 270</p>
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
					<div className='card'>
						<img
							width={133}
							height={112}
							src='/img/sneaker3.jpg'
							alt='sneakers'
						/>
						<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<h5>8 499 руб.</h5>
							</div>
							<button className='button'>
								<img width={11} height={11} src='img/plus.svg' alt='plus' />
							</button>
						</div>
					</div>
					<div className='card'>
						<img
							width={133}
							height={112}
							src='/img/sneaker4.jpg'
							alt='sneakers'
						/>
						<p>Кроссовки Puma X Aka Boku Future Rider</p>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<h5>8 999 руб.</h5>
							</div>
							<button className='button'>
								<img width={11} height={11} src='img/plus.svg' alt='plus' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
