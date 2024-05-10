import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],

	resolve: {
		alias: {
			'@assets': path.resolve(__dirname, './src/assets'),
			'@services': path.resolve(__dirname, './src/services'),
			'@helpers': path.resolve(__dirname, './src/helpers'),
			'@utils': path.resolve(__dirname, './src/utils'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@routes': path.resolve(__dirname, './src/routes'),
			'@common': path.resolve(__dirname, './src/common'),
			'@useContext': path.resolve(__dirname, './src/contexts'),
			'@constants': path.resolve(__dirname, './src/constants'),
		},
	},

	server: {
		host: true,
		port: 3000,
	},
})
