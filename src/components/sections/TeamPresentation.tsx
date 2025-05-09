"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { teamMembers } from "@/data/TeamMembers";
import { useTheme } from "@/hooks/useTheme";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// interfaz para los props de los botones del carrusel
interface ArrowProps {
	className?: string;
	style?: React.CSSProperties;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function TeamPresentation() {
	const { colors } = useTheme();
	const [isMobile, setIsMobile] = useState(false);
	const [isCarouselReady, setIsCarouselReady] = useState(false);

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
					background: "rgba(255,255,255,0.2)",
					borderRadius: "50%",
					width: "30px",
					height: "30px",
					right: "5px",
					zIndex: 1,
				}}
				onClick={onClick}
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
					background: "rgba(255,255,255,0.2)",
					borderRadius: "50%",
					width: "30px",
					height: "30px",
					left: "5px",
					zIndex: 1,
				}}
				onClick={onClick}
			/>
		);
	};

	// Configuración del carrusel
	const carouselSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
		arrows: true,
		adaptiveHeight: false,
		nextArrow: <CustomNextArrow />,
		prevArrow: <CustomPrevArrow />,
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

	return (
		<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
			{/* Título de la sección */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="text-center mb-2 sm:mb-4 md:mb-6">
				<h2 className="flex flex-col gap-1">
					<motion.span
						className="text-[35px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[65px] font-black leading-[1]"
						style={{ color: colors.CLA_blue }}
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}>
						NUESTRO EQUIPO
					</motion.span>
					<motion.span
						className="text-[30px] sm:text-[35px] md:text-[45px] lg:text-[50px] xl:text-[55px] font-black leading-[1]"
						style={{ color: colors.CGP_yellow }}
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}>
						MÁGICO
					</motion.span>
				</h2>
			</motion.div>

			{/* Descripción de la sección */}
			<motion.div
				className="flex justify-center mb-2 sm:mb-4"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.6 }}>
				<p className="text-base sm:text-lg md:text-xl max-w-3xl text-center text-white/80 leading-relaxed px-4">
					<span className="italic">
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
									{" "}
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5 }}
										className="bg-gradient-to-br from-black/70 to-black/40 backdrop-blur-sm p-4 rounded-2xl border border-white/10 shadow-lg magic-gradient carousel-card">
										<div className="flex flex-col items-center">
											{/* Imagen con efecto */}{" "}
											<div className="rounded-2xl overflow-hidden aspect-[4/5] relative mb-4 shadow-xl max-w-[180px] mx-auto w-full animate-float">
												<div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 mix-blend-overlay z-10"></div>
												<Image
													src={member.image}
													alt={member.name}
													fill
													className="object-cover"
													priority
												/>
												<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-80"></div>

												{/* Efecto de brillo */}
												<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent animate-magic"></div>

												{/* Pequeñas estrellas */}
												<div
													className="absolute top-3 right-3 w-3 h-3 bg-yellow-300 rounded-full opacity-80 animate-sparkle"
													style={{ animationDelay: "0.2s" }}></div>
												<div
													className="absolute bottom-5 left-4 w-2 h-2 bg-blue-300 rounded-full opacity-70 animate-sparkle"
													style={{ animationDelay: "0.7s" }}></div>
												<div
													className="absolute top-1/3 left-2 w-2 h-2 bg-purple-300 rounded-full opacity-70 animate-sparkle"
													style={{ animationDelay: "1.2s" }}></div>
											</div>
											{/* Información y descripción */}
											<div className="text-center mt-3 w-full">
												<h3
													className="text-xl font-bold mb-1 tracking-wide"
													style={{ color: member.color }}>
													{member.name}
												</h3>
												<div className="flex items-center justify-center gap-2 mb-3">
													<span className="h-px bg-white/20 flex-1"></span>
													<p className="text-sm font-medium text-white/90 px-2 whitespace-nowrap">
														{member.career}
													</p>
													<span className="h-px bg-white/20 flex-1"></span>
												</div>{" "}
												<div className="relative">
													<span className="absolute -left-2 top-0 text-2xl text-yellow-500/70">
														&ldquo;
													</span>
													<p className="text-sm text-white/90 leading-relaxed pl-3 pr-3 italic">
														{member.description}
													</p>
													<span className="absolute -right-2 bottom-0 text-2xl text-yellow-500/70">
														&rdquo;
													</span>
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
				/* Vista de escritorio */
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full">
					{teamMembers.map((member, index) => (
						<motion.div
							key={member.id}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="flex flex-col items-center">
							<div className="relative group flex flex-col">
								{/* Imagen */}
								<div className="rounded-2xl overflow-hidden aspect-[4/5] relative mb-3 sm:mb-4 shadow-xl max-w-[180px] sm:max-w-[200px] md:max-w-[220px] mx-auto w-full">
									<Image
										src={member.image}
										alt={member.name}
										fill
										className="object-cover transition-transform duration-500 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-80"></div>
								</div>
								{/* Información básica siempre visible */}
								<div className="text-center mt-2">
									<h3
										className="text-lg sm:text-xl font-bold"
										style={{ color: member.color }}>
										{member.name}
									</h3>
									<p className="text-xs sm:text-sm font-medium text-white/80">
										{member.career}
									</p>
								</div>
								{/* Descripción que aparece en hover */}
								<div className="absolute inset-0 bg-black/80 rounded-2xl opacity-0 group-hover:opacity-100 flex items-center justify-center p-4 sm:p-5 transition-all duration-300">
									<div className="text-center">
										<h3
											className="text-lg sm:text-xl font-bold mb-1 sm:mb-2"
											style={{ color: member.color }}>
											{member.name}
										</h3>
										<p className="text-xs sm:text-sm text-white/90">
											{member.description}
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			)}
		</div>
	);
}
