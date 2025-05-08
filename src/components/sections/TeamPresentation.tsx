"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { teamMembers } from "@/data/TeamMembers";
import { useTheme } from "@/hooks/useTheme";

export function TeamPresentation() {
	const { colors } = useTheme();

	return (
		<div className="w-full max-w-7xl mx-auto px-2 py-16 flex flex-col items-center justify-center gap-20 md:gap-32">
			{/* Título de la sección */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="text-center mb-20">
				<h2 className="flex flex-col">
					<motion.span
						className="text-[45px] md:text-[65px] font-black leading-[1]"
						style={{ color: colors.CLA_blue }}
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}>
						NUESTRO EQUIPO
					</motion.span>
					<motion.span
						className="text-[40px] md:text-[55px] font-black leading-[1]"
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
				className="flex justify-center"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.6 }}>
				<p className="text-xl md:text-2xl max-w-3xl text-center text-white/80 leading-relaxed px-4">
					<span className="italic">
						Seis comunicadoras, seis perspectivas únicas
					</span>{" "}
					– Un mismo objetivo: transformar la comunicación en una poderosa
					herramienta de cambio social. Conoce a quienes hacen posible esta
					experiencia mágica.
				</p>
			</motion.div>

			{/* Sección de presentación del equipo */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
				{teamMembers.map((member, index) => (
					<motion.div
						key={member.id}
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						className="flex flex-col">
						<div className="relative group">
							{" "}
							{/* Imagen más pequeña */}
							<div className="rounded-2xl overflow-hidden aspect-[4/5] relative mb-4 shadow-xl max-w-[220px] mx-auto w-full">
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
									className="text-xl font-bold"
									style={{ color: member.color }}>
									{member.name}
								</h3>
								<p className="text-sm font-medium text-white/80">
									{member.career}
								</p>
							</div>
							{/* Descripción que aparece en hover - ahora cubre toda la tarjeta */}
							<div className="absolute inset-0 bg-black/80 rounded-2xl opacity-0 group-hover:opacity-100 flex items-center justify-center p-5 transition-all duration-300">
								<div className="text-center">
									<h3
										className="text-xl font-bold mb-2"
										style={{ color: member.color }}>
										{member.name}
									</h3>
									<p className="text-sm text-white/90">{member.description}</p>
								</div>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}
