"use client";

import { motion } from "framer-motion";
import colors from "@/styles/colors";
import { useState } from "react";
import { BackgroundEffects } from "@/components/UI";

export function Introduction() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			className="max-w-4xl mx-auto text-center px-3 sm:px-4">
			<motion.div
				className="relative overflow-hidden rounded-2xl"
				style={{
					background: `linear-gradient(135deg, ${colors.dark}95, ${colors.dark}75)`,
					boxShadow: `0 20px 40px -15px ${colors.primary}30`,
				}}
				whileHover={{
					boxShadow: `0 25px 50px -12px ${colors.purple}50`,
				}}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}>
				{/* Elementos decorativos */}
				<BackgroundEffects
					shapes={[
						{
							color: colors.primary,
							size: "40px",
							position: "-top-20 -right-20",
							blur: "30px",
							opacity: 0.3,
							animate: true,
							isHovered,
						},
						{
							color: colors.secondary,
							size: "40px",
							position: "-bottom-20 -left-20",
							blur: "35px",
							opacity: 0.2,
							animate: true,
							isHovered,
						},
					]}
				/>

				<div
					className="relative backdrop-blur-sm p-6 sm:p-8 md:p-10 border-l-4"
					style={{ borderColor: colors.success }}>
					<motion.div className="relative z-10 overflow-hidden">
						<motion.p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed tracking-wide">
							¡Bienvenido al fascinante ecosistema de la comunicación
							contemporánea! Te invitamos a explorar nuestra{" "}
							<motion.span
								className="font-semibold"
								style={{ color: colors.primary }}
								whileHover={{ scale: 1.05 }}
								transition={{ type: "spring", stiffness: 400 }}>
								innovadora plataforma de especialidades
							</motion.span>
							, donde cada área representa una de las cuatro carreras de
							Comunicación que ofrece la
							<motion.span
								className="font-semibold"
								style={{ color: colors.secondary }}
								whileHover={{ scale: 1.05 }}
								transition={{ type: "spring", stiffness: 400 }}>
								{" "}
								<a
									href="https://www.udem.edu.co"
									target="_blank"
									rel="noopener noreferrer"
									className="relative"
									style={{
										textDecoration: "none",
										backgroundImage: `linear-gradient(to right, ${colors.secondary}, ${colors.secondary})`,
										backgroundPosition: "0 100%",
										backgroundSize: "100% 1px",
										backgroundRepeat: "no-repeat",
									}}>
									Universidad de Medellín
								</a>
							</motion.span>
							.
							<motion.span
								className="block my-4 text-[#F5F5F5]"
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.5 }}>
								Descubre tu perfil profesional: ¿serás un estratega de
								relaciones corporativas, un innovador del diseño gráfico, un
								creador de experiencias digitales o un narrador audiovisual?
								Explora las diferentes áreas y encuentra la especialidad que
								potenciará tu talento y visión creativa.
							</motion.span>
							<motion.span
								className="block mt-6 text-xl sm:text-2xl font-bold"
								style={{ color: colors.accent }}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.8 }}
								whileHover={{ scale: 1.03 }}>
								¡El futuro de la comunicación te espera!
							</motion.span>
						</motion.p>{" "}
						{/* Indicadores de especialidades */}
						<motion.div
							className="flex flex-wrap justify-center gap-3 mt-6"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1 }}>
							<motion.span
								className="px-3 py-1 rounded-full text-xs sm:text-sm"
								style={{
									backgroundColor: `${colors.CRC}20`,
									color: colors.CRC,
									border: `1px solid ${colors.CRC}30`,
								}}
								whileHover={{
									backgroundColor: `${colors.CRC}40`,
									scale: 1.05,
								}}>
								Relaciones Corporativas
							</motion.span>
							<motion.span
								className="px-3 py-1 rounded-full text-xs sm:text-sm"
								style={{
									backgroundColor: `${colors.CGP}20`,
									color: colors.CGP,
									border: `1px solid ${colors.CGP}30`,
								}}
								whileHover={{
									backgroundColor: `${colors.CGP}40`,
									scale: 1.05,
								}}>
								Gráfica Publicitaria
							</motion.span>
							<motion.span
								className="px-3 py-1 rounded-full text-xs sm:text-sm"
								style={{
									backgroundColor: `${colors.CED}20`,
									color: colors.CED,
									border: `1px solid ${colors.CED}30`,
								}}
								whileHover={{
									backgroundColor: `${colors.CED}40`,
									scale: 1.05,
								}}>
								Entretenimiento Digital
							</motion.span>
							<motion.span
								className="px-3 py-1 rounded-full text-xs sm:text-sm"
								style={{
									backgroundColor: `${colors.CLA}20`,
									color: colors.CLA,
									border: `1px solid ${colors.CLA}30`,
								}}
								whileHover={{
									backgroundColor: `${colors.CLA}40`,
									scale: 1.05,
								}}>
								Lenguajes Audiovisuales
							</motion.span>
						</motion.div>
						{/* Botón para ir a las tarjetas de carreras */}
						<motion.div
							className="mt-8"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1.2 }}>
							<motion.button
								className="group relative overflow-hidden px-6 py-3 rounded-xl"
								style={{
									background: `linear-gradient(135deg, ${colors.primary}, ${colors.purple})`,
									boxShadow: `0 10px 20px -5px ${colors.purple}40`,
								}}
								whileHover={{ y: -3 }}
								whileTap={{ scale: 0.98 }}
								onClick={() => {
									// Scroll suave a la sección de tarjetas
									document.querySelector("#carreras")?.scrollIntoView({
										behavior: "smooth",
										block: "start",
									});
								}}>
								{/* Efecto de brillo */}
								<motion.div
									className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100"
									style={{
										background: `linear-gradient(135deg, ${colors.purple}50, ${colors.primary}50)`,
										transition: "opacity 0.3s ease",
									}}
								/>

								{/* Efecto de destello */}
								<motion.div
									className="absolute top-0 left-0 w-1/3 h-full bg-white/20 -skew-x-12"
									animate={{
										x: isHovered ? ["-100%", "300%"] : "-100%",
									}}
									transition={{
										duration: 0.8,
										repeat: isHovered ? Infinity : 0,
										repeatDelay: 0.5,
									}}
								/>

								<div className="relative z-10 flex items-center justify-center gap-3 text-white font-medium">
									<span>Explorar las carreras</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2.5"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="group-hover:translate-x-1 transition-transform">
										<path d="M5 12h14"></path>
										<path d="M12 5l7 7-7 7"></path>
									</svg>
								</div>
							</motion.button>
						</motion.div>
					</motion.div>
				</div>
			</motion.div>
		</motion.div>
	);
}
