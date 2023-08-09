export type TSneaker = {
	id: number
	brand: string
	description: string
	imgUrl: string
	material: string
	model: string
	slug: string
	technologies: string
	title: string
	price: number
	url: string
	parentId?: number
	isFavorite?: number
	createdAt?: string
}

export type ISneakersInitialState = {
	search: string
}