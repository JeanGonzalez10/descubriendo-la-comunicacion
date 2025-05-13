"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Variantes de animación
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export function EntrevistaEstudiantes() {
	const [isVideoLoaded, setIsVideoLoaded] = useState(false);

	return (
		<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="flex flex-col items-center">
				{" "}
				{/* Título de la sección */}
				<motion.h2
					variants={itemVariants}
					className="text-center mb-2 sm:mb-4 md:mb-6 flex flex-col gap-1">
					<motion.span
						className="text-[30px] sm:text-[35px] md:text-[45px] lg:text-[50px] font-black leading-[1.1]"
						style={{ color: "#946B2D" }}
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}>
						ENTREVISTAS A
					</motion.span>
					<motion.span
						className="text-[25px] sm:text-[30px] md:text-[40px] lg:text-[45px] font-black leading-[1.1]"
						style={{ color: "#D3A625" }}
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}>
						ESTUDIANTES Y EGRESADOS
					</motion.span>
				</motion.h2>
				{/* Subtítulo */}
				<motion.p
					variants={itemVariants}
					className="text-base sm:text-lg text-center text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-3xl">
					Facultad de Comunicación en la Universidad de Medellín
				</motion.p>{" "}
				{/* Contenedor del video con efecto de carga */}
				<motion.div
					variants={itemVariants}
					className="w-full max-w-4xl mx-auto aspect-video relative rounded-xl overflow-hidden shadow-2xl"
					style={{
						background: "linear-gradient(45deg, #111, #222)",
						boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.5)",
					}}>
					{/* Overlay de carga */}
					{!isVideoLoaded && (
						<div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-10">
							<div className="flex flex-col items-center">
								<div className="w-12 h-12 border-4 border-white/20 border-t-amber-400 rounded-full animate-spin mb-4"></div>
								<p className="text-amber-400 font-medium">
									Cargando entrevista...
								</p>
							</div>
						</div>
					)}

					{/* Marco decorativo */}
					<div className="absolute inset-0 pointer-events-none z-20">
						<div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-amber-400/60"></div>
						<div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-amber-400/60"></div>
						<div className="absolute bottom-2 left-2 w-6 h-6 border-b border-l border-amber-400/60"></div>
						<div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-amber-400/60"></div>
					</div>

					{/* Video de YouTube */}
					<iframe
						src="https://www.youtube.com/embed/tL18Zi1EMmE"
						title="Entrevistas a Estudiantes y Egresados de la Facultad de Comunicación"
						className="absolute inset-0 w-full h-full"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						onLoad={() => setIsVideoLoaded(true)}></iframe>
				</motion.div>{" "}
				{/* Descripción del video */}
				<motion.div
					variants={itemVariants}
					className="mt-6 sm:mt-8 max-w-3xl mx-auto text-center">
					<p className="text-white/70 text-sm sm:text-base md:text-lg">
						Conoce de primera mano las experiencias de estudiantes y egresados
						de la Facultad de Comunicación. En esta entrevista, comparten sus
						perspectivas sobre el programa, oportunidades profesionales y el
						impacto de la comunicación en sus carreras.
					</p>
				</motion.div>
			</motion.div>
		</div>
	);
}
