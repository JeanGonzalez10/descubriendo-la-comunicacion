"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SectionId } from "@/types/sectionId";
import { careerLinks } from "@/data/careerLinks";
import { careerInfo } from "@/data/careerInfo";

export function CardCareer() {
	const [expandedSection, setExpandedSection] = useState<SectionId | null>(
		null
	);

	const sections: SectionId[] = ["CED", "CRC", "CLA", "CGP"];

	const handleClick = (id: SectionId) => {
		if (expandedSection === id) {
			window.open(careerLinks[id], "_blank", "noopener,noreferrer");
		} else {
			setExpandedSection(id);
		}
	};

	const renderDescription = (id: SectionId) => {
		switch (id) {
			case "CED":
				return (
					<>
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.3, delay: 0.1 }}
							className="text-white text-sm sm:text-base md:text-lg leading-snug mb-2">
							¿Te encanta crear contenido digital y conectar con audiencias?
						</motion.p>
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.3, delay: 0.2 }}
							className="text-white/90 text-sm sm:text-base">
							La carrera de{" "}
							<span className="text-[#2AFFA5] font-semibold">
								Comunicación y Entretenimiento Digital
							</span>{" "}
							es perfecta para ti.
						</motion.p>
					</>
				);
			case "CRC":
				return (
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3 }}
						className="text-white text-sm sm:text-base">
						Si te interesa liderar procesos de comunicación estratégica y
						construir reputación, la carrera de{" "}
						<span className="text-[#2AFFA5] font-semibold">
							Comunicación y Relaciones Corporativas
						</span>{" "}
						es tu camino.
					</motion.p>
				);
			case "CLA":
				return (
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3 }}
						className="text-white text-sm sm:text-base">
						Si sueñas con contar historias a través del cine, la fotografía o la
						producción audiovisual, la carrera de{" "}
						<span className="text-[#2AFFA5] font-semibold">
							Comunicación y Lenguajes Audiovisuales
						</span>{" "}
						es tu espacio creativo.
					</motion.p>
				);
			case "CGP":
				return (
					<>
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.3, delay: 0.1 }}
							className="text-white text-sm sm:text-base md:text-lg leading-snug mb-2">
							¿Te apasiona el diseño y la forma en que una imagen transforma un
							mensaje?
						</motion.p>
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.3, delay: 0.2 }}
							className="text-white/90 text-sm sm:text-base">
							La carrera de{" "}
							<span className="text-[#2AFFA5] font-semibold">
								Comunicación Gráfica Publicitaria
							</span>{" "}
							es para ti.
						</motion.p>
					</>
				);
			default:
				return null;
		}
	};

	return (
		<div className="w-full max-w-7xl mx-auto px-4 py-12">
			{/* Escudo central flotante */}
			<motion.div
				className="w-full flex justify-center mb-10"
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}>
				<div className="relative w-[100px] h-[100px] sm:w-[200px] sm:h-[200px]">
					<Image
						src="/images/logo-UDEM.png"
						alt="Escudo UdeMedellín"
						fill
						className="object-contain drop-shadow-2xl"
					/>
				</div>
			</motion.div>

			{/* Grid de tarjetas modernas */}
			<AnimatePresence>
				{expandedSection ? (
					<motion.div
						key="expanded-view"
						className="w-full"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}>
						<motion.div
							className="relative w-full h-[500px] sm:h-[600px] rounded-3xl overflow-hidden"
							layoutId={`card-container-${expandedSection}`}>
							{/* Fondo con imagen */}
							<div className="absolute inset-0">
								<Image
									src={`/images/backgrounds/${expandedSection}-FONDO.png`}
									alt={`Fondo ${expandedSection}`}
									fill
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
							</div>
							{/* Botón para volver */}{" "}
							<motion.button
								onClick={() => setExpandedSection(null)}
								className="absolute top-4 right-4 z-30 bg-[#1A1A1A]/40 backdrop-blur-md rounded-full p-2 hover:bg-[#9B5DE5]/30 border border-[#9B5DE5]/40 transition-colors"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="text-white">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</motion.button>
							{/* Contenido */}
							<div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10">
								<motion.div
									layoutId={`card-badge-${expandedSection}`}
									className="mb-4">
									<div className="inline-block bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full border border-white/20">
										<div className="flex items-center gap-2">
											<span className="text-2xl">
												{careerInfo[expandedSection].icon}
											</span>
											<span className="text-white font-medium">
												{expandedSection}
											</span>
										</div>
									</div>
								</motion.div>
								<motion.h2
									layoutId={`card-title-${expandedSection}`}
									className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
									{careerInfo[expandedSection].title}
								</motion.h2>{" "}
								<motion.div
									className="bg-[#1A1A1A]/60 backdrop-blur-md rounded-2xl p-5 border border-[#9B5DE5]/20 mb-4"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.2, duration: 0.3 }}>
									{renderDescription(expandedSection)}
								</motion.div>{" "}
								<motion.button
									onClick={() => handleClick(expandedSection)}
									className="bg-[#2AFFA5] hover:bg-opacity-90 text-[#1A1A1A] font-medium rounded-full px-8 py-3 transition-colors w-full sm:w-auto"
									whileHover={{ scale: 1.03 }}
									whileTap={{ scale: 0.97 }}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3, duration: 0.3 }}>
									Conocer más sobre esta carrera
								</motion.button>
							</div>
						</motion.div>
					</motion.div>
				) : (
					<motion.div
						key="grid-view"
						className="grid grid-cols-1 sm:grid-cols-2 gap-6"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}>
						{sections.map((id, index) => (
							<motion.div
								key={id}
								layoutId={`card-container-${id}`}
								onClick={() => handleClick(id as SectionId)}
								className="group relative h-[250px] sm:h-[280px] rounded-3xl overflow-hidden cursor-pointer"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: index * 0.1 }}
								whileHover={{
									scale: 1.03,
									transition: { duration: 0.2 },
								}}>
								{/* Fondo con imagen */}
								<div className="absolute inset-0 overflow-hidden rounded-3xl transform group-hover:scale-110 transition-transform duration-700">
									<Image
										src={`/images/backgrounds/${id}-FONDO.png`}
										alt={`${id} background`}
										fill
										className="object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 to-transparent" />

									{/* Overlay de color dinámico */}
									<div
										className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
										style={{
											background: `linear-gradient(180deg, transparent 0%, ${
												careerInfo[id as SectionId].color
											} 100%)`,
										}}
									/>
								</div>

								{/* Emblema / Imagen */}
								<div className="absolute top-6 right-6 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] opacity-70 group-hover:opacity-100 transition-opacity">
									<Image
										src={`/images/banderines/${id}-BANDERIN.png`}
										alt={`${id} emblema`}
										fill
										className="object-contain drop-shadow-lg"
									/>
								</div>

								{/* Contenido */}
								<div className="absolute bottom-0 left-0 w-full p-6">
									<motion.div layoutId={`card-badge-${id}`} className="mb-2">
										<div className="inline-block bg-white/10 backdrop-blur-lg px-3 py-1 rounded-full border border-white/20">
											<div className="flex items-center gap-2">
												<span className="text-xl">
													{careerInfo[id as SectionId].icon}
												</span>
												<span className="text-white font-medium">{id}</span>
											</div>
										</div>
									</motion.div>{" "}
									<motion.h3
										layoutId={`card-title-${id}`}
										className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#2AFFA5] transition-colors">
										{careerInfo[id as SectionId].title}
									</motion.h3>
									<motion.div
										className="flex items-center gap-2 text-white/80"
										initial={{ opacity: 0, x: -10 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.2 }}>
										<span className="text-sm">Click para explorar</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round">
											<path d="M5 12h14"></path>
											<path d="M12 5l7 7-7 7"></path>
										</svg>
									</motion.div>
								</div>
							</motion.div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
