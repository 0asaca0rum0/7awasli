/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app.{js,jsx,ts,tsx}",
		"./app/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#1bcf43",
				secondary: "#ffed4a",
				danger: "#e3342f",
			},
			backgroundImage: {
				login: "url('login.png')",
			},
		},
	},
	plugins: [],
};
