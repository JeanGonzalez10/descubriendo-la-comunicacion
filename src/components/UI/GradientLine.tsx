"use client";

import { motion } from "framer-motion";

interface GradientLineProps {
	gradient: string;
	position?: "top" | "bottom" | "horizontal-center";
	width?: string;
	height?: string;
	className?: string;
	animate?: boolean;
	delay?: number;
	initialWidth?: string;
}

export function GradientLine({
	gradient,
	position = "horizontal-center",
	width = "80%",
	height = "1.5px",
	className = "",
	animate = false,
	delay = 0.2,
	initialWidth = "0%",
}: GradientLineProps) {
	const getPositionStyles = () => {
		switch (position) {
			case "top":
				return "absolute w-full top-0";
			case "bottom":
				return "absolute w-full bottom-0";
			case "horizontal-center":
				return "mx-auto";
			default:
				return "mx-auto";
		}
	};

	const positionClass = getPositionStyles();

	return animate ? (
		<motion.div
			className={`${positionClass} rounded-full ${className}`}
			style={{
				background: gradient,
				height,
			}}
			initial={{ width: initialWidth }}
			animate={{ width }}
			transition={{ duration: 1, delay }}
		/>
	) : (
		<div
			className={`${positionClass} rounded-full ${className}`}
			style={{
				background: gradient,
				height,
				width,
			}}
		/>
	);
}
