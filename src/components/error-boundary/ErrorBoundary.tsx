import React, { ErrorInfo } from 'react'

interface ErrorBoundaryProps {
	children: React.ReactNode
}

interface ErrorBoundaryState {
	hasError: boolean
}

class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
		console.log('error', error)

		return { hasError: true }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error('Ошибка поймана в ErrorBoundary:', error, errorInfo)
	}

	render() {
		if (this.state.hasError) {
			return <h1 className='text-white text-[20px]'>Что-то пошло не так.</h1>
		}

		return this.props.children
	}
}

export default ErrorBoundary
