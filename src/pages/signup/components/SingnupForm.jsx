import { singupValidationSchema } from '@constants'
import { ErrorMessage, Field, Form, Formik } from 'formik'

const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	confirmPassword: '',
}

export function SingnupForm() {
	return (
		<div className="flex items-center justify-center p-12">
			<div className="mx-auto w-full max-w-[550px] bg-white">
				<h1 className="text-3xl font-bold mb-6">Sign Up</h1>
				<Formik
					initialValues={initialValues}
					validationSchema={singupValidationSchema}
				>
					{({ errors, touched, isValid }) => (
						<Form>
							<div className="-mx-3 flex flex-wrap">
								<div className="w-full px-3 sm:w-1/2">
									<div className="mb-5">
										<label
											htmlFor="firstName"
											className="mb-1 block text-sm font-medium text-[#07074D]"
										>
											First Name
										</label>
										<Field
											type="text"
											name="firstName"
											placeholder="John"
											className={`w-full rounded-md ${
												errors.firstName && touched.firstName
													? 'border-red-500'
													: 'border-[#e0e0e0]'
											} border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
										/>
										<ErrorMessage
											name="firstName"
											component="div"
											className="text-red-600 text-sm"
										/>
									</div>
								</div>
								<div className="w-full px-3 sm:w-1/2">
									<div className="mb-5">
										<label
											htmlFor="lastName"
											className="mb-1 block text-sm font-medium text-[#07074D]"
										>
											Last Name
										</label>
										<Field
											type="text"
											name="lastName"
											placeholder="Doe"
											className={`w-full rounded-md ${
												errors.lastName && touched.lastName
													? 'border-red-500'
													: 'border-[#e0e0e0]'
											} border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
										/>
										<ErrorMessage
											name="lastName"
											component="div"
											className="text-red-600 text-sm"
										/>
									</div>
								</div>
							</div>
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
							<div className="mb-5">
								<label
									htmlFor="confirmPassword"
									className="mb-1 block text-sm font-medium text-[#07074D]"
								>
									Confirm Password
								</label>
								<Field
									type="password"
									name="confirmPassword"
									placeholder="Confirm Password"
									className={`w-full rounded-md ${
										errors.confirmPassword && touched.confirmPassword
											? 'border-red-500'
											: 'border-[#e0e0e0]'
									} border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
								/>
								<ErrorMessage
									name="confirmPassword"
									component="div"
									className="text-red-600 text-sm"
								/>
							</div>

							<div>
								<button
									type="submit"
									disabled={isValid}
									className={`hover:shadow-form w-full rounded-md bg-[#6A64F1] py-2 px-8 text-center text-base font-semibold text-white outline-none ${
										!isValid ? 'opacity-50 cursor-not-allowed' : ''
									}`}
								>
									Sign up
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	)
}
