import * as Yup from 'yup'

export const singupValidationSchema = Yup.object({
	firstName: Yup.string().required('First name is required'),
	lastName: Yup.string().required('Last name is required'),
	email: Yup.string()
		.email('Invalid email address')
		.required('Email is required'),
	password: Yup.string()
		.min(3, 'password at least of length 3')
		.required('password is required'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], "passwords don't match")
		.required('Confirm password is required'),
})
