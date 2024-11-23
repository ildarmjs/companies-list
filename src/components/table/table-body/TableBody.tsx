import { FC, useEffect, useState } from 'react'
import TableRow from '../table-row/TableRow'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import ErrorBoundary from '../../error-boundary/ErrorBoundary'
import NoCompaniesMessage from '../../no-companies-message/NoCompaniesMessage'
import { incrementPage, setCompanies } from '../../../store/slices/companySlice'

const TableBody: FC = () => {
	const { companies, page } = useSelector((state: RootState) => state.companies)
	const [editingNameId, setEditingNameId] = useState<number | null>(null)
	const [editingAddressId, setEditingAddressId] = useState<number | null>(null)
	const [fetching, setFetching] = useState(true)
	const [editedName, setEditedName] = useState('')
	const [editedAddress, setEditedAddress] = useState('')
	const dispatch = useDispatch()

	useEffect(() => {
		const fetchCompanies = async () => {
			if (fetching) {
				try {
					const response = await fetch(
						`https://dd6b73fe40abba67.mokky.dev/companies?page=${page}`
					)
					const data = await response.json()
					dispatch(setCompanies([...companies, ...data.items]))
					dispatch(incrementPage())
				} catch (error) {
					console.error('Error fetching companies:', error)
				} finally {
					setFetching(false)
				}
			}
		}

		fetchCompanies()
	}, [fetching])
	useEffect(() => {
		document.addEventListener('scroll', scrollHandler)
		return () => {
			document.removeEventListener('scroll', scrollHandler)
		}
	}, [])
	const scrollHandler = (e: Event) => {
		const target = e.target as Document
		if (
			target.documentElement.scrollHeight -
				(target.documentElement.scrollTop + window.innerHeight) <
			100
		) {
			setFetching(true)
		}
	}
	const renderCompanies = () => {
		if (companies.length === 0) {
			return <NoCompaniesMessage />
		}

		return companies.map(company => (
			<TableRow
				key={company.id}
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
		))
	}
	return (
		<tbody>
			<ErrorBoundary>{renderCompanies()}</ErrorBoundary>
		</tbody>
	)
}

export default TableBody
