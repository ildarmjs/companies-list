import { FC } from 'react'
import styles from './Table.module.scss'
import Container from '../container/Container'
import Title from '../ui/title/Title'
import TableForm from './table-form/TableForm'
import TableActions from './table-actions/TableActions'
import TableHeader from './table-header/TableHeader'
import TableBody from './table-body/TableBody'

const Table: FC = () => {
	return (
		<Container>
			<Title title='Список компаний' />
			<TableForm />
			<TableActions />
			<table className={styles.table}>
				<TableHeader />
				<TableBody />
			</table>
		</Container>
	)
}

export default Table
