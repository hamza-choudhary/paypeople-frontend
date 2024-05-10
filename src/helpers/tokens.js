import { ACCESS_TOKEN, REFRESH_TOKEN } from '@constants'
import { apiEndPoints } from '@services'
import { performPostRequest } from '@services/apiClient'
import { getCookieItem, getLocalStorageItem } from '@utils'
import { jwtDecode } from 'jwt-decode'

export async function tokenRefresh() {
	const refreshToken = getLocalStorageItem(REFRESH_TOKEN)
	await performPostRequest({
		url: apiEndPoints.AUTH.REFRESH_TOKEN,
		payload: { refreshToken },
	})
}

export function getUserFromAccessCookie() {
	const accessToken = getCookieItem(ACCESS_TOKEN)
	if (!accessToken) return null

	try {
		const decoded = jwtDecode(accessToken)
		return { id: decoded?.id, email: decoded?.email, role: decoded?.role }
	} catch (error) {
		console.log(error, 'in token.js')
		return null
	}
}
