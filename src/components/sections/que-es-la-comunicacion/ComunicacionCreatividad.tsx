"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
	containerVariants,
	pergaminoVariants,
	itemVariants,
	hogwartsColors,
} from "./utilsComunicacion";

export function ComunicacionCreatividad() {
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
						LA COMUNICACIÓN Y
					</motion.span>
					<motion.span
						className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] font-black leading-[1.1] font-serif"
						style={{ color: hogwartsColors.gryffindor.secondary }}
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}>
						LA CREATIVIDAD
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
							<p className="text-base sm:text-lg text-white/90 leading-relaxed">
								La comunicación no solo transmite ideas, también{" "}
								<span
									className="font-bold"
									style={{ color: hogwartsColors.gryffindor.secondary }}>
									inspira nuevas formas de expresión
								</span>
								. Al intercambiar pensamientos, emociones y experiencias,
								fomenta la creación de obras artísticas innovadoras, permite
								conectar con diferentes culturas y abre caminos para explorar
								identidades personales y colectivas.
							</p>
							{/* Separador con estilo de varita */}
							<div className="flex items-center gap-3 py-4">
								<div className="h-px bg-amber-500/30 flex-1"></div>
								<div className="w-3 h-3 rounded-full bg-amber-400/50"></div>
								<div className="h-px bg-amber-500/30 flex-1"></div>
							</div>{" "}
							{/* Collage de imágenes - Dos pequeñas arriba, una grande abajo */}
							<div className="flex flex-col gap-6 mt-4">
								{/* Fila superior con dos imágenes pequeñas, una al lado de la otra */}
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
									{/* Primera imagen (Escultura) */}
									<motion.div
										className="relative overflow-hidden rounded-lg shadow-lg h-full"
										whileHover={{ scale: 1.02 }}
										transition={{ duration: 0.3 }}>
										<div className="relative aspect-[4/3] w-full h-full">
											<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>{" "}
											<Image
												src="/images/escultura.png"
												alt="Escultura de Subodh Gupta"
												className="w-full h-full object-cover"
												fill
												sizes="(max-width: 768px) 100vw, 50vw"
											/>
											{/* Esquinas decorativas */}
											<div
												className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 pointer-events-none z-20"
												style={{
													borderColor: hogwartsColors.gryffindor.secondary,
												}}></div>
											<div
												className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 pointer-events-none z-20"
												style={{
													borderColor: hogwartsColors.gryffindor.secondary,
												}}></div>
											<div
												className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 pointer-events-none z-20"
												style={{
													borderColor: hogwartsColors.gryffindor.secondary,
												}}></div>
											<div
												className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 pointer-events-none z-20"
												style={{
													borderColor: hogwartsColors.gryffindor.secondary,
												}}></div>
											<div className="absolute bottom-0 left-0 right-0 p-3 z-20">
												{" "}
												<p className="text-xs sm:text-sm text-white/90 italic line-clamp-3">
													&ldquo;Subodh Gupta usa objetos cotidianos para crear
													esculturas que comunican el choque entre tradiciones
													rurales y modernización urbana en India.&rdquo;
												</p>
											</div>
										</div>
									</motion.div>

									{/* Segunda imagen (Freedom) */}
									<motion.div
										className="relative overflow-hidden rounded-lg shadow-lg h-full"
										whileHover={{ scale: 1.02 }}
										transition={{ duration: 0.3 }}>
										<div className="relative aspect-[4/3] w-full h-full">
											<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>{" "}
											<Image
												src="/images/Freedom.png"
												alt="Stencil de protesta en Hong Kong"
												className="w-full h-full object-cover"
												fill
												sizes="(max-width: 768px) 100vw, 50vw"
											/>
											{/* Esquinas decorativas */}
											<div
												className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 pointer-events-none z-20"
												style={{
													borderColor: hogwartsColors.gryffindor.secondary,
												}}></div>
											<div
												className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 pointer-events-none z-20"
												style={{
													borderColor: hogwartsColors.gryffindor.secondary,
												}}></div>
											<div
												className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 pointer-events-none z-20"
												style={{
													borderColor: hogwartsColors.gryffindor.secondary,
												}}></div>
											<div
												className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 pointer-events-none z-20"
												style={{
													borderColor: hogwartsColors.gryffindor.secondary,
												}}></div>
											<div className="absolute bottom-0 left-0 right-0 p-3 z-20">
												{" "}
												<p className="text-xs sm:text-sm text-white/90 italic line-clamp-3">
													&ldquo;Stencil de protesta. Las calles de Hong Kong se
													llenaron de grafitis con mensajes de
													&apos;Freedom&apos; debido a una ley de extradición en
													2019.&rdquo;
												</p>
											</div>
										</div>
									</motion.div>
								</div>{" "}
								{/* Imagen inferior grande (Black Lives Matter) con decoración mágica */}
								<motion.div
									className="relative overflow-hidden rounded-lg shadow-lg mt-2"
									whileHover={{ scale: 1.01 }}
									transition={{ duration: 0.3 }}>
									<div className="relative aspect-video sm:aspect-[21/9] w-full">
										<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>{" "}
										<Image
											src="/images/black-lives-matter.png"
											alt="Black Lives Matter mural"
											className="w-full h-full object-cover"
											fill
											sizes="(max-width: 768px) 100vw, 90vw"
										/>
										{/* Esquinas decorativas */}
										<div
											className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 pointer-events-none z-20"
											style={{
												borderColor: hogwartsColors.gryffindor.secondary,
											}}></div>
										<div
											className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 pointer-events-none z-20"
											style={{
												borderColor: hogwartsColors.gryffindor.secondary,
											}}></div>
										<div
											className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 pointer-events-none z-20"
											style={{
												borderColor: hogwartsColors.gryffindor.secondary,
											}}></div>
										<div
											className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 pointer-events-none z-20"
											style={{
												borderColor: hogwartsColors.gryffindor.secondary,
											}}></div>
										<div className="absolute bottom-0 left-0 right-0 p-4 z-20">
											{" "}
											<p className="text-xs sm:text-sm md:text-base text-white/90 italic">
												&ldquo;Muralismo &apos;Black Lives Matter&apos;, sobre
												algunas calles de Estados Unidos después del asesinato
												de George Floyd.&rdquo;
											</p>
										</div>
									</div>
								</motion.div>
							</div>
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
									&ldquo;El arte es la forma más poderosa de magia sin varita;
									transforma realidades, revela verdades ocultas y nos invita a
									ver el mundo desde nuevos ángulos.&rdquo;
								</p>
								<p className="text-xs sm:text-sm text-white/60 text-center mt-2">
									- Tratado de Expresiones Mágicas Contemporáneas
								</p>
							</motion.div>
						</motion.div>
					</div>

					{/* Elemento decorativo mágico */}
					<div className="absolute bottom-6 right-6 w-20 h-20 opacity-10">
						<div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-transparent rounded-full blur-md animate-pulse"></div>
						<div className="absolute inset-0 border border-amber-500/30 rounded-full"></div>
						<div className="absolute inset-4 border border-amber-500/30 rounded-full"></div>
						<div className="absolute inset-8 border border-amber-500/30 rounded-full"></div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
