import { ChangeEvent, FC } from 'react'
import styles from './Input.module.scss'

interface IInputProps {
	value: string
	onChange: (value: ChangeEvent<HTMLInputElement>) => void
	placeholder: string
}

const Input: FC<IInputProps> = ({ onChange, value, placeholder }) => {
	return (
		<input
			className={styles.input}
			type='text'
			value={value}
			onChange={onChange}
			placeholder={placeholder}
		/>
	)
}

export default Input
