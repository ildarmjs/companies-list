import { FC } from 'react'
import styles from './Loading.module.scss'
interface ILoadingProps {
	text: string
}

const Loading: FC<ILoadingProps> = ({ text }) => {
	return (
		<tr>
			<td colSpan={3} style={{ textAlign: 'center' }}>
				<div className={styles.text}>{text}</div>
			</td>
		</tr>
	)
}

export default Loading
