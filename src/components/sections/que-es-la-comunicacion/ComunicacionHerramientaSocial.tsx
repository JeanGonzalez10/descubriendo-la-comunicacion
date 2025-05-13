"use client";

import { motion } from "framer-motion";
import {
	containerVariants,
	pergaminoVariants,
	itemVariants,
	hogwartsColors,
} from "./utilsComunicacion";

export function ComunicacionHerramientaSocial() {
	return (
		<div className="mt-32 mb-8">
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="text-center mb-10">
				<h2 className="flex flex-col gap-1 relative">
					<motion.span
						className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[50px] font-black leading-[1.1] font-serif"
						style={{ color: hogwartsColors.gryffindor.primary }}
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}>
						IMPORTANCIA DE LA
					</motion.span>
					<motion.span
						className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] font-black leading-[1.1] font-serif"
						style={{ color: hogwartsColors.gryffindor.secondary }}
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}>
						COMUNICACIÓN COMO HERRAMIENTA SOCIAL
					</motion.span>
				</h2>
			</motion.div>

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
						}}></div>
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

					<div className="space-y-8 relative z-10">
						<motion.div variants={itemVariants} className="flex flex-col gap-6">
							<p
								className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed text-center italic mb-6"
								style={{ color: `${hogwartsColors.gryffindor.secondary}CC` }}>
								&ldquo;Las palabras son, en mi nada humilde opinión, nuestra más
								inagotable fuente de magia&rdquo;
							</p>
							<p className="text-xs sm:text-sm text-white/60 text-center">
								- Albus Dumbledore
							</p>

							<p className="text-base sm:text-lg text-white/90 leading-relaxed mt-4">
								La comunicación es una{" "}
								<span
									className="font-bold"
									style={{ color: hogwartsColors.gryffindor.secondary }}>
									herramienta social
								</span>{" "}
								porque tiene el poder de influir en las actitudes y
								comportamientos de las personas. El comunicado utiliza esta
								herramienta para promover cambios dentro de la sociedad,
								denunciar injusticias o resaltar problemas, e incluso impulsar
								movimientos que favorezcan el bienestar común.
							</p>

							{/* Separador con estilo de varita */}
							<div className="flex items-center gap-3 py-4">
								<div className="h-px bg-amber-500/30 flex-1"></div>
								<div className="w-3 h-3 rounded-full bg-amber-400/50"></div>
								<div className="h-px bg-amber-500/30 flex-1"></div>
							</div>

							{/* Contenedor del video */}
							<div className="w-full aspect-video overflow-hidden rounded-lg shadow-2xl relative">
								<div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-amber-900/20 pointer-events-none z-10"></div>
								<iframe
									className="w-full h-full"
									src="https://www.youtube.com/embed/AcbAogO_ORA"
									title="Importancia de la comunicación como herramienta social"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen></iframe>

								{/* Marcos decorativos en las esquinas del video */}
								<div
									className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 pointer-events-none z-20"
									style={{
										borderColor: hogwartsColors.gryffindor.secondary,
									}}></div>
								<div
									className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 pointer-events-none z-20"
									style={{
										borderColor: hogwartsColors.gryffindor.secondary,
									}}></div>
								<div
									className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 pointer-events-none z-20"
									style={{
										borderColor: hogwartsColors.gryffindor.secondary,
									}}></div>
								<div
									className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 pointer-events-none z-20"
									style={{
										borderColor: hogwartsColors.gryffindor.secondary,
									}}></div>
							</div>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
