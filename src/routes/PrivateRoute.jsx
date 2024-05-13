import { ROUTES } from '@routes'
import { AppContext } from '@useContext'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

export function PrivateRoute({ children }) {
	const { isLoggedIn } = useContext(AppContext)
	if (!isLoggedIn) return <Navigate to={ROUTES.LOGIN} replace />

	return children
}
