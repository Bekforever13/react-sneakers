import { useActions } from 'src/hooks/useActions'
import styles from './EmptyCart.module.scss'
import { UiButton } from 'src/components/ui/button/UiButton'

const EmptyCart: React.FC = () => {
	const { toggleCart } = useActions()
	return (
		<div className={styles.root}>
			<img className={styles.cartImg} src='/img/empty-cart.png' />
			<h2>Корзина пустая</h2>
			<p className='opacity-6'>
				Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
			</p>
			<UiButton
				block
				onClick={() => toggleCart(false)}
				className={styles.button}
			>
				Вернуться назад
			</UiButton>
		</div>
	)
}
export { EmptyCart }
