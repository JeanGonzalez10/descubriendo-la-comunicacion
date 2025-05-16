"use client";

import { motion } from "framer-motion";
import { Colors } from "../sections/que-es-la-comunicacion/utilsComunicacion";

interface SectionTitleProps {
	mainText: string;
	secondaryText: string;
	mainGradient?: string;
	secondaryColor?: string;
	decorativeElement?: boolean;
	className?: string;
}

export function SectionTitle({
	mainText,
	secondaryText,
	mainGradient = Colors.gradients.blue,
	secondaryColor = Colors.secondary.main,
	decorativeElement = true,
	className = "",
}: SectionTitleProps) {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			className={`text-center mb-10 ${className}`}>
			<h2 className="flex flex-col gap-1 relative">
				<motion.span
					className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[50px] font-black leading-[1.1]"
					style={{
						background: mainGradient,
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
						backgroundClip: "text",
					}}
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}>
					{mainText}
				</motion.span>
				<motion.span
					className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] font-black leading-[1.1] glow-text"
					style={{ color: secondaryColor }}
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}>
					{secondaryText}
				</motion.span>

				{decorativeElement && (
					<motion.div
						className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-32 h-1 opacity-70"
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 0.7 }}
						transition={{ duration: 1, delay: 0.6 }}
						style={{ background: Colors.gradients.mixed }}></motion.div>
				)}
			</h2>
		</motion.div>
	);
}
