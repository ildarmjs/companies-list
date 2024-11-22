import { FC, useState } from 'react'
import styles from './TableForm.module.scss'
import { useDispatch } from 'react-redux'
import { addCompany } from '../../../store/slices/companySlice'
import Input from '../../ui/input/Input'
import Button from '../../ui/button/Button'

interface ITableFormProps {}

const TableForm: FC<ITableFormProps> = ({}) => {
	const dispatch = useDispatch()

	const [newCompanyName, setNewCompanyName] = useState('')
	const [newCompanyAddress, setNewCompanyAddress] = useState('')

	const handleAddCompany = () => {
		if (newCompanyName && newCompanyAddress) {
			dispatch(addCompany({ name: newCompanyName, address: newCompanyAddress }))
			setNewCompanyName('')
			setNewCompanyAddress('')
		}
	}
	return (
		<div className={styles.companyForm}>
			<Input
				value={newCompanyName}
				onChange={e => setNewCompanyName(e.target.value)}
				placeholder='Название компании'
			/>
			<Input
				value={newCompanyAddress}
				onChange={e => setNewCompanyAddress(e.target.value)}
				placeholder='Адрес компании'
			/>
			<Button
				text='Добавить компанию'
				onClick={handleAddCompany}
				variant='add'
			/>
		</div>
	)
}

export default TableForm
