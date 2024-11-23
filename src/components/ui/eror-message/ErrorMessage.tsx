import { FC } from 'react'
import styles from './ErrorMessage.module.scss'
interface IErrorMessageProps {
	text: string
}

const ErrorMessage: FC<IErrorMessageProps> = ({ text }) => {
	return (
		<tr>
			<td colSpan={3} style={{ textAlign: 'center' }}>
				<div className={styles.text}>{text}</div>
			</td>
		</tr>
	)
}

export default ErrorMessage
