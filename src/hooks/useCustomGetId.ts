import { useLocation } from "react-router-dom"
import { useGetSneakerQuery } from "src/redux/index.endpoints"

export const useCustomGetId = () => {
	const { pathname } = useLocation()
	const paramsId = pathname.slice(9)
	const { data } = useGetSneakerQuery(paramsId)

	return data
}