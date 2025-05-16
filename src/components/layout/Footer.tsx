"use client";

import { motion } from "framer-motion";
import colors from "@/styles/colors";

export function Footer() {
	return (
		<footer className="relative w-full mt-16 overflow-hidden">
			{/* Decoración de fondo */}
			<div className="absolute inset-0 z-0">
				<div
					className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10"
					style={{
						background: `radial-gradient(circle, ${colors.secondary}90, transparent 70%)`,
						filter: "blur(40px)",
						transform: "translate(-30%, 60%)",
					}}></div>
				<div
					className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
					style={{
						background: `radial-gradient(circle, ${colors.primary}90, transparent 70%)`,
						filter: "blur(40px)",
						transform: "translate(30%, -60%)",
					}}></div>
			</div>

			{/* Línea divisoria superior con gradiente */}
			<div
				className="w-full h-[1px]"
				style={{
					background: `linear-gradient(90deg, transparent, ${colors.primary}60, ${colors.secondary}60, ${colors.purple}60, transparent)`,
				}}></div>

			{/* Contenido principal */}
			<div
				className="w-full backdrop-blur-md py-6 relative z-10"
				style={{ background: `rgba(26, 26, 26, 0.7)` }}>
				<div className="container mx-auto px-4">
					<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
						{/* Texto del desarrollador */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="relative">
							<p className="text-white/80 text-sm">
								Desarrollado por{" "}
								<span
									className="font-medium relative inline-block"
									style={{
										color: colors.primary,
										textShadow: `0 0 10px ${colors.primary}30`,
									}}>
									Jean Carlos Gonzalez Goyeneche
								</span>
							</p>
						</motion.div>

						{/* Botones de redes sociales */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="flex items-center gap-4">
							{/* Botón de GitHub */}
							<motion.a
								href="https://github.com/JeanGonzalez10"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 overflow-hidden relative group"
								style={{
									background: `linear-gradient(135deg, ${colors.purple}40, ${colors.dark})`,
									border: `1px solid ${colors.purple}50`,
									boxShadow: `0 4px 12px -2px ${colors.purple}20`,
								}}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								aria-label="GitHub de Jean Carlos">
								<div
									className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
									style={{
										background: `linear-gradient(135deg, ${colors.purple}80, ${colors.purple}40)`,
									}}></div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="text-white relative z-10">
									<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
								</svg>
							</motion.a>

							{/* Botón de LinkedIn */}
							<motion.a
								href="https://www.linkedin.com/in/jean-carlos-gonzalez/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 overflow-hidden relative group"
								style={{
									background: `linear-gradient(135deg, ${colors.primary}40, ${colors.dark})`,
									border: `1px solid ${colors.primary}50`,
									boxShadow: `0 4px 12px -2px ${colors.primary}20`,
								}}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								aria-label="LinkedIn de Jean Carlos">
								<div
									className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
									style={{
										background: `linear-gradient(135deg, ${colors.primary}80, ${colors.primary}40)`,
									}}></div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="text-white relative z-10">
									<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
									<rect x="2" y="9" width="4" height="12"></rect>
									<circle cx="4" cy="4" r="2"></circle>
								</svg>
							</motion.a>
						</motion.div>
					</div>
				</div>
			</div>
		</footer>
	);
}
