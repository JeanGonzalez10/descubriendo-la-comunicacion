"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SectionId } from "@/types/sectionId";

const sectionLinks = {
	CED: "https://www.udem.edu.co/programas/pregrados/comunicacion-y-entretenimiento-digital/",
	CRC: "https://www.udem.edu.co/programas/pregrados/comunicacion-y-relaciones-corporativas/",
	CLA: "https://www.udem.edu.co/programas/pregrados/comunicacion-y-lenguajes-audiovisuales/",
	CGP: "https://www.udem.edu.co/programas/pregrados/comunicacion-grafica-publicitaria/",
};

export function CircleWheel() {
	const [activeSection, setActiveSection] = useState<SectionId | null>(null);

	const getContentPosition = (id: SectionId) => {
		switch (id) {
			case "CRC":
				return "-top-[-130px] -left-[-30px]";
			case "CED":
				return "-top-[-130px] -right-[-30px]";
			case "CGP":
				return "-bottom-[-150px] -right-[-30px]";
			case "CLA":
				return "-bottom-[-150px] -left-[-30px]";
			default:
				return "";
		}
	};

	const renderDescription = (id: SectionId) => {
		switch (id) {
			case "CED":
				return (
					<div className="flex flex-col gap-6">
						<motion.p
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.3, delay: 0.1 }}
							className="text-white/90 text-center leading-relaxed">
							¿Te encanta crear contenido, explorar plataformas digitales y
							conectar con las audiencias a través del entretenimiento?
						</motion.p>
						<motion.p
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.3, delay: 0.2 }}
							className="text-white/90 text-center leading-relaxed">
							Entonces la carrera de{" "}
							<span className="text-yellow-400 font-semibold">
								Comunicación y Entretenimiento Digital
							</span>{" "}
							en la{" "}
							<span className="text-yellow-400 font-semibold">
								Universidad de Medellín
							</span>{" "}
							es perfecta para ti.
						</motion.p>
					</div>
				);
			case "CRC":
				return (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.3 }}
						className="flex flex-col text-center gap-6">
						<p className="text-white/90 leading-relaxed">
							Si te interesa liderar procesos de comunicación estratégica,
							construir reputación y conectar con diferentes públicos, la
							carrera de{" "}
							<span className="text-yellow-400 font-semibold">
								Comunicación y Relaciones Corporativas
							</span>{" "}
							en la{" "}
							<span className="text-yellow-400 font-semibold">
								Universidad de Medellín
							</span>{" "}
							es tu camino.
						</p>
					</motion.div>
				);
			case "CLA":
				return (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.3 }}
						className="flex flex-col gap-6">
						<p className="text-white/90 text-center leading-relaxed">
							Si sueñas con contar historias a través del cine, la fotografía,
							el sonido o la producción audiovisual, la carrera de{" "}
							<span className="text-yellow-400 font-semibold">
								Comunicación y Lenguajes Audiovisuales
							</span>{" "}
							en la{" "}
							<span className="text-yellow-400 font-semibold">
								Universidad de Medellín
							</span>{" "}
							es tu espacio creativo.
						</p>
					</motion.div>
				);
			case "CGP":
				return (
					<div className="flex flex-col gap-6">
						<motion.p
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.3, delay: 0.1 }}
							className="text-white/90 text-center leading-relaxed">
							¿Te apasiona el diseño, los colores y la forma en que una imagen
							puede transformar un mensaje?
						</motion.p>
						<motion.p
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.3, delay: 0.2 }}
							className="text-white/90 text-center leading-relaxed">
							Entonces la carrera de{" "}
							<span className="text-yellow-400 font-semibold">
								Comunicación Gráfica Publicitaria
							</span>{" "}
							en la{" "}
							<span className="text-yellow-400 font-semibold">
								Universidad de Medellín
							</span>{" "}
							es para ti.
						</motion.p>
					</div>
				);
			default:
				return null;
		}
	};

	const handleClick = (id: SectionId) => {
		window.open(sectionLinks[id], "_blank", "noopener,noreferrer");
	};

	return (
		<div className="relative w-[800px] h-[800px]">
			<div className="absolute inset-0 rounded-full overflow-hidden">
				{/* Escudo central */}
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-[200px] h-[200px]">
					<Image
						src={
							activeSection
								? `/images/banderines/${activeSection}-BANDERIN.png`
								: "/images/escudo.png"
						}
						alt="Escudo"
						fill
						className="object-contain"
					/>
				</div>

				{/* Secciones de la rueda */}
				{["CED", "CRC", "CLA", "CGP"].map((id) => (
					<motion.div
						key={id}
						className="absolute top-0 left-0 w-1/2 h-1/2 origin-bottom-right"
						style={{
							rotate: `${
								id === "CED" ? 0 : id === "CRC" ? 90 : id === "CLA" ? 180 : 270
							}deg`,
							transformOrigin: "bottom right",
						}}
						initial={{ scale: 1 }}
						animate={{
							scale: activeSection === id ? 1.05 : 1,
							transition: { duration: 0.3 },
						}}>
						{/* Área de hover y click */}
						<div
							className="absolute inset-0 z-10 cursor-pointer"
							onClick={() => handleClick(id as SectionId)}
							onMouseEnter={() => setActiveSection(id as SectionId)}
							onMouseLeave={() => setActiveSection(null)}
						/>

						<div
							className="relative w-full h-full"
							style={{
								rotate: `${
									id === "CED"
										? 0
										: id === "CRC"
										? -90
										: id === "CLA"
										? -180
										: -270
								}deg`,
							}}>
							{/* Fondo de la sección */}
							<Image
								src={`/images/backgrounds/${id}-FONDO.png`}
								alt={`${id} background`}
								fill
								className={`object-cover transition-opacity duration-300 ${
									activeSection && activeSection !== id
										? "opacity-30"
										: "opacity-100"
								}`}
							/>

							{/* Card de descripción */}
							<AnimatePresence mode="wait">
								{activeSection === id && (
									<motion.div
										key={`description-${id}`}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										transition={{
											duration: 0.3,
											ease: "easeOut",
										}}
										className={`absolute z-30 ${getContentPosition(
											id as SectionId
										)}`}>
										<div className="w-[250px]">
											<div className="bg-black/30 backdrop-blur-md rounded-2xl border shadow-2xl">
												<div className="p-8">
													{renderDescription(id as SectionId)}
												</div>
											</div>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}
