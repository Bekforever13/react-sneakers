import { Button, ButtonProps } from 'antd'

const UiButton: React.FC<ButtonProps> = _props => {
	return <Button {..._props}>{_props.children}</Button>
}
export { UiButton }
