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
	const [errorMessage, setErrorMessage] = useState('')
	const [isSubmitted, setIsSubmitted] = useState(false)

	const handleAddCompany = () => {
		setIsSubmitted(true)
		if (!newCompanyName || !newCompanyAddress) {
			setErrorMessage('Пожалуйста, заполните все поля.')
			return
		}

		dispatch(addCompany({ name: newCompanyName, address: newCompanyAddress }))
		setNewCompanyName('')
		setNewCompanyAddress('')
		setErrorMessage('')
		setIsSubmitted(false)
	}
	return (
		<>
			<div className={styles.companyForm}>
				<Input
					value={newCompanyName}
					onChange={e => setNewCompanyName(e.target.value)}
					isError={isSubmitted && newCompanyName.length === 0}
					placeholder='Название компании'
				/>
				<Input
					value={newCompanyAddress}
					onChange={e => setNewCompanyAddress(e.target.value)}
					isError={isSubmitted && newCompanyAddress.length === 0}
					placeholder='Адрес компании'
				/>
				<Button
					text='Добавить компанию'
					onClick={handleAddCompany}
					variant='add'
				/>
			</div>
			{errorMessage && <div className={styles.error}>{errorMessage}</div>}
		</>
	)
}

export default TableForm
