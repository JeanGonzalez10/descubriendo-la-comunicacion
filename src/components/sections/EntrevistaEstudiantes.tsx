"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import colors from "@/styles/colors";
import {
	SectionTitle,
	GlassCard,
	GradientLine,
	CornerDecorations,
	VideoFrame,
	FloatingElements,
	DecorativeQuotes,
	DecorativeDivider,
	ActionButton,
} from "@/components/UI";

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
			duration: 0.6,
		},
	},
};

// Variante para animación del video
const videoContainerVariants = {
	initial: { scale: 0.95, opacity: 0 },
	animate: {
		scale: 1,
		opacity: 1,
		transition: {
			duration: 1,
			ease: [0.25, 1, 0.5, 1],
		},
	},
	hover: {
		scale: 1.02,
		boxShadow: `0 20px 50px -10px rgba(0, 207, 255, 0.4)`,
		transition: { duration: 0.3 },
	},
};

export function EntrevistaEstudiantes() {
	const [isVideoLoaded, setIsVideoLoaded] = useState(false);
	const [isInView, setIsInView] = useState(false);
	const videoRef = useRef<HTMLDivElement>(null);
	// Detectar cuando el video está en el viewport
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsInView(entry.isIntersecting);
			},
			{ threshold: 0.3 }
		);

		const currentRef = videoRef.current; // Capturar la referencia actual

		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				// Usar la referencia capturada en la limpieza
				observer.unobserve(currentRef);
			}
		};
	}, []);

	return (
		<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12">
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="flex flex-col items-center">
				{" "}
				{/* Título de la sección con nueva paleta de colores */}
				<SectionTitle
					mainText="ENTREVISTAS A"
					secondaryText="ESTUDIANTES Y EGRESADOS"
					mainGradient={`linear-gradient(90deg, ${colors.accent}, ${colors.secondary})`}
					secondaryColor={colors.purple}
					className="mb-4 sm:mb-6 md:mb-8"
				/>{" "}
				{/* Subtítulo modernizado */}
				<motion.div
					variants={itemVariants}
					className="text-base sm:text-lg text-center text-white/90 mb-8 sm:mb-10 md:mb-12 max-w-3xl px-4">
					<div className="relative">
						<span className="relative z-10">
							Facultad de Comunicación en la Universidad de Medellín
						</span>{" "}
						<GradientLine
							gradient={`linear-gradient(90deg, ${colors.accent}00, ${colors.primary}, ${colors.accent}00)`}
							position="bottom"
							className="h-[3px] z-0 rounded-full opacity-60"
						/>
					</div>
				</motion.div>
				{/* Contenedor del video con diseño creativo */}
				<div className="w-full relative mb-10 sm:mb-12">
					<motion.div
						ref={videoRef}
						variants={videoContainerVariants}
						initial="initial"
						animate={isInView ? "animate" : "initial"}
						whileHover="hover"
						className="relative z-10 mx-auto"
						style={{
							maxWidth: "min(90vw, 900px)",
							filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.4))",
						}}>
						{/* Marco decorativo futurista */}{" "}
						<GlassCard
							className="video-frame-container relative mx-auto aspect-video rounded-xl overflow-hidden"
							style={{
								background: `linear-gradient(135deg, ${colors.dark}ee, ${colors.dark}aa)`,
								border: `1px solid ${colors.primary}40`,
							}}>
							{/* Detalles decorativos */}
							<div className="absolute inset-0 pointer-events-none">
								<CornerDecorations
									topLeftColor={colors.primary}
									topRightColor={colors.secondary}
									bottomLeftColor={colors.accent}
									bottomRightColor={colors.purple}
									size={16}
									opacity={1}
								/>

								{/* Círculos decorativos */}
								<div
									className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-10"
									style={{
										background: `radial-gradient(circle, ${colors.primary}, transparent 70%)`,
									}}></div>
								<div
									className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-10"
									style={{
										background: `radial-gradient(circle, ${colors.secondary}, transparent 70%)`,
									}}></div>
							</div>
							{/* Borde brillante */}
							<div
								className="absolute inset-0 rounded-xl p-[1px]"
								style={{
									background: `linear-gradient(135deg, ${colors.primary}80 0%, transparent 50%, ${colors.secondary}40 100%)`,
									opacity: 0.7,
								}}></div>
							{/* Overlay de carga modernizado */}
							{!isVideoLoaded && (
								<div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-10">
									<div className="flex flex-col items-center">
										<div className="relative w-16 h-16">
											<div
												className="absolute inset-0 rounded-full border-2 border-white/10 border-t-secondary animate-spin"
												style={{ borderTopColor: colors.secondary }}></div>
											<div
												className="absolute inset-1 rounded-full border-2 border-white/10 border-b-primary animate-spin"
												style={{
													animationDirection: "reverse",
													animationDuration: "1s",
													borderBottomColor: colors.primary,
												}}></div>
										</div>
										<p
											className="mt-4 font-medium text-white tracking-wider"
											style={{ textShadow: `0 0 10px ${colors.primary}` }}>
											Cargando entrevista...
										</p>
									</div>
								</div>
							)}{" "}
							{/* Video de YouTube con máscara de esquinas redondeadas */}{" "}
							<VideoFrame
								src="https://www.youtube.com/embed/tL18Zi1EMmE"
								title="Entrevistas a Estudiantes y Egresados de la Facultad de Comunicación"
								borderColor={colors.primary}
								glowColor={colors.secondary}
								rounded={true}
								onLoad={() => setIsVideoLoaded(true)}
							/>
						</GlassCard>
						{/* Elementos flotantes decorativos */}
						<FloatingElements
							elements={[
								{
									position: "-top-8 -right-8",
									size: "w-16 h-16",
									color: colors.secondary,
									opacity: 0.8,
									animationDuration: "4s",
									isHidden: true,
									className: "hidden sm:block",
								},
								{
									position: "-bottom-6 -left-6",
									size: "w-12 h-12",
									color: colors.primary,
									opacity: 0.7,
									animationDuration: "5s",
									animationDelay: "1s",
									isHidden: true,
									className: "hidden sm:block",
								},
								{
									position: "-top-4 -left-4",
									size: "w-8 h-8",
									color: colors.purple,
									opacity: 0.6,
									animationDuration: "6s",
									animationDelay: "0.5s",
									isHidden: true,
									className: "hidden md:block",
								},
							]}
						/>
					</motion.div>
				</div>
				{/* Descripción del video modernizada */}
				<motion.div
					variants={itemVariants}
					className="relative max-w-4xl mx-auto">
					{/* Flecha decorativa que conecta con el contenedor del video */}
					<div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-10 overflow-hidden hidden md:block">
						<div
							className="w-20 h-20 transform rotate-45 translate-y-10"
							style={{
								background: `linear-gradient(135deg, ${colors.dark}ee, ${colors.dark}aa)`,
							}}></div>
					</div>

					{/* Contenedor principal de la descripción */}
					<motion.div
						className="p-6 sm:p-8 rounded-2xl relative"
						style={{
							background: `linear-gradient(135deg, ${colors.dark}ee, ${colors.dark}aa)`,
							backdropFilter: "blur(10px)",
							border: `1px solid ${colors.secondary}20`,
						}}
						whileHover={{
							scale: 1.01,
							transition: { duration: 0.3 },
						}}>
						{/* Encabezado decorativo con componente DecorativeDivider */}
						<DecorativeDivider
							color={colors.secondary}
							label="Voces de la comunicación"
							labelBgColor={`${colors.secondary}20`}
							labelTextColor={colors.secondary}
						/>

						{/* Texto descriptivo con componente DecorativeQuotes */}
						<DecorativeQuotes color={colors.secondary}>
							<p className="text-white/90 text-center text-sm sm:text-base md:text-lg leading-relaxed">
								Conoce de primera mano las{" "}
								<span style={{ color: colors.accent }}>
									experiencias de estudiantes y egresados
								</span>{" "}
								de la Facultad de Comunicación. En esta entrevista, comparten
								sus perspectivas sobre el programa,
								<span style={{ color: colors.primary }}>
									{" "}
									oportunidades profesionales
								</span>{" "}
								y el
								<span style={{ color: colors.secondary }}>
									{" "}
									impacto de la comunicación
								</span>{" "}
								en sus carreras.
							</p>
						</DecorativeQuotes>

						{/* Botón de YouTube con componente ActionButton */}
						<div className="flex justify-center mt-6">
							<ActionButton
								href="https://www.youtube.com/watch?v=tL18Zi1EMmE"
								gradient={`linear-gradient(90deg, ${colors.purple}, ${colors.secondary})`}
								glowColor={`${colors.secondary}50`}
								icon={
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="currentColor"
										className="transition-transform duration-300 group-hover:animate-bounce-small">
										<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
									</svg>
								}>
								Ver en YouTube
							</ActionButton>
						</div>
					</motion.div>
				</motion.div>
			</motion.div>
		</div>
	);
}
