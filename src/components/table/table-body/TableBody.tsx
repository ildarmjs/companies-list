import { FC, useEffect, useState } from 'react'
import TableRow from '../table-row/TableRow'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../store/store'
import ErrorBoundary from '../../error-boundary/ErrorBoundary'
import NoCompaniesMessage from '../../no-companies-message/NoCompaniesMessage'
import { fetchCompanies } from '../../../store/slices/companySlice'
import Loading from '../../ui/loading/Loading'
import ErrorMessage from '../../ui/eror-message/ErrorMessage'

const TableBody: FC = () => {
	const dispatch: AppDispatch = useDispatch()
	const { companies, status } = useSelector(
		(state: RootState) => state.companies
	)
	console.log('companies:', companies)
	const [editingNameId, setEditingNameId] = useState<number | null>(null)
	const [editingAddressId, setEditingAddressId] = useState<number | null>(null)

	const [editedName, setEditedName] = useState('')
	const [editedAddress, setEditedAddress] = useState('')
	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchCompanies())
		}
	}, [status, dispatch])

	if (status === 'loading') return <Loading text='Загрузка...' />
	if (status === 'failed')
		return <ErrorMessage text='Ошибка при загрузке данных' />

	const renderCompanies = () => {
		if (companies.length === 0) {
			return <NoCompaniesMessage />
		}

		return companies.map(company => (
			<ErrorBoundary key={company.id}>
				<TableRow
					company={company}
					editedAddress={editedAddress}
					editedName={editedName}
					editingAddressId={editingAddressId}
					editingNameId={editingNameId}
					setEditedAddress={setEditedAddress}
					setEditedName={setEditedName}
					setEditingAddressId={setEditingAddressId}
					setEditingNameId={setEditingNameId}
				/>
			</ErrorBoundary>
		))
	}
	return (
		<tbody>
			<ErrorBoundary>{renderCompanies()}</ErrorBoundary>
		</tbody>
	)
}

export default TableBody
