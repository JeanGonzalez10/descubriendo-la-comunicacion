"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StyledTitleProps {
	children: ReactNode;
	textColor?: string;
	strokeColor?: string;
	shadowColor?: string;
	className?: string;
	fontSize?: string;
	delay?: number;
}

export function StyledTitle({
	children,
	textColor = "#FFFFFF",
	strokeColor = "#00CFFF40",
	shadowColor = "#00CFFF30",
	className = "",
	fontSize = "text-[40px] sm:text-[55px] md:text-[75px] lg:text-[90px]",
	delay = 0.1,
}: StyledTitleProps) {
	return (
		<motion.span
			className={`block ${fontSize} font-black tracking-tight ${className}`}
			style={{
				color: textColor,
				WebkitTextStroke: `1px ${strokeColor}`,
				textShadow: `0 0 20px ${shadowColor}, 0 0 40px ${shadowColor.replace(
					"30",
					"20"
				)}`,
			}}
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay }}
			whileHover={{ scale: 1.02 }}>
			{children}
		</motion.span>
	);
}
