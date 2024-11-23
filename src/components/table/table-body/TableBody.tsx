import { FC } from 'react'
import TableRow from '../table-row/TableRow'
import ErrorBoundary from '../../error-boundary/ErrorBoundary'
import NoCompaniesMessage from '../../no-companies-message/NoCompaniesMessage'
import Loading from '../../ui/loading/Loading'
import { useCompany } from '../../../hooks/useCompany'
import { useInfinityScroll } from '../../../hooks/useInfinityScroll'
import { useEditableCompany } from '../../../hooks/useEditableCompany'
import ErrorMessage from '../../ui/eror-message/ErrorMessage'

const TableBody: FC = () => {
	const { companies, loading, error, setFetching } = useCompany()
	const editableCompany = useEditableCompany()
	useInfinityScroll(() => setFetching(true))

	const renderCompanies = () => {
		if (error) {
			return <ErrorMessage text={error} />
		}
		if (!companies.length) {
			return <NoCompaniesMessage />
		}
		return companies.map(company => (
			<TableRow key={company.id} company={company} {...editableCompany} />
		))
	}
	return (
		<tbody>
			<ErrorBoundary>{renderCompanies()}</ErrorBoundary>
			{loading && <Loading text='Загрузка...' />}
		</tbody>
	)
}

export default TableBody
