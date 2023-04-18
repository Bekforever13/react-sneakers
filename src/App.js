import Card from './components/Card'
import CartDrawer from './components/CartDrawer'
import Header from './components/Header'

const arr = [
	{
		name: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 12999,
		url: '/img/sneaker1.jpg',
	},
	{
		name: 'Мужские Кроссовки Nike Air Max 270',
		price: 12999,
		url: '/img/sneaker2.jpg',
	},
	{
		name: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 8499,
		url: '/img/sneaker3.jpg',
	},
	{
		name: 'Кроссовки Puma X Aka Boku Future Rider',
		price: 8999,
		url: '/img/sneaker4.jpg',
	},
	{
		name: 'Мужские Кроссовки Under Armour Curry 8',
		price: 15199,
		url: '/img/sneaker5.jpg',
	},
	{
		name: 'Мужские Кроссовки Nike Kyrie 7',
		price: 11299,
		url: '/img/sneaker6.jpg',
	},
	{
		name: 'Мужские Кроссовки Jordan Air Jordan 11',
		price: 10799,
		url: '/img/sneaker7.jpg',
	},
	{
		name: 'Мужские Кроссовки Nike LeBron XVIII',
		price: 16499,
		url: '/img/sneaker8.jpg',
	},
	{
		name: 'Мужские Кроссовки Nike Lebron XVIII Low',
		price: 13999,
		url: '/img/sneaker9.jpg',
	},
	{
		name: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: 8499,
		url: '/img/sneaker10.jpg',
	},
	{
		name: 'Кроссовки Puma X Aka Boku Future Rider',
		price: 8999,
		url: '/img/sneaker11.jpg',
	},
	{
		name: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
		price: 11299,
		url: '/img/sneaker12.jpg',
	},
]

function App() {
	return (
		<div className='wrapper clear'>
			<CartDrawer />
			<Header />

			<div className='content p-40'>
				<div className='d-flex align-center justify-between mb-40'>
					<h1>Все кроссовки</h1>
					<div className='search-block d-flex'>
						<img src='/img/search.png' alt='Search' />
						<input placeholder='Поиск ...' />
					</div>
				</div>

				<div className='d-flex'>
					{arr.map(val => (
						<Card name={val.name} price={val.price} url={val.url} />
					))}
				</div>
			</div>
		</div>
	)
}

export default App
