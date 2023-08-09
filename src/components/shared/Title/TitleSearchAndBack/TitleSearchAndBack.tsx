import React from 'react'
import Search from 'antd/es/input/Search'
import { useDebounce } from 'src/hooks/useDebounce'
import { useActions } from 'src/hooks/useActions'
import { BsArrowLeft } from 'react-icons/bs'
import styles from './TitleSearchAndBack.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { UiButton } from 'src/components/ui/button/UiButton'

const TitleSearchAndBack: React.FC = () => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const [searchValue, setSearchValue] = React.useState<string>()
	const debouncedSearchValue = useDebounce(searchValue, 500)
	const { setSearch } = useActions()

	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}

	React.useEffect(() => {
		setSearch(debouncedSearchValue)
	}, [debouncedSearchValue])

	const onClickBackButton = () => {
		navigate('/', { replace: true })
	}

	return (
		<div className={styles.root}>
			{pathname.length > 1 ? (
				<UiButton
					onClick={onClickBackButton}
					size='large'
					className={styles.ui_button}
					type='text'
				>
					<span>
						<BsArrowLeft />
					</span>{' '}
					GO BACK
				</UiButton>
			) : (
				<Search
					onChange={handleChangeInput}
					value={searchValue}
					size='large'
					placeholder='Search...'
				/>
			)}
		</div>
	)
}
export { TitleSearchAndBack }
