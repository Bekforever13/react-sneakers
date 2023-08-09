import React from 'react'
import { CardItem } from 'src/components/shared/Card/CardItem'
import { Title } from 'src/components/shared/Title/Title'
import styles from './Favorites.module.scss'
import { useGetFavoriteItemsQuery } from 'src/redux/index.endpoints'

const Favorites: React.FC = () => {
	const { data: favItems } = useGetFavoriteItemsQuery()

	return (
		<div>
			<Title title='My Favorites' />
			{!favItems?.length ? (
				<h2 className={styles.empty_h2}>You don't have any favorite items</h2>
			) : (
				<div className={styles.wrapper}>
					{favItems?.map(item => {
						return <CardItem key={item.id} {...item} />
					})}
				</div>
			)}
		</div>
	)
}
export { Favorites }
