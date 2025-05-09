"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

export function MainTitle() {
	const { colors } = useTheme();
	return (
		<div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
			<motion.div
				className="text-center flex flex-col items-center justify-center"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}>
				<h1 className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-6">
					<motion.span
						className="text-[40px] sm:text-[50px] md:text-[70px] lg:text-[85px] xl:text-[95px] font-black leading-[1] md:leading-[0.9]"
						style={{ color: colors.CLA_blue }}
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.1 }}>
						COMUNICACIÓN
					</motion.span>{" "}
					<div className="flex flex-col md:flex-row items-center justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 mt-1">
						<motion.span
							className="text-[30px] sm:text-[40px] md:text-[55px] lg:text-[70px] xl:text-[75px] font-black leading-[1] md:leading-[0.9]"
							style={{ color: colors.CED_red }}
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.3 }}>
							COMO
						</motion.span>
						<motion.span
							className="text-[30px] sm:text-[40px] md:text-[55px] lg:text-[70px] xl:text-[75px] font-black leading-[1] md:leading-[0.9]"
							style={{ color: colors.CGP_yellow }}
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.5 }}>
							HERRAMIENTA
						</motion.span>
					</div>{" "}
					<div className="flex flex-col md:flex-row items-center justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 mt-1">
						<motion.span
							className="text-[25px] sm:text-[35px] md:text-[50px] lg:text-[65px] xl:text-[70px] font-black leading-[1] md:leading-[0.9]"
							style={{ color: colors.CED_red }}
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.7 }}>
							EN EL
						</motion.span>
						<motion.span
							className="text-[25px] sm:text-[35px] md:text-[50px] lg:text-[65px] xl:text-[70px] font-black leading-[1] md:leading-[0.9]"
							style={{ color: colors.CRC_green }}
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.9 }}>
							ÁMBITO SOCIAL
						</motion.span>
					</div>
				</h1>
			</motion.div>
		</div>
	);
}
