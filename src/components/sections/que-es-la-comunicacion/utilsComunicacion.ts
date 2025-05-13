"use client";

// Definiciones de colores de Hogwarts
export const hogwartsColors = {
	gryffindor: {
		primary: "#740001",
		secondary: "#D3A625",
	},
	hufflepuff: {
		primary: "#ECB939",
		secondary: "#372E29",
	},
	ravenclaw: {
		primary: "#0E1A40",
		secondary: "#946B2D",
	},
	slytherin: {
		primary: "#1A472A",
		secondary: "#5D5D5D",
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
