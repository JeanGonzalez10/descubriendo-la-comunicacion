"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/hooks/useTheme";
import { useRouter } from "next/navigation";

export function TestVocacional() {
	const { colors } = useTheme();
	const router = useRouter();
	const handleTestClick = () => {
		router.push("/testvocacional");
	};
	return (
		<div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
			<motion.div
				className="rounded-2xl overflow-hidden p-3 sm:p-5 md:p-6 lg:p-8 relative"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}>
				{/* Fondo con gradiente */}
				<div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/40 z-0 backdrop-blur-sm" />

				{/* Imagen decorativa */}
				<div className="absolute top-0 right-0 w-16 sm:w-24 md:w-32 lg:w-40 h-16 sm:h-24 md:h-32 lg:h-40 opacity-30 z-0">
					<Image
						src="/images/escudo.png"
						alt="Escudo"
						width={200}
						height={200}
						className="object-contain w-full h-full"
					/>
				</div>

				<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 xs:gap-6 sm:gap-8 md:gap-12">
					<div className="flex-1 w-full">
						<motion.h2
							className="font-black mb-3 xs:mb-4 sm:mb-6 md:mb-8"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}>
							<span
								className="block text-[28px] xs:text-[32px] sm:text-[40px] md:text-[55px] xl:text-[60px] leading-[1.1] font-black"
								style={{ color: colors.CRC_green }}>
								DESCUBRE
							</span>
							<span
								className="block text-[24px] xs:text-[28px] sm:text-[35px] md:text-[50px] xl:text-[55px] leading-[1.1] font-black"
								style={{ color: colors.CLA_blue }}>
								TU CAMINO EN
							</span>
							<span
								className="block text-[32px] xs:text-[38px] sm:text-[45px] md:text-[60px] xl:text-[65px] leading-[1.1] font-black"
								style={{ color: colors.CGP_yellow }}>
								COMUNICACIÓN
							</span>
						</motion.h2>
						<motion.p
							className="text-sm xs:text-base sm:text-lg text-white/90 mb-4 xs:mb-6 sm:mb-8 max-w-2xl"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							viewport={{ once: true }}>
							¿No estás seguro/a de qué carrera de comunicación es la adecuada
							para ti? Realiza nuestro test vocacional interactivo y descubre
							qué casa de Hogwarts... ¡perdón! qué especialidad de la
							comunicación se alinea mejor con tus talentos, habilidades y
							pasiones.
						</motion.p>{" "}
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, delay: 0.6 }}
							viewport={{ once: true }}
							className="flex justify-center sm:justify-start">
							<button
								onClick={handleTestClick}
								className="relative px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold text-sm xs:text-base sm:text-lg whitespace-nowrap shadow-xl group overflow-hidden"
								aria-label="Realizar test vocacional">
								<span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
								<span className="absolute inset-0 w-0 bg-white/20 skew-x-12 group-hover:animate-shine"></span>
								<span className="relative z-10">
									¡Realizar Test Vocacional!
								</span>
							</button>
						</motion.div>
					</div>

					<motion.div
						className="flex-shrink-0 w-full sm:w-2/3 md:w-1/3 mt-4 md:mt-0"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						viewport={{ once: true }}>
						<div className="grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4 max-w-[200px] xs:max-w-[250px] sm:max-w-xs mx-auto">
							<div className="aspect-square rounded-lg overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
								<Image
									src="/images/banderines/CRC-BANDERIN.png"
									alt="Comunicación y Relaciones Corporativas"
									width={150}
									height={150}
									className="w-full h-full object-cover"
									loading="eager"
								/>
							</div>
							<div className="aspect-square rounded-lg overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
								<Image
									src="/images/banderines/CGP-BANDERIN.png"
									alt="Comunicación Gráfica Publicitaria"
									width={150}
									height={150}
									className="w-full h-full object-cover"
									loading="eager"
								/>
							</div>
							<div className="aspect-square rounded-lg overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
								<Image
									src="/images/banderines/CLA-BANDERIN.png"
									alt="Comunicación y Lenguajes Audiovisuales"
									width={150}
									height={150}
									className="w-full h-full object-cover"
									loading="eager"
								/>
							</div>
							<div className="aspect-square rounded-lg overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
								<Image
									src="/images/banderines/CED-BANDERIN.png"
									alt="Comunicación y Entretenimiento Digital"
									width={150}
									height={150}
									className="w-full h-full object-cover"
									loading="eager"
								/>
							</div>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
}
