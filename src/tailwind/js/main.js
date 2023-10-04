/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx}", "./public/*.html"],
	theme: {
		extend: {
			colors: {
				"custom-primary": "#0a3355",
				"sub-primary": "#ecaa00",
				secondary: "#cfd7e5",
				success: "#26c882",
				danger: "#ef6060",
				warning: "#ff8d29",
				info: "#40dec3",
				"checkout-primary": "#f2994a",
			},
			boxShadow: {
        'lenon': '0px 0px 40px 15px rgba(0, 0, 0, 0.3)',
      },
			backgroundImage: {
        'hero-pattern': "url('../images/blur-radial.svg')",
      }
		},
	},
	plugins: [],
};
