"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { teamMembers } from "@/data/TeamMembers";
import colors from "@/styles/colors";
import { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Asignando colores por carrera usando la nueva paleta
const careerColors = {
	"Comunicación y Relaciones Corporativas": colors.success,
	"Comunicación y Lenguajes Audiovisuales": colors.primary,
	"Comunicación Gráfica Publicitaria": colors.accent,
	"Comunicación y Estrategia Digital": colors.secondary,
};

// Estilos para los efectos de tarjetas
const cardStyles = {
	height: "450px", // Altura fija para todas las tarjetas
	transition: "all 0.5s cubic-bezier(0.17, 0.67, 0.83, 0.67)",
};

// interfaz para los props de los botones del carrusel
interface ArrowProps {
	className?: string;
	style?: React.CSSProperties;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function TeamPresentation() {
	const [isMobile, setIsMobile] = useState(false);
	const [isCarouselReady, setIsCarouselReady] = useState(false);
	const [hoveredMember, setHoveredMember] = useState<string | null>(null);

	useEffect(() => {
		// Verificar si estamos en un dispositivo móvil
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);

		// Marcar el carrusel como listo después de un breve retraso
		setTimeout(() => {
			setIsCarouselReady(true);
		}, 300);

		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const CustomNextArrow = (props: ArrowProps) => {
		const { className, style, onClick } = props;
		return (
			<div
				className={`${className} custom-arrow-next`}
				style={{
					...style,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					background: `${colors.secondary}80`,
					borderRadius: "50%",
					width: "40px",
					height: "40px",
					right: "10px",
					zIndex: 1,
					boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
					transition: "transform 0.3s ease, background 0.3s ease",
				}}
				onClick={onClick}
				onMouseEnter={(e) => {
					e.currentTarget.style.transform = "scale(1.1)";
					e.currentTarget.style.background = colors.secondary;
				}}
				onMouseLeave={(e) => {
					e.currentTarget.style.transform = "scale(1)";
					e.currentTarget.style.background = `${colors.secondary}80`;
				}}
			/>
		);
	};

	const CustomPrevArrow = (props: ArrowProps) => {
		const { className, style, onClick } = props;
		return (
			<div
				className={`${className} custom-arrow-prev`}
				style={{
					...style,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					background: `${colors.secondary}80`,
					borderRadius: "50%",
					width: "40px",
					height: "40px",
					left: "10px",
					zIndex: 1,
					boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
					transition: "transform 0.3s ease, background 0.3s ease",
				}}
				onClick={onClick}
				onMouseEnter={(e) => {
					e.currentTarget.style.transform = "scale(1.1)";
					e.currentTarget.style.background = colors.secondary;
				}}
				onMouseLeave={(e) => {
					e.currentTarget.style.transform = "scale(1)";
					e.currentTarget.style.background = `${colors.secondary}80`;
				}}
			/>
		);
	};
	// Configuración del carrusel con animación mejorada
	const carouselSettings = {
		dots: true,
		infinite: true,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
		arrows: true,
		adaptiveHeight: false,
		nextArrow: <CustomNextArrow />,
		prevArrow: <CustomPrevArrow />,
		cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
		dotsClass: "slick-dots custom-dots",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	// Función para obtener color según la carrera
	const getCareerColor = (career: string) => {
		return careerColors[career as keyof typeof careerColors] || colors.purple;
	};
	return (
		<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
			{/* Título de la sección - Rediseñado con la nueva paleta */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="text-center mb-4 sm:mb-6 md:mb-8">
				<h2 className="flex flex-col gap-2">
					<motion.span
						className="text-[35px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[65px] font-black leading-[1] bg-clip-text text-transparent bg-gradient-to-r"
						style={{
							backgroundImage: `linear-gradient(90deg, ${colors.primary}, ${colors.purple})`,
						}}
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}>
						NUESTRO EQUIPO
					</motion.span>
					<motion.span
						className="text-[30px] sm:text-[35px] md:text-[45px] lg:text-[50px] xl:text-[55px] font-black leading-[1] bg-clip-text text-transparent bg-gradient-to-r"
						style={{
							backgroundImage: `linear-gradient(90deg, ${colors.accent}, ${colors.secondary})`,
						}}
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}>
						MÁGICO
					</motion.span>
				</h2>
			</motion.div>
			{/* Descripción de la sección */}
			<motion.div
				className="flex justify-center mb-4 sm:mb-6"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.6 }}>
				<p className="text-base sm:text-lg md:text-xl max-w-3xl text-center text-white/90 leading-relaxed px-4">
					<span
						className="italic font-medium"
						style={{ color: colors.secondary }}>
						Seis comunicadoras, seis perspectivas únicas
					</span>{" "}
					– Un mismo objetivo: transformar la comunicación en una poderosa
					herramienta de cambio social. Conoce a quienes hacen posible esta
					experiencia mágica.
				</p>
			</motion.div>
			{/* Sección de presentación del equipo - Vista móvil como carrusel */}
			{isMobile ? (
				<div
					className={`w-full px-2 sm:px-3 ${
						isCarouselReady ? "opacity-100" : "opacity-0"
					} transition-opacity duration-500`}>
					{isCarouselReady && (
						<Slider {...carouselSettings} className="team-carousel">
							{teamMembers.map((member) => (
								<div key={member.id} className="px-2 pb-12">
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5 }}
										className="p-5 rounded-3xl shadow-2xl carousel-card relative"
										style={{
											background: `linear-gradient(135deg, ${colors.dark}ee, ${colors.dark}99)`,
											backdropFilter: "blur(10px)",
											border: `1px solid ${getCareerColor(member.career)}40`,
										}}>
										{/* Efecto de fondo decorativo */}
										<div className="absolute inset-0 rounded-3xl overflow-hidden">
											<div
												className="absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-10"
												style={{
													background: `radial-gradient(circle, ${getCareerColor(
														member.career
													)}, transparent 70%)`,
												}}></div>
											<div
												className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full opacity-10"
												style={{
													background: `radial-gradient(circle, ${colors.primary}, transparent 70%)`,
												}}></div>
										</div>

										<div className="flex flex-col items-center relative z-10">
											{/* Imagen con efecto mejorado */}
											<div className="relative mb-5 w-full max-w-[180px] mx-auto">
												<div
													className="w-full aspect-[4/5] rounded-[20px] overflow-hidden relative shadow-xl transform hover:scale-[1.02] transition-all duration-300"
													style={{
														boxShadow: `0 10px 30px -5px ${getCareerColor(
															member.career
														)}30`,
													}}>
													<Image
														src={member.image}
														alt={member.name}
														fill
														className="object-cover"
														priority
													/>
													<div
														className="absolute inset-0"
														style={{
															background: `linear-gradient(to top, ${colors.dark}99, transparent 50%)`,
														}}></div>

													{/* Borde brillante con el color de la carrera */}
													<div
														className="absolute inset-0 rounded-[20px] p-[2px]"
														style={{
															background: `linear-gradient(135deg, ${getCareerColor(
																member.career
															)}80 0%, transparent 50%, ${getCareerColor(
																member.career
															)}40 100%)`,
															opacity: 0.7,
														}}></div>
												</div>

												{/* Indicador de carrera */}
												<div
													className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium"
													style={{
														background: getCareerColor(member.career),
														color: colors.dark,
														boxShadow: `0 4px 12px ${getCareerColor(
															member.career
														)}50`,
													}}>
													{member.career.split(" ").pop()}
												</div>
											</div>

											{/* Información y descripción */}
											<div className="text-center mt-4 w-full">
												<h3
													className="text-xl font-bold mb-2 tracking-wide"
													style={{ color: getCareerColor(member.career) }}>
													{member.name}
												</h3>

												<div className="relative px-2 py-4">
													<span
														className="absolute -left-1 top-0 text-3xl"
														style={{
															color: `${getCareerColor(member.career)}aa`,
														}}>
														&ldquo;
													</span>
													<p className="text-sm text-white/90 leading-relaxed px-4 italic">
														{member.description}
													</p>
													<span
														className="absolute -right-1 bottom-0 text-3xl"
														style={{
															color: `${getCareerColor(member.career)}aa`,
														}}>
														&rdquo;
													</span>
												</div>

												{/* Detalle decorativo */}
												<div className="mt-2 flex items-center justify-center gap-2">
													<span
														className="h-[2px] w-8 rounded-full"
														style={{
															background: `${getCareerColor(member.career)}60`,
														}}></span>
													<div
														className="w-2 h-2 rounded-full"
														style={{
															background: getCareerColor(member.career),
														}}></div>
													<span
														className="h-[2px] w-8 rounded-full"
														style={{
															background: `${getCareerColor(member.career)}60`,
														}}></span>
												</div>
											</div>
										</div>
									</motion.div>
								</div>
							))}
						</Slider>
					)}
				</div>
			) : (
				/* Vista de escritorio modernizada */
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-14 w-full">
					{teamMembers.map((member, index) => (
						<motion.div
							key={member.id}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className="flex flex-col items-center perspective-1000">
							{/* Tarjeta con efecto 3D */}
							<div
								className="w-full relative card-container group"
								style={{ ...cardStyles }}
								onMouseEnter={() => setHoveredMember(member.id)}
								onMouseLeave={() => setHoveredMember(null)}>
								{/* Tarjeta frontal */}
								<div
									className="card-face card-front absolute inset-0 flex flex-col rounded-2xl overflow-hidden transform transition-transform duration-700 backface-hidden border-2"
									style={{
										borderColor: getCareerColor(member.career),
										boxShadow: `0 8px 25px -5px ${getCareerColor(
											member.career
										)}40`,
										transform:
											hoveredMember === member.id
												? "rotateY(180deg)"
												: "rotateY(0deg)",
									}}>
									<div className="relative flex-1 group-hover:scale-[1.02] transition-all duration-300">
										{/* Barra superior con color de carrera */}
										<div
											className="absolute top-0 left-0 right-0 h-2 z-10"
											style={{
												background: getCareerColor(member.career),
											}}></div>

										{/* Imagen principal */}
										<div className="w-full h-full relative">
											<Image
												src={member.image}
												alt={member.name}
												fill
												className="object-cover"
												priority
											/>
											<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>

											{/* Overlay con degradado para texto */}
											<div className="absolute inset-x-0 bottom-0 p-5 text-center">
												<h3
													className="text-xl font-bold tracking-wide"
													style={{ color: getCareerColor(member.career) }}>
													{member.name}
												</h3>

												<div
													className="inline-block mt-2 px-4 py-1 rounded-full text-xs font-medium"
													style={{
														background: `${colors.dark}CC`,
														border: `1px solid ${getCareerColor(
															member.career
														)}80`,
														color: getCareerColor(member.career),
													}}>
													{member.career.split(" ").pop()}
												</div>

												<div className="mt-3 flex justify-center items-center">
													<span
														className="group-hover:animate-bounce-small flex items-center justify-center w-6 h-6 rounded-full"
														style={{
															background: getCareerColor(member.career),
														}}>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="14"
															height="14"
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															strokeWidth="3"
															strokeLinecap="round"
															strokeLinejoin="round"
															style={{ color: colors.dark }}>
															<polyline points="6 9 12 15 18 9"></polyline>
														</svg>
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* Tarjeta trasera con la descripción */}
								<div
									className="card-face card-back absolute inset-0 flex flex-col rounded-2xl overflow-hidden bg-gradient-to-br transform transition-transform duration-700 backface-hidden p-6 border-2 justify-center"
									style={{
										borderColor: getCareerColor(member.career),
										boxShadow: `0 8px 25px -5px ${getCareerColor(
											member.career
										)}50`,
										background: `radial-gradient(circle at top right, ${getCareerColor(
											member.career
										)}20, ${colors.dark}90)`,
										transform:
											hoveredMember === member.id
												? "rotateY(0deg)"
												: "rotateY(-180deg)",
									}}>
									{/* Círculos decorativos */}
									<div
										className="absolute top-4 right-4 w-20 h-20 rounded-full opacity-10"
										style={{ background: getCareerColor(member.career) }}></div>
									<div
										className="absolute bottom-4 left-4 w-16 h-16 rounded-full opacity-10"
										style={{ background: getCareerColor(member.career) }}></div>

									{/* Contenido de la tarjeta trasera */}
									<div className="z-10 relative">
										<div className="mb-4 flex items-center justify-center">
											<div
												className="w-16 h-16 rounded-full overflow-hidden border-2 mb-2"
												style={{ borderColor: getCareerColor(member.career) }}>
												<Image
													src={member.image}
													alt={member.name}
													width={64}
													height={64}
													className="object-cover"
												/>
											</div>
										</div>

										<h3
											className="text-lg font-bold mb-3 text-center"
											style={{ color: getCareerColor(member.career) }}>
											{member.name}
										</h3>

										{/* Descripción */}
										<div className="relative px-1">
											<span
												className="absolute -left-1 top-0 text-3xl"
												style={{ color: `${getCareerColor(member.career)}80` }}>
												&ldquo;
											</span>
											<p className="text-sm text-white/90 leading-relaxed px-4 italic max-h-[240px] overflow-y-auto custom-scrollbar">
												{member.description}
											</p>
											<span
												className="absolute -right-1 bottom-0 text-3xl"
												style={{ color: `${getCareerColor(member.career)}80` }}>
												&rdquo;
											</span>
										</div>

										{/* Botón para volver */}
										<div className="flex justify-center mt-4">
											<button
												className="flex items-center justify-center w-8 h-8 rounded-full transition-transform hover:scale-110"
												style={{
													background: getCareerColor(member.career),
													color: colors.dark,
												}}>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="3"
													strokeLinecap="round"
													strokeLinejoin="round">
													<polyline points="18 15 12 9 6 15"></polyline>
												</svg>
											</button>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			)}{" "}
		</div>
	);
}
