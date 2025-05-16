"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import colors from "@/styles/colors";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BackgroundEffects } from "@/components/UI";

export function TestVocacional() {
	const router = useRouter();
	const [isHovered, setIsHovered] = useState(false);

	const handleTestClick = () => {
		router.push("/testvocacional");
	};

	return (
		<div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-12">
			{/* Sección principal con diseño moderno */}
			<motion.div
				className="relative rounded-3xl overflow-hidden"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
				style={{
					backgroundImage: `radial-gradient(circle at top right, ${colors.purple}30, ${colors.dark}90)`,
					boxShadow: `0 25px 50px -12px ${colors.purple}40`,
				}}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}>
				{" "}
				{/* Patrones decorativos geométricos */}
				<BackgroundEffects
					shapes={[
						{
							color: `radial-gradient(circle, ${colors.primary}40, transparent 70%)`,
							size: "33%",
							position: "top-0 left-0",
							opacity: 0.1,
						},
						{
							color: `radial-gradient(circle, ${colors.secondary}30, transparent 70%)`,
							size: "50%",
							position: "bottom-0 right-0",
							opacity: 0.1,
						},
						{
							color: colors.success,
							size: "32px",
							position: "top-1/4 right-1/4",
							blur: "40px",
							opacity: 0.3,
							animate: true,
							isHovered: true,
						},
					]}
					className="opacity-10"
				/>
				<div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 md:px-16 py-10 sm:py-16 md:py-20">
					{/* Contenido principal */}
					<div className="flex-1 w-full max-w-2xl mb-10 lg:mb-0 lg:pr-8">
						<motion.div
							className="mb-8 relative"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}>
							{/* Título con efecto moderno */}
							<motion.h2 className="font-black mb-2 relative">
								<motion.span
									className="block text-[32px] xs:text-[36px] sm:text-[48px] md:text-[60px] leading-[1.1] font-black"
									style={{ color: colors.primary }}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6 }}
									viewport={{ once: true }}
									whileHover={{ x: -5 }}>
									DESCUBRE
								</motion.span>

								<motion.span
									className="block text-[28px] xs:text-[32px] sm:text-[40px] md:text-[52px] leading-[1.1] font-black mix-blend-difference"
									style={{ color: colors.purple }}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.2 }}
									viewport={{ once: true }}
									whileHover={{ x: 5 }}>
									TU CAMINO EN
								</motion.span>

								<motion.span
									className="block text-[36px] xs:text-[42px] sm:text-[52px] md:text-[68px] leading-[1.1] font-black"
									style={{ color: colors.secondary }}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.4 }}
									viewport={{ once: true }}
									whileHover={{ x: -5 }}>
									COMUNICACIÓN
								</motion.span>
							</motion.h2>
						</motion.div>

						{/* Descripción con efecto de aparición */}
						<motion.div
							className="mb-8"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
							viewport={{ once: true }}>
							<p
								className="text-[#F5F5F5] text-base sm:text-lg leading-relaxed backdrop-blur-sm bg-[#1A1A1A]/20 p-4 rounded-xl border-l-4"
								style={{ borderColor: colors.accent }}>
								¿No estás seguro/a de qué carrera de comunicación es la adecuada
								para ti? Realiza nuestro test vocacional interactivo y descubre
								qué especialidad de la comunicación se alinea mejor con tus
								talentos, habilidades y pasiones.
							</p>
						</motion.div>

						{/* Botón para iniciar el test con diseño moderno */}
						<motion.div
							className="relative"
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: 0.5 }}
							viewport={{ once: true }}>
							<button
								onClick={handleTestClick}
								className="group relative flex items-center gap-3 overflow-hidden rounded-xl px-6 py-4 shadow-2xl"
								style={{
									background: `linear-gradient(135deg, ${colors.success} 0%, ${colors.primary} 100%)`,
								}}
								aria-label="Realizar test vocacional">
								<motion.div
									className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
									style={{
										backgroundImage: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.success} 100%)`,
									}}
								/>
								<motion.div
									className="absolute left-0 top-0 h-full w-1/3 bg-white/20 skew-x-12"
									initial={{ x: "-100%" }}
									animate={isHovered ? { x: "300%" } : { x: "-100%" }}
									transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
								/>
								<motion.div className="relative z-10 flex items-center justify-center gap-3">
									<div className="flex items-center justify-center rounded-full bg-white p-2 text-dark">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="black"
											className="w-5 h-5">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
											/>
										</svg>
									</div>
									<span className="text-black font-bold text-base sm:text-lg">
										¡Inicia el Test Vocacional!
									</span>
								</motion.div>
							</button>
						</motion.div>
					</div>

					{/* Tarjetas de carreras */}
					<motion.div
						className="lg:w-1/2 w-full"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						viewport={{ once: true }}>
						<div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full perspective-500">
							{/* Tarjeta CRC */}
							<motion.div
								className="absolute top-[10%] left-[5%] w-[40%] sm:w-[45%] rounded-2xl overflow-hidden shadow-2xl origin-center"
								initial={{ rotateY: 10, rotateX: -10 }}
								animate={{
									rotateY: isHovered ? 15 : 10,
									rotateX: isHovered ? -15 : -10,
									y: isHovered ? -10 : 0,
								}}
								transition={{ duration: 0.5 }}>
								<div
									className="relative aspect-square overflow-hidden bg-[#1A1A1A]/50 backdrop-blur-lg p-2 border"
									style={{ borderColor: colors.CRC }}>
									<Image
										src="/images/banderines/CRC-BANDERIN.png"
										alt="Comunicación y Relaciones Corporativas"
										width={150}
										height={150}
										className="w-full h-full object-contain"
										loading="eager"
									/>
									<div className="absolute inset-x-0 bottom-0 text-center bg-[#1A1A1A]/70 backdrop-blur-sm py-2 px-1 text-xs text-white font-medium">
										CRC
									</div>
								</div>
							</motion.div>
							{/* Tarjeta CGP */}
							<motion.div
								className="absolute top-[18%] right-[5%] w-[40%] sm:w-[45%] rounded-2xl overflow-hidden shadow-2xl origin-center"
								initial={{ rotateY: -10, rotateX: -5 }}
								animate={{
									rotateY: isHovered ? -15 : -10,
									rotateX: isHovered ? -10 : -5,
									y: isHovered ? -10 : 0,
								}}
								transition={{ duration: 0.5 }}>
								<div
									className="relative aspect-square overflow-hidden bg-[#1A1A1A]/50 backdrop-blur-lg p-2 border"
									style={{ borderColor: colors.CGP }}>
									<Image
										src="/images/banderines/CGP-BANDERIN.png"
										alt="Comunicación Gráfica Publicitaria"
										width={150}
										height={150}
										className="w-full h-full object-contain"
										loading="eager"
									/>
									<div className="absolute inset-x-0 bottom-0 text-center bg-[#1A1A1A]/70 backdrop-blur-sm py-2 px-1 text-xs text-white font-medium">
										CGP
									</div>
								</div>
							</motion.div>
							{/* Tarjeta CLA */}
							<motion.div
								className="absolute bottom-[5%] left-[15%] w-[40%] sm:w-[45%] rounded-2xl overflow-hidden shadow-2xl origin-center"
								initial={{ rotateY: 5, rotateX: 10 }}
								animate={{
									rotateY: isHovered ? 15 : 10,
									rotateX: isHovered ? 15 : 10,
									y: isHovered ? -10 : 0,
								}}
								transition={{ duration: 0.5 }}>
								<div
									className="relative aspect-square overflow-hidden bg-[#1A1A1A]/50 backdrop-blur-lg p-2 border"
									style={{ borderColor: colors.CLA }}>
									<Image
										src="/images/banderines/CLA-BANDERIN.png"
										alt="Comunicación y Lenguajes Audiovisuales"
										width={150}
										height={150}
										className="w-full h-full object-contain"
										loading="eager"
									/>
									<div className="absolute inset-x-0 bottom-0 text-center bg-[#1A1A1A]/70 backdrop-blur-sm py-2 px-1 text-xs text-white font-medium">
										CLA
									</div>
								</div>
							</motion.div>
							{/* Tarjeta CED */}
							<motion.div
								className="absolute top-[40%] left-[45%] w-[40%] sm:w-[45%] rounded-2xl overflow-hidden shadow-2xl origin-center z-10"
								initial={{ rotateY: -5, rotateX: 5 }}
								animate={{
									rotateY: isHovered ? -15 : -10,
									rotateX: isHovered ? 10 : 5,
									scale: isHovered ? 1.05 : 1,
									y: isHovered ? -10 : 0,
								}}
								transition={{ duration: 0.5 }}>
								<div
									className="relative aspect-square overflow-hidden bg-[#1A1A1A]/50 backdrop-blur-lg p-2 border"
									style={{ borderColor: colors.CED }}>
									<Image
										src="/images/banderines/CED-BANDERIN.png"
										alt="Comunicación y Entretenimiento Digital"
										width={150}
										height={150}
										className="w-full h-full object-contain"
										loading="eager"
									/>
									<div className="absolute inset-x-0 bottom-0 text-center bg-[#1A1A1A]/70 backdrop-blur-sm py-2 px-1 text-xs text-white font-medium">
										CED
									</div>
								</div>
							</motion.div>
							{/* Efecto de luces */}{" "}
							<BackgroundEffects
								shapes={[
									{
										color: `radial-gradient(circle at center, ${colors.primary}30, transparent 70%)`,
										size: "100%",
										position:
											"top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
										blur: "30px",
										opacity: 0.1,
										animate: true,
									},
								]}
							/>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
}
