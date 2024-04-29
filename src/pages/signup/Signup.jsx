import singnupCoverImg from '@assets/images/signup-cover.jpg'
import { SingnupForm } from './components/SingnupForm'

export function Signup() {
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
