import singnupCoverImg from '@assets/images/signup-cover.jpg'
import { ROUTES } from '@routes'
import { AppContext } from '@useContext'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SingnupForm } from './components/SingnupForm'

export function Signup() {
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
					src={singnupCoverImg}
					className="h-screen object-cover object-left bg-fixed w-full"
					alt="cover-img"
				/>
			</div>
			<div className="flex-1">
				<SingnupForm />
			</div>
		</div>
	)
}
