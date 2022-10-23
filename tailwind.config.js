/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/components/**/*.js',
		'./pages/**/*.js'],
	theme: {
		extend: {
			height: {
				"almost-screen": 'calc(-10rem + 100vh)'
			}
		},
	},
	variants: {},
	plugins: [
		require( 'tailwindcss' ),
		require( 'precss' ),
		require( 'autoprefixer' )
	]
}
