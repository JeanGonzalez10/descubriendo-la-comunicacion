"use client";

import { motion } from "framer-motion";
import { containerVariants, Colors } from "./utilsComunicacion";
import { GeometricBackground } from "@/components/UI";

export function TituloComunicacion() {
	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			className="text-center mb-10 sm:mb-12 md:mb-16 relative">
			{/* Elementos decorativos */}
			<motion.div
				className="relative w-full h-12 md:h-16 mb-2 overflow-hidden"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.2, delay: 0.2 }}>
				<GeometricBackground
					showStars={false}
					showPattern={false}
					elements={[
						{
							size: "8px",
							gradient: Colors.gradients.blue,
							position:
								"top: 50%; left: 5%; transform: translateY(-50%); borderRadius: 9999px; opacity: 0.2",
						},
						{
							size: "6px",
							gradient: Colors.accent.purple,
							position:
								"top: 50%; left: 20%; transform: translateY(-50%) rotate(45deg); opacity: 0.2",
						},
						{
							size: "10px",
							gradient: Colors.accent.green,
							position:
								"top: 50%; left: 35%; height: 4px; transform: translateY(-50%); borderRadius: 9999px; opacity: 0.2",
						},
						{
							size: "10px",
							gradient: Colors.accent.green,
							position:
								"top: 50%; right: 35%; height: 4px; transform: translateY(-50%); borderRadius: 9999px; opacity: 0.2",
						},
						{
							size: "6px",
							gradient: Colors.accent.purple,
							position:
								"top: 50%; right: 20%; transform: translateY(-50%) rotate(45deg); opacity: 0.2",
						},
						{
							size: "8px",
							gradient: Colors.gradients.pink,
							position:
								"top: 50%; right: 5%; transform: translateY(-50%); borderRadius: 9999px; opacity: 0.2",
						},
					]}
				/>

				{/* Línea decorativa */}
				<div
					className="absolute top-1/2 left-0 w-full h-[1px] -translate-y-1/2 opacity-30"
					style={{
						background: `linear-gradient(90deg, transparent, ${Colors.primary.main}, transparent)`,
					}}></div>

				{/* Iconos de comunicación */}
				<div className="absolute top-1/2 left-[15%] w-8 h-8 md:w-10 md:h-10 -translate-y-1/2">
					<svg
						viewBox="0 0 24 24"
						fill="currentColor"
						className="text-gray-400 opacity-40">
						<path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path>
						<path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
					</svg>
				</div>
				<div className="absolute top-1/2 left-[28%] w-8 h-8 md:w-10 md:h-10 -translate-y-1/2">
					<svg
						viewBox="0 0 24 24"
						fill="currentColor"
						className="text-gray-400 opacity-40">
						<path d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-7.277L9 18.233V16H4V4h16v12z"></path>
						<path d="M7 7h10v2H7zm0 4h7v2H7z"></path>
					</svg>
				</div>
				<div className="absolute top-1/2 right-[28%] w-8 h-8 md:w-10 md:h-10 -translate-y-1/2">
					<svg
						viewBox="0 0 24 24"
						fill="currentColor"
						className="text-gray-400 opacity-40">
						<path d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.515 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6-3.589 6-8 6z"></path>
						<path d="M7 7h10v2H7zm0 4h7v2H7z"></path>
					</svg>
				</div>
				<div className="absolute top-1/2 right-[15%] w-8 h-8 md:w-10 md:h-10 -translate-y-1/2">
					<svg
						viewBox="0 0 24 24"
						fill="currentColor"
						className="text-gray-400 opacity-40">
						<path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"></path>
					</svg>
				</div>
			</motion.div>

			<h1 className="text-[40px] sm:text-[65px] md:text-[80px] lg:text-[90px] xl:text-[100px] font-black leading-[1.1] glow-text">
				<motion.span
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					className="block bg-clip-text bg-gradient-to-r from-[#00CFFF] via-[#2AFFA5] to-[#9B5DE5] text-transparent">
					COMUNICACIÓN
				</motion.span>
			</h1>
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.7 }}
				className="mt-3 md:mt-6 text-gray-200 max-w-3xl mx-auto text-base sm:text-lg md:text-xl">
				Conoce el papel fundamental de la comunicación en la sociedad moderna y
				su impacto en nuestras interacciones diarias.
			</motion.p>
		</motion.div>
	);
}
