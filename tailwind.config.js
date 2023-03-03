/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				darkbrown: '#251917',
				cacao: '#725341',
				sand: '#C4966A',
				metalgrey: '#91898A',
			},
			fontFamily: {
				'serif': ['Lora', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
				'sans': ['Raleway', 'Helvetica Neue', 'Arial', 'sans-serif'],
			},
		},
	},
	plugins: [],
};