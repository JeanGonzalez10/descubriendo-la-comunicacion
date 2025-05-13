"use client";

import { motion } from "framer-motion";
import { containerVariants, hogwartsColors } from "./utilsComunicacion";

export function TituloComunicacion() {
	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			className="text-center mb-10 sm:mb-12 md:mb-16">
			{/* Iconos de Harry Potter para decoración */}
			<motion.div
				className="relative w-full h-12 md:h-16 mb-2 overflow-hidden opacity-20"
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.2 }}
				transition={{ duration: 1.2, delay: 0.2 }}>
				<div className="absolute top-1/2 left-[15%] w-8 h-8 md:w-10 md:h-10 -translate-y-1/2">
					<svg
						viewBox="0 0 512 512"
						fill="currentColor"
						className="text-gray-400">
						<path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
					</svg>
				</div>
				<div className="absolute top-1/2 left-[30%] w-8 h-8 md:w-10 md:h-10 -translate-y-1/2">
					<svg
						viewBox="0 0 384 512"
						fill="currentColor"
						className="text-gray-400">
						<path d="M368 32h-56c-8.8 0-16 7.2-16 16v48h-48V48c0-8.8-7.2-16-16-16h-80c-8.8 0-16 7.2-16 16v48H88.1V48c0-8.8-7.2-16-16-16H16C7.2 32 0 39.2 0 48v416c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16zm-16 416H32V96h48v48c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V96h32v48c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V96h48v352z" />
					</svg>
				</div>
				<div className="absolute top-1/2 right-[30%] w-8 h-8 md:w-10 md:h-10 -translate-y-1/2">
					<svg
						viewBox="0 0 512 512"
						fill="currentColor"
						className="text-gray-400">
						<path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z" />
					</svg>
				</div>
				<div className="absolute top-1/2 right-[15%] w-8 h-8 md:w-10 md:h-10 -translate-y-1/2">
					<svg
						viewBox="0 0 512 512"
						fill="currentColor"
						className="text-gray-400">
						<path d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z" />
					</svg>
				</div>
			</motion.div>

			<h1 className="flex flex-col gap-1 relative">
				{" "}
				<motion.span
					className="text-[35px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[65px] font-black leading-[1.1] font-serif"
					style={{ color: hogwartsColors.gryffindor.primary }}
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}>
					¿QUÉ ES LA
				</motion.span>{" "}
				<motion.span
					className="text-[30px] sm:text-[35px] md:text-[45px] lg:text-[50px] xl:text-[55px] font-black leading-[1.1] font-serif"
					style={{ color: hogwartsColors.gryffindor.secondary }}
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}>
					COMUNICACIÓN?
				</motion.span>
				{/* Detalles decorativos mágicos */}
				<motion.div
					className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-24 h-24 opacity-70 hidden md:block"
					initial={{ opacity: 0, y: -50, rotate: -10 }}
					animate={{ opacity: 0.7, y: 0, rotate: 0 }}
					transition={{ duration: 0.8, delay: 0.5 }}>
					<div className="relative w-full h-full">
						<div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-transparent rounded-full blur-md"></div>
						<div className="absolute inset-2 border-2 border-amber-500/30 rounded-full"></div>
					</div>
				</motion.div>
			</h1>
			{/* Lema de Hogwarts */}
			<motion.p
				className="text-xs sm:text-sm mt-4 opacity-60 italic font-serif"
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.6 }}
				transition={{ duration: 1, delay: 1 }}
				style={{ color: hogwartsColors.gryffindor.secondary }}>
				Draco dormiens nunquam titillandus
			</motion.p>
		</motion.div>
	);
}
