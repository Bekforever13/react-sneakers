import React from 'react'
import { useLocation } from 'react-router-dom'
import { Title } from 'src/components/shared/Title/Title'
import { useGetSneakerQuery } from 'src/redux/index.endpoints'
import styles from './Sneaker.module.scss'
import { SneakerButtons } from './SneakerButtons/SneakerButtons'

const Sneaker: React.FC = () => {
	const { pathname } = useLocation()
	const paramsId = pathname.slice(9)
	const { data, isError } = useGetSneakerQuery(paramsId)

	if (data) {
		return (
			<div>
				<Title title={data.title} />
				<div className={styles.root}>
					<div className={styles.img_text}>
						<img src={`/img/sneaker${data.id}.jpg`} />
						<div>
							<ul>
								<li>
									<b>Vendor code:</b> {data?.slug}
								</li>
								<li>
									<b>Brand:</b> {data?.brand}
								</li>
								<li>
									<b>Model:</b> {data?.model}
								</li>
								<li>
									<b>Material:</b> {data?.material}
								</li>
								<li>
									<b>Technologies:</b> {data?.technologies}
								</li>
							</ul>
							<SneakerButtons />
						</div>
					</div>
					<div className={styles.description}>
						<b>Description:</b>
						<div>{data?.description}</div>
					</div>
				</div>
			</div>
		)
	}
	return <h2>{isError && 'ERROR OCCURED'}</h2>
}
export { Sneaker }
