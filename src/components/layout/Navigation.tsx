"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import colors from "@/styles/colors";

export function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const pathname = usePathname();

	const navItems = [
		{ href: "/", text: "INICIO" },
		{ href: "/que-es-la-comunicacion", text: "¿QUÉ ES LA COMUNICACIÓN?" },
		{ href: "/testvocacional", text: "TEST VOCACIONAL" },
		{
			href: "https://docs.google.com/forms/d/e/1FAIpQLSfTnW_HtzQGvc3UPE5QWuFn8hKxI5cMJ5M1hP608YalT9acfA/viewform?usp=header",
			text: "EVALÚA LA EXPERIENCIA",
		},
	];

	// Controla el estado de mobile en base a la anchura de la pantalla
	useEffect(() => {
		const checkIfMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		// Compruebar si es móvil al cargar
		checkIfMobile();

		// listener para redimensionamiento
		window.addEventListener("resize", checkIfMobile);

		// Limpia el listener al desmontar
		return () => window.removeEventListener("resize", checkIfMobile);
	}, []);

	// Cierra el menú al cambiar a vista desktop
	useEffect(() => {
		if (!isMobile) {
			setIsOpen(false);
		}
	}, [isMobile]);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<nav
				className="w-full backdrop-blur-md z-50 relative"
				style={{
					background: "rgba(26, 26, 26, 0.85)",
					boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
				}}>
				{/* Elemento decorativo - línea de gradiente */}
				<div
					className="absolute bottom-0 left-0 right-0 h-[2px] w-full"
					style={{
						background: `linear-gradient(90deg, transparent, ${colors.primary}80, ${colors.secondary}80, ${colors.accent}60, transparent)`,
						opacity: 0.8,
					}}></div>

				{/* Elementos decorativos flotantes */}
				<div
					className="absolute top-0 left-[5%] w-20 h-20 rounded-full opacity-5"
					style={{
						background: `radial-gradient(circle, ${colors.primary}, transparent 70%)`,
						filter: "blur(20px)",
					}}></div>
				<div
					className="absolute top-5 right-[10%] w-14 h-14 rounded-full opacity-5"
					style={{
						background: `radial-gradient(circle, ${colors.secondary}, transparent 70%)`,
						filter: "blur(15px)",
					}}></div>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
					{/* Para móviles: menú hamburguesa */}
					{isMobile && (
						<div className="flex justify-between items-center h-16">
							<div className="md:hidden">
								<motion.button
									onClick={toggleMenu}
									className="relative p-2 rounded-lg overflow-hidden"
									whileTap={{ scale: 0.95 }}
									style={{
										background: isOpen
											? `rgba(255, 255, 255, 0.05)`
											: "transparent",
									}}
									aria-label="Toggle menu">
									<div
										className={`w-6 h-5 flex flex-col justify-between transition-all duration-300 ${
											isOpen ? "transform" : ""
										}`}>
										<span
											className={`block h-0.5 w-full transform transition-all duration-300 ${
												isOpen ? "rotate-45 translate-y-2" : ""
											}`}
											style={{
												background: isOpen ? colors.secondary : colors.light,
												boxShadow: isOpen
													? `0 0 5px ${colors.secondary}`
													: "none",
											}}></span>
										<span
											className={`block h-0.5 w-full transition-all duration-300 ${
												isOpen ? "opacity-0" : "opacity-100"
											}`}
											style={{
												background: isOpen ? colors.secondary : colors.light,
											}}></span>
										<span
											className={`block h-0.5 w-full transform transition-all duration-300 ${
												isOpen ? "-rotate-45 -translate-y-2" : ""
											}`}
											style={{
												background: isOpen ? colors.secondary : colors.light,
												boxShadow: isOpen
													? `0 0 5px ${colors.secondary}`
													: "none",
											}}></span>
									</div>
								</motion.button>
							</div>
						</div>
					)}{" "}
					{/* Para desktop */}
					{!isMobile && (
						<div className="flex justify-center items-center h-16 md:h-20 w-full">
							<div className="flex overflow-x-auto scrollbar-hide">
								<ul className="flex justify-center items-center space-x-8 lg:space-x-12">
									{navItems.map((item, index) => {
										// Distribuir los colores de la paleta entre los elementos del menú
										const colorsPalette = [
											colors.primary,
											colors.secondary,
											colors.accent,
											colors.purple,
										];
										const itemColor =
											colorsPalette[index % colorsPalette.length];

										const isActive =
											pathname === item.href ||
											(pathname.startsWith("/testvocacional") &&
												item.href === "/testvocacional");

										return (
											<motion.li
												key={item.href}
												whileHover={{
													scale: 1.05,
													transition: { duration: 0.2 },
												}}
												whileTap={{ scale: 0.95 }}
												className="cursor-pointer flex-shrink-0">
												<Link
													href={item.href}
													className={`transition-all duration-300 text-sm md:text-base font-medium tracking-wider whitespace-nowrap ${
														isActive
															? "font-bold"
															: "text-white/80 hover:text-white"
													}`}
													style={{
														color: isActive ? itemColor : undefined,
														textShadow: isActive
															? `0 0 8px ${itemColor}40`
															: undefined,
													}}
													target={
														item.href.startsWith("http") ? "_blank" : undefined
													}
													rel={
														item.href.startsWith("http")
															? "noopener noreferrer"
															: undefined
													}>
													<div className="relative py-1">
														{item.text}
														{isActive && (
															<motion.span
																initial={{
																	width: 0,
																	left: "50%",
																	right: "50%",
																}}
																animate={{ width: "100%", left: 0, right: 0 }}
																transition={{ duration: 0.3 }}
																className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
																style={{
																	background: `${itemColor}`,
																}}></motion.span>
														)}
														{!isActive && (
															<span
																className="absolute -bottom-1 left-0 right-0 h-[2px] scale-x-0 rounded-full opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100"
																style={{ background: `${itemColor}70` }}></span>
														)}
													</div>
												</Link>
											</motion.li>
										);
									})}
								</ul>
							</div>
						</div>
					)}
				</div>
			</nav>{" "}
			{/* Menú desplegable para móvil */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
						className="fixed w-full md:hidden overflow-hidden z-40"
						style={{
							background: `rgba(26, 26, 26, 0.9)`,
							backdropFilter: "blur(10px)",
							boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
						}}>
						{/* Efecto de fondo */}
						<div className="absolute inset-0 z-0 opacity-10 overflow-hidden">
							<div
								className="absolute -top-20 -right-20 w-64 h-64 rounded-full"
								style={{
									background: `radial-gradient(circle, ${colors.primary}80, transparent 70%)`,
									filter: "blur(40px)",
								}}></div>
							<div
								className="absolute bottom-0 left-0 w-72 h-72 rounded-full"
								style={{
									background: `radial-gradient(circle, ${colors.secondary}80, transparent 70%)`,
									filter: "blur(50px)",
								}}></div>
						</div>

						<div className="px-5 py-4 relative z-10 border-t border-white/10">
							<ul className="flex flex-col space-y-4 py-3">
								{navItems.map((item, index) => {
									// Distribuir los colores de la paleta entre los elementos del menú
									const colorsPalette = [
										colors.primary,
										colors.secondary,
										colors.accent,
										colors.purple,
									];
									const itemColor = colorsPalette[index % colorsPalette.length];

									const isActive =
										pathname === item.href ||
										(pathname.startsWith("/testvocacional") &&
											item.href === "/testvocacional");

									return (
										<motion.li
											key={item.href}
											initial={{ opacity: 0, x: -10 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: index * 0.1 }}
											whileHover={{ x: 5 }}
											whileTap={{ scale: 0.98 }}
											className="cursor-pointer">
											<Link
												href={item.href}
												className={`block text-sm font-medium tracking-wider py-2 transition-all duration-300 ${
													isActive ? "font-bold" : "text-white/80"
												}`}
												style={{
													color: isActive ? itemColor : undefined,
													textShadow: isActive
														? `0 0 8px ${itemColor}40`
														: undefined,
												}}
												onClick={() => setIsOpen(false)}
												target={
													item.href.startsWith("http") ? "_blank" : undefined
												}
												rel={
													item.href.startsWith("http")
														? "noopener noreferrer"
														: undefined
												}>
												<div className="relative flex items-center">
													{/* Elemento decorativo para ítems activos */}
													{isActive && (
														<motion.span
															initial={{ opacity: 0, width: 0 }}
															animate={{ opacity: 1, width: 3 }}
															className="absolute -left-3 h-full mr-2 rounded-full"
															style={{ background: itemColor }}></motion.span>
													)}

													<span>{item.text}</span>

													{isActive && (
														<motion.span
															initial={{ width: 0 }}
															animate={{ width: "100%" }}
															transition={{ duration: 0.3, delay: 0.1 }}
															className="absolute -bottom-1 left-0 right-0 h-[1px] rounded-full"
															style={{
																background: `linear-gradient(90deg, ${itemColor}, transparent)`,
															}}></motion.span>
													)}
												</div>
											</Link>
										</motion.li>
									);
								})}
							</ul>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
