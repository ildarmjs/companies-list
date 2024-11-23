import React from 'react'
import { useDispatch } from 'react-redux'
import { Company } from '../../../types/company'
import {
	selectCompany,
	updateCompany
} from '../../../store/slices/companySlice'
import TableEditField from './table-edit-field/TableEditField'

interface CompanyRowProps {
	company: Company
	editingNameId: number | null
	editingAddressId: number | null
	editedName: string
	editedAddress: string
	setEditingNameId: (id: number | null) => void
	setEditingAddressId: (id: number | null) => void
	setEditedName: (name: string) => void
	setEditedAddress: (address: string) => void
}

const TableRow: React.FC<CompanyRowProps> = ({
	company,
	editingNameId,
	editingAddressId,
	editedName,
	editedAddress,
	setEditingNameId,
	setEditingAddressId,
	setEditedName,
	setEditedAddress
}) => {
	const dispatch = useDispatch()

	const handleApplyChangesName = () => {
		dispatch(
			updateCompany({
				id: company.id,
				name: editedName,
				address: company.address
			})
		)
		setEditingNameId(null)
	}

	const handleApplyChangesAddress = () => {
		dispatch(
			updateCompany({
				id: company.id,
				name: company.name,
				address: editedAddress
			})
		)
		setEditingAddressId(null)
	}

	return (
		<tr style={{ backgroundColor: company.isSelected ? '#e6e6e6' : '' }}>
			<td>
				<input
					type='checkbox'
					checked={company.isSelected}
					onChange={() => dispatch(selectCompany(company.id))}
				/>
			</td>
			<td>
				<TableEditField
					value={editingNameId === company.id ? editedName : company.name}
					onChange={setEditedName}
					onSave={handleApplyChangesName}
					isEditing={editingNameId === company.id}
					onEdit={() => {
						setEditingNameId(company.id)
						setEditedName(company.name)
					}}
				/>
			</td>
			<td>
				<TableEditField
					value={
						editingAddressId === company.id ? editedAddress : company.address
					}
					onChange={setEditedAddress}
					onSave={handleApplyChangesAddress}
					isEditing={editingAddressId === company.id}
					onEdit={() => {
						setEditingAddressId(company.id)
						setEditedAddress(company.address)
					}}
				/>
			</td>
		</tr>
	)
}

export default TableRow
