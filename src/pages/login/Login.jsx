import LoginCoverImg from '@assets/images/signup-cover.jpg'
import { ROUTES } from '@routes'
import { AppContext } from '@useContext'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginForm } from './components/LoginForm'

export function Login() {
	const { isLoggedIn } = useContext(AppContext)
	const navigation = useNavigate()

	useEffect(() => {
		if (isLoggedIn) {
			navigation(ROUTES.HOME)
		}
	}, [isLoggedIn, navigation])

	return (
		<div className="flex h-screen">
			<div className="flex-1 bg-slate-500">
				<img
					src={LoginCoverImg}
					className="h-screen object-cover object-left bg-fixed w-full"
					alt="cover-img"
				/>
			</div>
			<div className="flex-1">
				<LoginForm />
			</div>
		</div>
	)
}
