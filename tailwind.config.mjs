import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			blue: '#4f7fe5',
			darkGreen: '#25864D',
			darkGrey: '#494949',
			lightGreen: '#74C26C',
			lightGrey: '#E7E3E2',
			orange: '#fd8230',
			pink: '#E6B3B6',
			white: '#FFFFFF',
			yellow: '#EBB93F',
			black: '#000000',
		},

		extend: {
			maxWidth: {
				1440: '1440px',
			},
			fontSize: {
				discover: [
					'70px',
					{
						lineHeight: '85px',
						letterSpacing: '-0.3px',
						fontWeight: 700,
					},
				],
				title: [
					'50px',
					{
						lineHeight: '60px',
						letterSpacing: '-0.3px',
						fontWeight: 600,
					},
				],
				subtitle: [
					'35px',
					{
						lineHeight: '45px',
						letterSpacing: '-0.3px',
						fontWeight: 600,
					},
				],
				button: [
					'16px',
					{
						lineHeight: '24px',
						letterSpacing: '0.5px',
						fontWeight: 500,
					},
				],
				pl: [
					'16px',
					{
						lineHeight: '22px',
						fontWeight: 300,
					},
				],
				pm: [
					'14px',
					{
						lineHeight: '20px',
						fontWeight: 300,
					},
				],
			},
			fontFamily: {
				'poppins-600': ['Poppins-600', ...defaultTheme.fontFamily.sans],
				'poppins-700': ['Poppins-700', ...defaultTheme.fontFamily.sans],
				'roboto-300': ['Roboto-300', ...defaultTheme.fontFamily.sans],
				'roboto-400': ['Roboto-400', ...defaultTheme.fontFamily.sans],
				'roboto-500': ['Roboto-500', ...defaultTheme.fontFamily.sans],
				'roboto-700': ['Roboto-500', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
