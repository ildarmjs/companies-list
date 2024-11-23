import { FC } from 'react'
import styles from './NoCompaniesMessage.module.scss'

const NoCompaniesMessage: FC = () => {
	return (
		<tr>
			<td colSpan={3} style={{ textAlign: 'center' }}>
				<div className={styles.message}>
					К сожалению, пока нет доступных компаний
				</div>
			</td>
		</tr>
	)
}

export default NoCompaniesMessage
