import { FC, useState } from 'react'
import TableRow from '../table-row/TableRow'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import ErrorBoundary from '../../error-boundary/ErrorBoundary'
import NoCompaniesMessage from '../../no-companies-message/NoCompaniesMessage'

const TableBody: FC = () => {
	const companies = useSelector((state: RootState) => state.companies.companies)

	const [editingNameId, setEditingNameId] = useState<number | null>(null)
	const [editingAddressId, setEditingAddressId] = useState<number | null>(null)

	const [editedName, setEditedName] = useState('')
	const [editedAddress, setEditedAddress] = useState('')
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
