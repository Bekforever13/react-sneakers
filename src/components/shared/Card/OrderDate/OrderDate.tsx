import React from 'react'
import { TSneaker } from 'src/redux/sneakers/Sneakers.types'

const OrderDate: React.FC<TSneaker> = ({ createdAt }) => {
	const [normalDate, setNormalDate] = React.useState<string>()

	React.useEffect(() => {
		let date
		if (createdAt) {
			date = new Date(createdAt)
		}
		if (date) {
			setNormalDate(date?.toLocaleDateString('uz-uz'))
		}
	}, [createdAt])
	
	return <>{normalDate}</>
}
export { OrderDate }
