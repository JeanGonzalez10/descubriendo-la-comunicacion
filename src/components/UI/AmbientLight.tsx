"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AmbientLightProps {
	primaryColor: string;
	secondaryColor: string;
	accentColor?: string;
	isHovered?: boolean;
	className?: string;
	children?: ReactNode;
}

export function AmbientLight({
	primaryColor,
	secondaryColor,
	accentColor,
	isHovered = false,
	className = "",
	children,
}: AmbientLightProps) {
	return (
		<div
			className={`absolute -inset-10 -z-10 opacity-20 pointer-events-none ${className}`}>
			<div
				className="absolute top-0 right-0 w-96 h-96 rounded-full"
				style={{
					background: `radial-gradient(circle, ${primaryColor}40, transparent 70%)`,
					filter: "blur(60px)",
					transform: "translate(30%, -30%)",
				}}
			/>
			<div
				className="absolute bottom-0 left-0 w-96 h-96 rounded-full"
				style={{
					background: `radial-gradient(circle, ${secondaryColor}30, transparent 70%)`,
					filter: "blur(60px)",
					transform: "translate(-30%, 30%)",
				}}
			/>

			{accentColor && (
				<motion.div
					className="absolute top-1/2 left-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full opacity-5"
					animate={{
						scale: isHovered ? [1, 1.3, 1] : 1,
						opacity: isHovered ? [0.05, 0.1, 0.05] : 0.05,
					}}
					transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
					style={{
						background: accentColor,
						filter: "blur(40px)",
						transform: "translate(-50%, -50%)",
					}}
				/>
			)}

			{children}
		</div>
	);
}
