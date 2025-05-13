"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
	containerVariants,
	pergaminoVariants,
	itemVariants,
	hogwartsColors,
} from "./utilsComunicacion";

export function DesinformacionFakeNews() {
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
						DESINFORMACIÓN Y
					</motion.span>
					<motion.span
						className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] font-black leading-[1.1] font-serif"
						style={{ color: hogwartsColors.gryffindor.secondary }}
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}>
						FAKE NEWS
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
						<motion.div
							variants={itemVariants}
							className="flex flex-col md:flex-row gap-6 items-center">
							<div className="flex-1">
								<h3
									className="text-xl sm:text-2xl font-serif font-bold mb-3"
									style={{ color: hogwartsColors.gryffindor.secondary }}>
									El Peligro de la Desinformación
								</h3>
								<p className="text-base sm:text-lg text-white/90 leading-relaxed">
									La desinformación, también llamada{" "}
									<span
										className="font-bold"
										style={{ color: hogwartsColors.gryffindor.primary }}>
										fake news
									</span>{" "}
									o{" "}
									<span
										className="font-bold"
										style={{ color: hogwartsColors.gryffindor.secondary }}>
										infodemia
									</span>
									, es la propagación de información falsa o incompleta que
									manipula la percepción de la realidad de las personas,
									afectándolas emocionalmente. Un ejemplo es la propaganda rusa
									en el conflicto de Ucrania.
								</p>

								{/* Consejos para identificar fake news */}
								<div className="mt-6 bg-gradient-to-r from-amber-900/10 to-amber-700/10 p-4 rounded-lg border border-amber-500/20">
									<h4
										className="text-lg font-serif mb-3"
										style={{ color: hogwartsColors.gryffindor.secondary }}>
										¿Cómo detectar noticias falsas?
									</h4>
									<ul className="list-disc pl-5 space-y-2 text-white/80">
										<li>Verifica la fuente de la información</li>
										<li>Contrasta con múltiples medios confiables</li>
										<li>Revisa la fecha de publicación</li>
										<li>Identifica si es contenido satírico o humorístico</li>
										<li>Analiza si hay intencionalidad o sesgo</li>
										<li>Consulta a expertos o sitios de fact-checking</li>
									</ul>
								</div>
							</div>

							<div className="w-full md:w-2/5 flex-shrink-0">
								<div className="relative w-full h-auto rounded-lg overflow-hidden shadow-xl">
									{/* Efecto de marco mágico */}
									<div className="absolute inset-0 border-2 border-amber-500/30 rounded-lg"></div>
									{/* Imagen de fake news */}{" "}
									<Image
										src="/images/noticias-falsas.png"
										alt="Guía para identificar noticias falsas"
										className="w-full h-auto rounded-lg"
										width={500}
										height={300}
										style={{ width: "100%", height: "auto" }}
									/>
									{/* Esquinas decorativas */}
									<div
										className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 pointer-events-none"
										style={{
											borderColor: hogwartsColors.gryffindor.secondary,
										}}></div>
									<div
										className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 pointer-events-none"
										style={{
											borderColor: hogwartsColors.gryffindor.secondary,
										}}></div>
									<div
										className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 pointer-events-none"
										style={{
											borderColor: hogwartsColors.gryffindor.secondary,
										}}></div>
									<div
										className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 pointer-events-none"
										style={{
											borderColor: hogwartsColors.gryffindor.secondary,
										}}></div>
								</div>
							</div>
						</motion.div>

						{/* Separador con estilo de varita */}
						<div className="flex items-center gap-3 py-4">
							<div className="h-px bg-amber-500/30 flex-1"></div>
							<div className="w-3 h-3 rounded-full bg-amber-400/50"></div>
							<div className="h-px bg-amber-500/30 flex-1"></div>
						</div>

						<motion.div variants={itemVariants} className="text-center">
							<p
								className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed italic"
								style={{ color: `${hogwartsColors.gryffindor.secondary}CC` }}>
								&ldquo;La desinformación es como un Confundus potente: nubla el
								juicio y distorsiona la realidad. Solo con conocimiento y
								pensamiento crítico podemos contrarrestar su hechizo&rdquo;
							</p>
							<p className="text-xs sm:text-sm text-white/60 text-center mt-2">
								- Manual del Comunicador Moderno
							</p>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
