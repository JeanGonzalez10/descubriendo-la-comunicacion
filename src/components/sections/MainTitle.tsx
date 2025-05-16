"use client";

import { motion } from "framer-motion";
import colors from "@/styles/colors";
import { useState } from "react";
import {
	AmbientLight,
	ColorDecorations,
	GradientLine,
	BackgroundEffects,
} from "@/components/UI";

export function MainTitle() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 relative">
			{/* Efectos de luz ambiental */}
			<AmbientLight
				primaryColor={colors.primary}
				secondaryColor={colors.secondary}
			/>

			{/* Contenedor principal */}
			<motion.div
				className="relative overflow-hidden rounded-3xl py-12 sm:py-14 md:py-16"
				style={{
					background: `radial-gradient(circle at bottom right, ${colors.dark}95, ${colors.dark}90)`,
					boxShadow: `0 30px 60px -15px ${colors.primary}20`,
					backdropFilter: "blur(10px)",
					WebkitBackdropFilter: "blur(10px)",
					border: `1px solid ${colors.dark}70`,
				}}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}>
				{" "}
				{/* Elementos decorativos de fondo */}
				<BackgroundEffects
					shapes={[
						{
							color: colors.primary,
							size: "64px md:96px",
							position: "top-0 right-0",
							blur: "60px",
							opacity: 0.1,
							animate: true,
							isHovered: isHovered,
						},
						{
							color: colors.secondary,
							size: "64px md:80px",
							position: "bottom-0 left-0",
							blur: "50px",
							opacity: 0.1,
							animate: true,
							isHovered: isHovered,
						},
						{
							color: colors.accent,
							size: "48px md:64px",
							position: "top-1/2 left-1/2",
							blur: "40px",
							opacity: 0.05,
							animate: true,
							isHovered: isHovered,
						},
					]}
				/>{" "}
				{/* Línea decorativa superior */}
				<GradientLine
					gradient="linear-gradient(90deg, transparent, #2AFFA5, transparent)"
					position="top"
					height="1px"
					className="opacity-60"
				/>
				{/* Contenido principal con diseño moderno */}
				<div className="relative z-10 text-center flex flex-col items-center justify-center px-4 sm:px-8">
					<motion.h1 className="flex flex-col gap-4 sm:gap-6 md:gap-8">
						{/* COMUNICACIÓN */}
						<div className="relative">
							<motion.span
								className="block text-[40px] sm:text-[55px] md:text-[75px] lg:text-[90px] xl:text-[100px] font-black tracking-tight"
								style={{
									color: colors.light,
									WebkitTextStroke: `1px ${colors.primary}40`,
									textShadow: `0 0 20px ${colors.primary}30, 0 0 40px ${colors.primary}20`,
								}}
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.1 }}
								whileHover={{ scale: 1.02 }}>
								COMUNICACIÓN
							</motion.span>
							{/* Línea de subrayado animada */}{" "}
							<GradientLine
								gradient={`linear-gradient(90deg, transparent, ${colors.primary}, transparent)`}
								className="mx-auto mt-1"
								animate={true}
								delay={0.2}
							/>
						</div>

						{/* COMO HERRAMIENTA */}
						<div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 perspective-500">
							<motion.div
								className="origin-center"
								initial={{ opacity: 0, rotateX: 45 }}
								animate={{ opacity: 1, rotateX: 0 }}
								transition={{ duration: 0.7, delay: 0.3 }}>
								<motion.span
									className="inline-block text-[32px] sm:text-[42px] md:text-[58px] lg:text-[70px] font-black px-5 py-1.5 rounded-lg backdrop-blur-sm"
									style={{
										color: colors.light,
										background: `linear-gradient(135deg, ${colors.secondary}30, ${colors.secondary}10)`,
										border: `1px solid ${colors.secondary}30`,
										boxShadow: `0 10px 20px -5px ${colors.secondary}20`,
									}}
									whileHover={{
										y: -5,
										transition: { type: "spring", stiffness: 300 },
									}}>
									COMO
								</motion.span>
							</motion.div>

							<motion.div
								className="origin-center"
								initial={{ opacity: 0, rotateX: 45 }}
								animate={{ opacity: 1, rotateX: 0 }}
								transition={{ duration: 0.7, delay: 0.5 }}>
								<motion.span
									className="inline-block text-[32px] sm:text-[42px] md:text-[58px] lg:text-[70px] font-black px-5 py-1.5 rounded-lg backdrop-blur-sm"
									style={{
										color: colors.light,
										background: `linear-gradient(135deg, ${colors.accent}30, ${colors.accent}10)`,
										border: `1px solid ${colors.accent}30`,
										boxShadow: `0 10px 20px -5px ${colors.accent}20`,
									}}
									whileHover={{
										y: -5,
										transition: { type: "spring", stiffness: 300 },
									}}>
									HERRAMIENTA
								</motion.span>
							</motion.div>
						</div>

						{/* EN EL ÁMBITO SOCIAL */}
						<div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 perspective-500">
							<motion.div
								className="origin-center"
								initial={{ opacity: 0, rotateX: 45 }}
								animate={{ opacity: 1, rotateX: 0 }}
								transition={{ duration: 0.7, delay: 0.7 }}>
								<motion.span
									className="inline-block text-[28px] sm:text-[36px] md:text-[50px] lg:text-[65px] font-black px-4 py-1.5 rounded-lg backdrop-blur-sm"
									style={{
										color: colors.light,
										background: `linear-gradient(135deg, ${colors.purple}30, ${colors.purple}10)`,
										border: `1px solid ${colors.purple}30`,
										boxShadow: `0 10px 20px -5px ${colors.purple}20`,
									}}
									whileHover={{
										y: -5,
										transition: { type: "spring", stiffness: 300 },
									}}>
									EN EL
								</motion.span>
							</motion.div>

							<motion.div
								className="origin-center"
								initial={{ opacity: 0, rotateX: 45 }}
								animate={{ opacity: 1, rotateX: 0 }}
								transition={{ duration: 0.7, delay: 0.9 }}>
								<motion.span
									className="inline-block text-[28px] sm:text-[36px] md:text-[50px] lg:text-[65px] font-black px-4 py-1.5 rounded-lg backdrop-blur-sm"
									style={{
										color: colors.light,
										background: `linear-gradient(135deg, ${colors.success}30, ${colors.success}10)`,
										border: `1px solid ${colors.success}30`,
										boxShadow: `0 10px 20px -5px ${colors.success}20`,
									}}
									whileHover={{
										y: -5,
										transition: { type: "spring", stiffness: 300 },
									}}>
									ÁMBITO SOCIAL
								</motion.span>
							</motion.div>
						</div>
					</motion.h1>{" "}
					{/* Decoración inferior */}
					<ColorDecorations
						colors={[
							colors.primary,
							colors.secondary,
							colors.accent,
							colors.success,
							colors.purple,
						]}
						className="mt-8"
						delay={1.1}
					/>
				</div>
			</motion.div>
		</div>
	);
}
