import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom'

import { Home } from '@pages/home'
import { Login } from '@pages/login'
import { Signup } from '@pages/signup'
import { Unauthorized } from '@pages/unauthorized'
import { PrivateRoute, ROUTES } from '@routes'

function createPrivateRoute(Component) {
	return (
		<PrivateRoute>
			<Component />
		</PrivateRoute>
	)
}

export const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path={ROUTES.HOME} element={createPrivateRoute(Home)} />
			<Route path={ROUTES.SIGNUP} element={<Signup />} />
			<Route path={ROUTES.LOGIN} element={<Login />} />
			<Route path={ROUTES.UN_AUTHORIZED} element={<Unauthorized />} />
		</>
	)
)
