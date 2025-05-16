"use client";

// Definiciones de colores para la sección de comunicación
export const Colors = {
	primary: {
		main: "#00CFFF",
		light: "#33D9FF",
		dark: "#00A6CC",
	},
	secondary: {
		main: "#FF3D7F",
		light: "#FF639B",
		dark: "#CC3166",
	},
	accent: {
		orange: "#FF8C42",
		green: "#2AFFA5",
		purple: "#9B5DE5",
	},
	neutral: {
		light: "#F5F5F5",
		dark: "#1A1A1A",
	},
	gradients: {
		blue: "linear-gradient(135deg, #00CFFF, #2AFFA5)",
		pink: "linear-gradient(135deg, #FF3D7F, #9B5DE5)",
		purple: "linear-gradient(135deg, #9B5DE5, #FF3D7F)",
		green: "linear-gradient(135deg, #2AFFA5, #00CFFF)",
		mixed: "linear-gradient(135deg, #00CFFF, #FF3D7F, #FF8C42)",
	},
};

// Efectos de animación para elementos
export const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.2,
		},
	},
};

export const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

// Animación de aparición tipo pergamino
export const pergaminoVariants = {
	hidden: { opacity: 0, scale: 0.8, y: 30 },
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 120,
			damping: 15,
			delay: 0.3,
		},
	},
	hover: {
		scale: 1.03,
		boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
		transition: { duration: 0.3 },
	},
};
