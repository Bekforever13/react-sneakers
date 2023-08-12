import { useActions } from 'src/hooks/useActions'
import { TSneaker } from 'src/redux/sneakers/Sneakers.types'
import styles from './CartItems.module.scss'
import { UiButton } from 'src/components/ui/button/UiButton'
import { BsTrash } from 'react-icons/bs'
import {
	useGetCartItemsQuery,
	useRemoveItemFromCartMutation,
	useSetItemToOrdersMutation,
} from 'src/redux/index.endpoints'

const CartItems: React.FC = () => {
	const { data } = useGetCartItemsQuery()
	const totalPrice = data?.reduce((acc, obj) => acc + +obj.price, 0)
	const { toggleCart } = useActions()
	const [addToOrders] = useSetItemToOrdersMutation()
	const [removeFromApi] = useRemoveItemFromCartMutation()

	const handleClickRemove = (obj: TSneaker) => {
		removeFromApi(obj.id)
	}

	const handleClickBuyButton = async () => {
		try {
			if (data) {
				for (let item of data) {
					await addToOrders(item)
				}
				await Promise.all(data?.map(item => removeFromApi(item.id)))
				toggleCart(false)
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className={styles.root}>
			<div className={styles.items}>
				{data?.map(obj => (
					<div key={obj.id} className={styles.cartItem}>
						<img src={obj.imgUrl} />
						<div>
							<p>{obj.title}</p>
							<b>${obj.price}</b>
						</div>
						<UiButton
							className={styles.removeBtn}
							danger
							type='primary'
							onClick={() => handleClickRemove(obj)}
							icon={<BsTrash />}
						/>
					</div>
				))}
			</div>

			<ul>
				<li>
					<span>Total:</span>
					<div></div>$<b>{totalPrice}</b>
				</li>
				<li>
					<UiButton
						size='large'
						style={{ backgroundColor: '#a9da6c' }}
						type='primary'
						block
						onClick={handleClickBuyButton}
					>
						BUY NOW
					</UiButton>
				</li>
			</ul>
		</div>
	)
}
export { CartItems }
