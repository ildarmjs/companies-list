import { ChangeEvent, FC } from 'react'
import styles from './Input.module.scss'

interface IInputProps {
	value: string
	onChange: (value: ChangeEvent<HTMLInputElement>) => void
	placeholder: string
	isError?: boolean
}

const Input: FC<IInputProps> = ({ onChange, value, placeholder, isError }) => {
	return (
		<input
			className={`${styles.input} ${isError ? styles.inputError : ''}`}
			type='text'
			value={value}
			onChange={onChange}
			placeholder={placeholder}
		/>
	)
}

export default Input
