"use client";

import { motion } from "framer-motion";

interface FloatingShapeProps {
	color: string;
	size?: string;
	position?: string;
	blur?: string;
	opacity?: number;
	animate?: boolean;
	isHovered?: boolean;
}

interface BackgroundEffectsProps {
	shapes: FloatingShapeProps[];
	className?: string;
}

export function BackgroundEffects({
	shapes,
	className = "",
}: BackgroundEffectsProps) {
	return (
		<div
			className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
			{shapes.map((shape, index) => (
				<FloatingShape key={index} {...shape} />
			))}
		</div>
	);
}

function FloatingShape({
	color,
	size = "40%",
	position = "top-0 right-0",
	blur = "30px",
	opacity = 0.3,
	animate = false,
	isHovered = false,
}: FloatingShapeProps) {
	const baseProps = {
		className: `absolute ${position} rounded-full`,
		style: {
			width: size,
			height: size,
			background: color,
			filter: `blur(${blur})`,
			opacity,
		},
	};

	return animate ? (
		<motion.div
			{...baseProps}
			animate={{
				scale: isHovered ? [1, 1.2, 1] : 1,
				opacity: isHovered ? [opacity, opacity + 0.2, opacity] : opacity,
			}}
			transition={{
				duration: 5,
				repeat: Infinity,
				repeatType: "reverse",
			}}
		/>
	) : (
		<div {...baseProps} />
	);
}
