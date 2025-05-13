"use client";

import { motion } from "framer-motion";
import { itemVariants, hogwartsColors } from "./utilsComunicacion";

export function CitaDecorada() {
	return (
		<motion.div
			variants={itemVariants}
			className="mt-12 text-center max-w-3xl mx-auto relative">
			{/* Elemento decorativo de pergamino */}
			<div className="absolute inset-0 -z-10 opacity-5 transform -skew-y-1">
				<div
					className="h-full w-full border-2 rounded-lg"
					style={{ borderColor: hogwartsColors.gryffindor.secondary }}></div>
			</div>

			{/* Pequeñas varitas decorativas */}
			<div
				className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 opacity-30"
				style={{
					background: `linear-gradient(to right, transparent, ${hogwartsColors.gryffindor.secondary}, transparent)`,
				}}></div>
			<div
				className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 opacity-30"
				style={{
					background: `linear-gradient(to right, transparent, ${hogwartsColors.gryffindor.secondary}, transparent)`,
				}}></div>

			<p
				className="text-sm sm:text-base md:text-lg italic font-serif"
				style={{ color: `${hogwartsColors.gryffindor.secondary}B3` }}>
				{" "}
				{/* B3 = 70% opacity */}
				&ldquo;La comunicación es como el encantamiento más poderoso, capaz de
				transformar el entendimiento y crear puentes donde antes había
				abismos.&rdquo;
			</p>
			<p
				className="text-xs sm:text-sm mt-2"
				style={{ color: `${hogwartsColors.gryffindor.secondary}80` }}>
				{" "}
				{/* 80 = 50% opacity */}- Manual de Hechizos Comunicativos, Vol. III
			</p>
		</motion.div>
	);
}
