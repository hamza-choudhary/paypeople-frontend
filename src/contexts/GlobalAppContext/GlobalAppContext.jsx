import LoadingSpinner from '@common/components/LoadingSpinner'
import { REFRESH_TOKEN } from '@constants'
import { getUserFromAccessCookie, tokenRefresh } from '@helpers'
import { AppContext } from '@useContext'
import { getLocalStorageItem } from '@utils'
import PropTypes from 'prop-types'
import { useCallback, useEffect, useState } from 'react'

// GlobalAppContext.propTypes = {
// 	children: PropTypes.object,
// }

export const GlobalAppContext = ({ children }) => {
	const [user, setUser] = useState(null)
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [isLoading, setIsLoading] = useState(true)

	function login(user) {
		setUser(user)
		setIsLoggedIn(true)
		setIsLoading(false)
	}

	function logout() {
		setUser(null)
		setIsLoggedIn(false)
		setIsLoading(false)
		//FIXME: navigate to login screen
	}

	const refreshTokenRequest = useCallback(async () => {
		await tokenRefresh()
		const user = getUserFromAccessCookie()
		login(user)
	}, [])

	useEffect(() => {
		//check if access token is availible or not
		const user = getUserFromAccessCookie()
		//user is logged in
		if (user) {
			login(user)
			return
		}
		const refreshToken = getLocalStorageItem(REFRESH_TOKEN)
		if (!refreshToken) {
			//logout the user
			logout()
			setIsLoading(false)
			return
		}
		//? get new refresh token
		refreshTokenRequest()
	}, [refreshTokenRequest])

	return (
		<AppContext.Provider value={{ user, logout, login, isLoggedIn }}>
			<LoadingSpinner isLoading={isLoading} />
			{!isLoading && children}
		</AppContext.Provider>
	)
}
