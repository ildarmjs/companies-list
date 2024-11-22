import { FC } from 'react'
import styles from './Button.module.scss'

interface IButtonProps {
	text: string
	onClick: () => void
	variant?: 'add' | 'deleteAll' | 'highlightAll'
}

const Button: FC<IButtonProps> = ({ text, onClick, variant }) => {
	const buttonClass = variant
		? `${styles.button} ${styles[variant]}`
		: styles.button
	return (
		<button onClick={onClick} className={buttonClass}>
			{text}
		</button>
	)
}

export default Button
