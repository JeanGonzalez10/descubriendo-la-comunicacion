"use client";

import { motion } from "framer-motion";
import { itemVariants, Colors } from "./utilsComunicacion";
import { BorderDecorations } from "@/components/UI";

export function CitaDecorada() {
	return (
		<motion.div
			variants={itemVariants}
			className="mt-12 text-center max-w-3xl mx-auto relative glass-card p-8">
			{/* Elementos decorativos */}
			<div className="absolute inset-0 -z-10 opacity-10 overflow-hidden rounded-lg">
				<div className="geometric-pattern"></div>
			</div>

			{/* Líneas decorativas */}
			<BorderDecorations
				topGradient={Colors.gradients.blue}
				bottomGradient={Colors.gradients.pink}
				opacity={0.8}
			/>

			{/* Círculos decorativos */}
			<div
				className="absolute -top-4 -left-4 w-8 h-8 rounded-full"
				style={{ background: Colors.gradients.blue, opacity: 0.6 }}></div>
			<div
				className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full"
				style={{ background: Colors.gradients.pink, opacity: 0.6 }}></div>

			<p
				className="text-sm sm:text-base md:text-lg italic font-light glow-text mb-3"
				style={{ color: Colors.primary.main }}>
				{" "}
				&ldquo;La comunicación es una herramienta transformadora, capaz de
				conectar ideas y crear puentes donde antes existían barreras.&rdquo;
			</p>
			<p
				className="text-xs sm:text-sm mt-2"
				style={{ color: Colors.accent.green }}>
				{" "}
				- Manual del Comunicador, Vol. III
			</p>
		</motion.div>
	);
}
