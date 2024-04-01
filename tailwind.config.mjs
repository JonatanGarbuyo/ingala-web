/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			blue: '#4f7fe5',
			orange: '#fd8230',
			pink: '#E6B3B6',
			lightGrey: '#E7E3E2',
			darkGreen: '#25864D',
			lightGreen: '#74C26C',
			yellow: '#EBB93F',
			darkGrey: '#494949',
		},
		fontSize: {
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
		extend: {
			fontFamily: {
				poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
