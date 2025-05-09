/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx}",
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			xs: "475px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		extend: {
			spacing: {},
			padding: {},
			animation: {
				shine: "shine 1.5s linear infinite",
			},
			keyframes: {
				shine: {
					"0%": { left: "-100%" },
					"100%": { left: "200%" },
				},
			},
		},
	},
	plugins: [],
};
