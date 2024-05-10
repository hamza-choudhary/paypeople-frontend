import { REFRESH_TOKEN } from '@constants'
import { getUserFromAccessCookie, tokenRefresh } from '@helpers'
import { AppContext } from '@useContext'
import { getLocalStorageItem } from '@utils'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

// GlobalAppContext.propTypes = {
// 	children: PropTypes.object,
// }

export const GlobalAppContext = ({ children }) => {
	const [user, setUser] = useState(null)
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	function login(user) {
		setUser(user)
		setIsLoggedIn(true)
	}

	function logout() {
		setUser(null)
		setIsLoggedIn(false)
		//FIXME: navigate to login screen
	}

	async function refreshTokenRequest() {
		await tokenRefresh()
		const user = getUserFromAccessCookie()
		login(user)
	}

	//todo: create a login function and use it in refreshTokenrequest + under user is logged in comment + when user will be logging into app

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
			return
		}
		//? get new refresh token
		refreshTokenRequest()
	}, [])

	return (
		<AppContext.Provider value={{ user, logout, isLoggedIn }}>
			{children}
		</AppContext.Provider>
	)
}
