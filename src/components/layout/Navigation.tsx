"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

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
			<nav className="w-full backdrop-blur-sm bg-black/30 z-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					{/* Para móviles: menú hamburguesa */}
					{isMobile && (
						<div className="flex justify-between items-center h-16">
							<div className="md:hidden">
								<button
									onClick={toggleMenu}
									className="text-gray-300 hover:text-white"
									aria-label="Toggle menu">
									<div
										className={`w-6 h-5 flex flex-col justify-between transition-all duration-300 ${
											isOpen ? "transform" : ""
										}`}>
										<span
											className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
												isOpen ? "rotate-45 translate-y-2" : ""
											}`}></span>
										<span
											className={`block h-0.5 w-full bg-current transition-all duration-300 ${
												isOpen ? "opacity-0" : "opacity-100"
											}`}></span>
										<span
											className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
												isOpen ? "-rotate-45 -translate-y-2" : ""
											}`}></span>
									</div>
								</button>
							</div>
						</div>
					)}

					{/* Para desktop */}
					{!isMobile && (
						<div className="flex justify-center items-center h-16 md:h-20 w-full">
							<div className="flex overflow-x-auto scrollbar-hide">
								<ul className="flex justify-center items-center space-x-8 lg:space-x-12">
									{navItems.map((item) => (
										<motion.li
											key={item.href}
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											className="cursor-pointer flex-shrink-0">
											<Link
												href={item.href}
												className={`transition-all duration-300 text-sm md:text-base font-medium tracking-wider whitespace-nowrap ${
													pathname === item.href ||
													(pathname.startsWith("/testvocacional") &&
														item.href === "/testvocacional")
														? "text-amber-400 font-bold"
														: "text-gray-300 hover:text-white"
												}`}
												target={
													item.href.startsWith("http") ? "_blank" : undefined
												}
												rel={
													item.href.startsWith("http")
														? "noopener noreferrer"
														: undefined
												}>
												<div className="relative">
													{item.text}
													{(pathname === item.href ||
														(pathname.startsWith("/testvocacional") &&
															item.href === "/testvocacional")) && (
														<span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-400 rounded-full"></span>
													)}
												</div>
											</Link>
										</motion.li>
									))}
								</ul>
							</div>
						</div>
					)}
				</div>
			</nav>

			{/* Menú desplegable para móvil */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed w-full md:hidden overflow-hidden bg-black/60 backdrop-blur-md z-40">
						<div className="px-4 py-2 border-t border-gray-800">
							<ul className="flex flex-col space-y-3 py-3">
								{navItems.map((item) => (
									<motion.li
										key={item.href}
										whileHover={{ x: 5 }}
										whileTap={{ scale: 0.98 }}
										className="cursor-pointer">
										<Link
											href={item.href}
											className={`block text-sm font-medium tracking-wider py-2 ${
												pathname === item.href ||
												(pathname.startsWith("/testvocacional") &&
													item.href === "/testvocacional")
													? "text-amber-400 font-bold"
													: "text-gray-300 hover:text-white transition-colors"
											}`}
											onClick={() => setIsOpen(false)}
											target={
												item.href.startsWith("http") ? "_blank" : undefined
											}
											rel={
												item.href.startsWith("http")
													? "noopener noreferrer"
													: undefined
											}>
											<div className="relative">
												{item.text}
												{(pathname === item.href ||
													(pathname.startsWith("/testvocacional") &&
														item.href === "/testvocacional")) && (
													<span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-400 rounded-full"></span>
												)}
											</div>
										</Link>
									</motion.li>
								))}
							</ul>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
