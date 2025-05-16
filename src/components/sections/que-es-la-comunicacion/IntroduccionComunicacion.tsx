"use client";

import { motion } from "framer-motion";
import { itemVariants, Colors } from "./utilsComunicacion";
import {
	GlassCard,
	BorderDecorations,
	CornerDecorations,
	GeometricBackground,
	SectionSeparator,
} from "@/components/UI";

export function IntroduccionComunicacion() {
	return (
		<GlassCard className="max-w-5xl mx-auto" withAnimation={true}>
			<GeometricBackground
				showStars={false}
				showPattern={false}
				elements={[
					{
						size: "100%",
						gradient:
							"linear-gradient(to bottom, rgba(0,207,255,0.05), rgba(42,255,165,0.05), rgba(155,93,229,0.05))",
						position: "inset: 0",
					},
				]}
			/>

			{/* Ornamentos modernos con gradientes */}
			<BorderDecorations
				topGradient={Colors.gradients.blue}
				bottomGradient={Colors.gradients.pink}
				opacity={0.7}
			/>

			<CornerDecorations
				topLeftColor={Colors.primary.main}
				topRightColor={Colors.accent.purple}
				bottomLeftColor={Colors.accent.green}
				bottomRightColor={Colors.accent.orange}
				size={10}
				opacity={0.6}
			/>

			{/* Contenido del panel */}
			<div className="space-y-8 relative z-10">
				{/* Sección 1: Introducción */}
				<motion.div
					variants={itemVariants}
					className="flex flex-col md:flex-row gap-6 items-center">
					<div className="flex-1">
						<h3
							className="text-xl sm:text-2xl font-bold mb-3 modern-title"
							style={{ color: Colors.primary.main }}>
							Fundamento de nuestra sociedad
						</h3>
						<p className="text-base sm:text-lg text-white/90 leading-relaxed">
							<span
								className="font-bold"
								style={{ color: Colors.primary.main }}>
								La comunicación
							</span>{" "}
							es una base fundamental para la sociedad, que permite expresar
							opiniones, construir identidad, cultura y fomentar el desarrollo
							personal, creando conexiones significativas entre las personas.
						</p>
					</div>
					<div className="w-full md:w-1/3 flex-shrink-0">
						<div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto">
							<div className="absolute inset-0 bg-gradient-to-br from-[#00CFFF]/20 to-[#2AFFA5]/20 rounded-full animate-pulse-slow"></div>
							<div className="absolute inset-0 flex items-center justify-center">
								<svg
									width="60%"
									height="60%"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="text-[#00CFFF]">
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

				{/* Separador con estilo moderno */}
				<SectionSeparator
					gradientColor={Colors.accent.green}
					dotColor={Colors.accent.orange}
				/>

				{/* Sección 2: Realidades */}
				<motion.div
					variants={itemVariants}
					className="flex flex-col md:flex-row-reverse gap-6 items-center">
					<div className="flex-1">
						<h3
							className="text-xl sm:text-2xl font-bold mb-3 modern-title"
							style={{ color: Colors.secondary.main }}>
							Factor transformador
						</h3>
						<p className="text-base sm:text-lg text-white/90 leading-relaxed">
							Más que transmitir información,{" "}
							<span
								className="font-bold"
								style={{ color: Colors.secondary.main }}>
								crea realidades
							</span>
							, impulsa la participación ciudadana, fortalece la democracia y
							promueve el pensamiento crítico, transformando la forma en que
							entendemos y nos relacionamos con nuestro entorno.
						</p>
					</div>
					<div className="w-full md:w-1/3 flex-shrink-0">
						<div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto">
							<div className="absolute inset-0 bg-gradient-to-br from-[#FF3D7F]/20 to-[#9B5DE5]/20 rounded-full animate-pulse-slow"></div>
							<div className="absolute inset-0 flex items-center justify-center">
								<svg
									width="60%"
									height="60%"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="text-[#FF3D7F]">
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

				{/* Separador */}
				<SectionSeparator
					gradientColor={Colors.accent.purple}
					dotColor={Colors.primary.main}
				/>

				{/* Sección 3: Era Digital */}
				<motion.div
					variants={itemVariants}
					className="flex flex-col md:flex-row gap-6 items-center">
					<div className="flex-1">
						<h3
							className="text-xl sm:text-2xl font-bold mb-3 modern-title"
							style={{ color: Colors.accent.orange }}>
							El impacto del mundo digital
						</h3>
						<p className="text-base sm:text-lg text-white/90 leading-relaxed">
							En la era digital, ha diversificado los espacios laborales, ha{" "}
							<span
								className="font-bold"
								style={{ color: Colors.accent.orange }}>
								potenciado la creatividad y la libertad profesional
							</span>
							, y actúa como un vocero de las comunidades y los conflictos
							sociales, derribando barreras y creando nuevas oportunidades.
						</p>
					</div>
					<div className="w-full md:w-1/3 flex-shrink-0">
						<div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto">
							<div className="absolute inset-0 bg-gradient-to-br from-[#FF8C42]/20 to-[#2AFFA5]/20 rounded-full animate-pulse-slow"></div>
							<div className="absolute inset-0 flex items-center justify-center">
								<svg
									width="60%"
									height="60%"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="text-[#FF8C42]">
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

			{/* Elemento decorativo */}
			<div className="absolute bottom-4 right-4 w-16 h-16 opacity-20">
				<div
					className="absolute inset-0 border-2 rounded-full"
					style={{ borderColor: Colors.accent.purple }}></div>
				<div
					className="absolute inset-3 border rounded-full"
					style={{ borderColor: Colors.accent.green }}></div>
				<div
					className="absolute inset-6 border rounded-full"
					style={{ borderColor: Colors.accent.orange }}></div>
				<div className="absolute inset-0 flex items-center justify-center">
					<div
						className="w-2 h-2 rounded-full"
						style={{ background: Colors.primary.main }}></div>
				</div>
			</div>
		</GlassCard>
	);
}
