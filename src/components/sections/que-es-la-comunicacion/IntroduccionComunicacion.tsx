"use client";

import { motion } from "framer-motion";
import {
	itemVariants,
	pergaminoVariants,
	hogwartsColors,
} from "./utilsComunicacion";

export function IntroduccionComunicacion() {
	return (
		<motion.div
			variants={pergaminoVariants}
			initial="hidden"
			animate="visible"
			whileHover="hover"
			className="relative max-w-5xl mx-auto">
			<div className="absolute inset-0 bg-gradient-to-b from-amber-100/5 via-amber-50/10 to-amber-100/5 opacity-20 rounded-xl"></div>
			<div className="bg-gradient-to-br from-amber-900/20 via-amber-800/10 to-amber-900/20 backdrop-blur-sm border border-amber-700/20 rounded-xl p-8 sm:p-10 md:p-12 shadow-xl relative overflow-hidden">
				{/* Ornamentos tipo Potter con colores de Gryffindor */}
				<div
					className="absolute top-0 left-0 w-full h-2"
					style={{
						background: `linear-gradient(to right, ${hogwartsColors.gryffindor.primary}40, ${hogwartsColors.gryffindor.secondary}40, ${hogwartsColors.gryffindor.primary}40)`,
					}}></div>
				<div
					className="absolute bottom-0 left-0 w-full h-2"
					style={{
						background: `linear-gradient(to right, ${hogwartsColors.gryffindor.primary}40, ${hogwartsColors.gryffindor.secondary}40, ${hogwartsColors.gryffindor.primary}40)`,
					}}></div>{" "}
				<div
					className="absolute top-2 left-2 w-10 h-10 border-t-2 border-l-2"
					style={{
						borderColor: `${hogwartsColors.gryffindor.secondary}40`,
					}}></div>
				<div
					className="absolute top-2 right-2 w-10 h-10 border-t-2 border-r-2"
					style={{
						borderColor: `${hogwartsColors.gryffindor.secondary}40`,
					}}></div>
				<div
					className="absolute bottom-2 left-2 w-10 h-10 border-b-2 border-l-2"
					style={{
						borderColor: `${hogwartsColors.gryffindor.secondary}40`,
					}}></div>
				<div
					className="absolute bottom-2 right-2 w-10 h-10 border-b-2 border-r-2"
					style={{
						borderColor: `${hogwartsColors.gryffindor.secondary}40`,
					}}></div>
				{/* Contenido del pergamino */}
				<div className="space-y-8 relative z-10">
					{/* Sección 1: Introducción */}
					<motion.div
						variants={itemVariants}
						className="flex flex-col md:flex-row gap-6 items-center">
						<div className="flex-1">
							{" "}
							<h3
								className="text-xl sm:text-2xl font-serif font-bold mb-3"
								style={{ color: hogwartsColors.gryffindor.secondary }}>
								El Fundamento Mágico de la Sociedad
							</h3>{" "}
							<p className="text-base sm:text-lg text-white/90 leading-relaxed">
								<span
									className="font-bold"
									style={{ color: hogwartsColors.gryffindor.secondary }}>
									La comunicación
								</span>{" "}
								es una base fundamental para la sociedad, que permite expresar
								opiniones, construir identidad, cultura y fomentar el desarrollo
								personal, como un verdadero hechizo que conecta mentes y
								corazones.
							</p>
						</div>
						<div className="w-full md:w-1/3 flex-shrink-0">
							<div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto">
								<div className="absolute inset-0 bg-gradient-to-br from-[#D3A625]/20 to-[#740001]/20 rounded-full animate-pulse"></div>
								<div className="absolute inset-0 flex items-center justify-center">
									<svg
										width="60%"
										height="60%"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="text-amber-400">
										<path
											d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
											stroke="currentColor"
											strokeWidth="2"
										/>
										<path
											d="M8 12H16M12 8V16"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
										/>
									</svg>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Separador con estilo de varita */}
					<div className="flex items-center gap-3 py-2">
						<div className="h-px bg-amber-500/30 flex-1"></div>
						<div className="w-3 h-3 rounded-full bg-amber-400/50"></div>
						<div className="h-px bg-amber-500/30 flex-1"></div>
					</div>

					{/* Sección 2: Realidades */}
					<motion.div
						variants={itemVariants}
						className="flex flex-col md:flex-row-reverse gap-6 items-center">
						<div className="flex-1">
							{" "}
							<h3
								className="text-xl sm:text-2xl font-serif font-bold mb-3"
								style={{ color: hogwartsColors.gryffindor.secondary }}>
								El Encantamiento Transformador
							</h3>{" "}
							<p className="text-base sm:text-lg text-white/90 leading-relaxed">
								Más que transmitir información,{" "}
								<span
									className="font-bold"
									style={{ color: hogwartsColors.gryffindor.primary }}>
									crea realidades
								</span>
								, impulsa la participación ciudadana, fortalece la democracia y
								promueve el pensamiento crítico, como un poderoso hechizo que
								puede cambiar el curso de toda una comunidad.
							</p>
						</div>
						<div className="w-full md:w-1/3 flex-shrink-0">
							<div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto">
								<div className="absolute inset-0 bg-gradient-to-br from-[#740001]/20 to-[#D3A625]/20 rounded-full animate-pulse"></div>
								<div className="absolute inset-0 flex items-center justify-center">
									<svg
										width="60%"
										height="60%"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="text-[#740001]">
										<path
											d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
											stroke="currentColor"
											strokeWidth="2"
										/>
										<path
											d="M12 8L12 16M16 12L8 12"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
										/>
									</svg>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Separador con estilo de varita */}
					<div className="flex items-center gap-3 py-2">
						<div className="h-px bg-amber-500/30 flex-1"></div>
						<div className="w-3 h-3 rounded-full bg-amber-400/50"></div>
						<div className="h-px bg-amber-500/30 flex-1"></div>
					</div>

					{/* Sección 3: Era Digital */}
					<motion.div
						variants={itemVariants}
						className="flex flex-col md:flex-row gap-6 items-center">
						<div className="flex-1">
							{" "}
							<h3
								className="text-xl sm:text-2xl font-serif font-bold mb-3"
								style={{ color: hogwartsColors.gryffindor.secondary }}>
								El Mundo Digital: Un Nuevo Alohomora
							</h3>{" "}
							<p className="text-base sm:text-lg text-white/90 leading-relaxed">
								En la era digital, ha diversificado los espacios laborales, ha{" "}
								<span
									className="font-bold"
									style={{ color: hogwartsColors.gryffindor.secondary }}>
									potenciado la creatividad y la libertad profesional
								</span>
								, y actúa como un vocero de las comunidades y los conflictos
								sociales, abriendo puertas como el hechizo Alohomora.
							</p>
						</div>
						<div className="w-full md:w-1/3 flex-shrink-0">
							<div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto">
								<div className="absolute inset-0 bg-gradient-to-br from-[#D3A625]/20 to-[#740001]/20 rounded-full animate-pulse"></div>
								<div className="absolute inset-0 flex items-center justify-center">
									<svg
										width="60%"
										height="60%"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="text-amber-400">
										<path
											d="M21 7L13 7M21 7C21 8.65685 19.6569 10 18 10C16.3431 10 15 8.65685 15 7C15 5.34315 16.3431 4 18 4C19.6569 4 21 5.34315 21 7ZM11 17L3 17M11 17C11 18.6569 9.65685 20 8 20C6.34315 20 5 18.6569 5 17C5 15.3431 6.34315 14 8 14C9.65685 14 11 15.3431 11 17ZM17 17L21 17M3 7L9 7"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
										/>
									</svg>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
				{/* Sello mágico */}
				<div className="absolute bottom-4 right-4 w-16 h-16 opacity-20">
					<div className="absolute inset-0 border-2 border-amber-500/30 rounded-full"></div>
					<div className="absolute inset-3 border border-amber-500/30 rounded-full"></div>
					<div className="absolute inset-6 border border-amber-500/30 rounded-full"></div>
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="w-2 h-2 bg-amber-400/50 rounded-full"></div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
