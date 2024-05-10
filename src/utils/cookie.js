export function getCookieItem(key, defaultValue = null) {
	try {
		const cookies = document.cookie.split(';').map((cookie) => cookie.trim())
		const foundCookie = cookies.find((cookie) => {
			const [cookieKey] = cookie.split('=')
			return cookieKey === key
		})

		return foundCookie ? foundCookie.split('=')[1] : defaultValue
	} catch (error) {
		return defaultValue
	}
}
