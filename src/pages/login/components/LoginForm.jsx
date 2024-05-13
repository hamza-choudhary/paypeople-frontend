import LoadingSpinner from '@common/components/LoadingSpinner'
import { loginValidationSchema, REFRESH_TOKEN } from '@constants'
import { apiEndPoints, usePostMutation } from '@services'
import { AppContext } from '@useContext'
import { setLocalStorageItem } from '@utils'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useContext } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const initialValues = {
	email: '',
	password: '',
}

export function LoginForm() {
	const { mutate, isLoading } = usePostMutation(
		apiEndPoints.AUTH.LOGIN,
		onSubmitSuccess,
		onSubmitError
	)

	const { login } = useContext(AppContext)

	function onSubmitSuccess(response) {
		const { refreshToken, data: user } = response.data
		setLocalStorageItem(REFRESH_TOKEN, refreshToken)
		const notify = () => toast.success('Successfully Login')
		notify()
		login(user)

		//FIXME: navigate to
	}

	function onSubmitError(err, _values, _context) {
		const errorMessage = err?.response?.data?.message ?? err?.message
		const notify = () => toast.error(`Error: ${errorMessage}`)
		notify()
	}

	async function submitHandler(values, { setSubmitting }) {
		mutate({ data: values })
		setSubmitting(false)
	}

	return (
		<div className="flex items-center justify-center p-12 relative h-screen">
			<div className="mx-auto w-full max-w-[550px] bg-white">
				<h1 className="text-3xl font-bold mb-6">Login</h1>
				<LoadingSpinner isLoading={isLoading} />
				<Toaster />
				<Formik
					initialValues={initialValues}
					validationSchema={loginValidationSchema}
					onSubmit={submitHandler}
				>
					{({ errors, touched, isValid }) => (
						<Form>
							<div className="mb-5">
								<label
									htmlFor="email"
									className="mb-1 text-sm block font-medium text-[#07074D]"
								>
									Email Address
								</label>
								<Field
									type="email"
									name="email"
									placeholder="Enter your email"
									className={`w-full rounded-md ${
										errors.email && touched.email
											? 'border-red-500'
											: 'border-[#e0e0e0]'
									} border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
								/>
								<ErrorMessage
									name="email"
									component="div"
									className="text-red-600 text-sm"
								/>
							</div>
							<div className="mb-5">
								<label
									htmlFor="password"
									className="mb-1 block text-sm font-medium text-[#07074D]"
								>
									Password
								</label>
								<Field
									type="password"
									name="password"
									placeholder="Password"
									className={`w-full rounded-md ${
										errors.password && touched.password
											? 'border-red-500'
											: 'border-[#e0e0e0]'
									} border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
								/>
								<ErrorMessage
									name="password"
									component="div"
									className="text-red-600 text-sm"
								/>
							</div>

							<div>
								<button
									type="submit"
									disabled={!isValid}
									className={`hover:shadow-form w-full rounded-md bg-[#6A64F1] py-2 px-8 text-center text-base font-semibold text-white outline-none ${
										!isValid ? 'opacity-50 cursor-not-allowed' : ''
									}`}
								>
									Login
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	)
}
