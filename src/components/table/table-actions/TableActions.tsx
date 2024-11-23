import { FC } from 'react'
import Button from '../../ui/button/Button'
import styles from './TableActions.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
	removeSelectedCompanies,
	selectAllCompanies
} from '../../../store/slices/companySlice'
import { RootState } from '../../../store/store'
interface ITableActionsProps {}

const TableActions: FC<ITableActionsProps> = ({}) => {
	const dispatch = useDispatch()
	const companies = useSelector((state: RootState) => state.companies.companies)
	const areAllSelected = companies.every(company => company.isSelected)

	const handleSelectAll = () => {
		dispatch(selectAllCompanies(!areAllSelected))
	}

	const handleDeleteSelected = () => {
		dispatch(removeSelectedCompanies())
	}

	return (
		<div className={styles.btns}>
			<Button
				onClick={handleSelectAll}
				text={areAllSelected ? 'Отменить выделение' : 'Выделить все'}
				variant='highlightAll'
			/>
			<Button
				onClick={handleDeleteSelected}
				text={areAllSelected ? 'Удалить все' : 'Удалить'}
				variant='deleteAll'
			/>
		</div>
	)
}

export default TableActions
