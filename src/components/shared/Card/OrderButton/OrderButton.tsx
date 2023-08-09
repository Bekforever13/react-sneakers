import { Popconfirm } from 'antd'
import { UiButton } from 'src/components/ui/button/UiButton'
import { useRemoveItemFromOrdersMutation } from 'src/redux/index.endpoints'
import { TSneaker } from 'src/redux/sneakers/Sneakers.types'

const OrderButton: React.FC<TSneaker> = props => {
	const [removeFromOrder] = useRemoveItemFromOrdersMutation()

	const handleClickButton = () => {
		removeFromOrder(props.id)
	}

	return (
		<Popconfirm title='Cancel the order?' onConfirm={handleClickButton}>
			<UiButton
				style={{ backgroundColor: '#e2dede', color: '#000' }}
				type='primary'
			>
				Cancel order
			</UiButton>
		</Popconfirm>
	)
}
export { OrderButton }
