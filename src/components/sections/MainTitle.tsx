"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

export function MainTitle() {
	const { colors } = useTheme();

	return (
		<div className="w-full max-w-7xl mx-auto px-4">
			<motion.div
				className="text-center flex flex-col items-center justify-center"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}>
				<h1 className="flex flex-col gap-6 md:gap-8">
					<motion.span
						className="text-[60px] md:text-[85px] xl:text-[75px] font-black leading-[0.9]"
						style={{ color: colors.CLA_blue }}>
						COMUNICACIÓN
					</motion.span>
					<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
						<motion.span
							className="text-[50px] md:text-[70px] xl:text-[60px] font-black leading-[0.9]"
							style={{ color: colors.CED_red }}>
							COMO
						</motion.span>
						<motion.span
							className="text-[50px] md:text-[70px] xl:text-[60px] font-black leading-[0.9]"
							style={{ color: colors.CGP_yellow }}>
							HERRAMIENTA
						</motion.span>
					</div>
					<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
						<motion.span
							className="text-[45px] md:text-[65px] xl:text-[60px] font-black leading-[0.9]"
							style={{ color: colors.CED_red }}>
							EN EL
						</motion.span>
						<motion.span
							className="text-[45px] md:text-[65px] xl:text-[60px] font-black leading-[0.9]"
							style={{ color: colors.CRC_green }}>
							ÁMBITO SOCIAL
						</motion.span>
					</div>
				</h1>
			</motion.div>
		</div>
	);
}
