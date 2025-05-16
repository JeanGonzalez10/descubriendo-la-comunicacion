"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ActionButtonProps {
	children: ReactNode;
	href?: string;
	onClick?: () => void;
	gradient?: string;
	glowColor?: string;
	textColor?: string;
	className?: string;
	fullWidth?: boolean;
	withShimmer?: boolean;
	icon?: ReactNode;
}

export function ActionButton({
	children,
	href,
	onClick,
	gradient = "linear-gradient(90deg, #9B5DE5, #00CFFF)",
	glowColor = "#00CFFF50",
	textColor = "#FFFFFF",
	className = "",
	fullWidth = false,
	withShimmer = true,
	icon,
}: ActionButtonProps) {
	const ButtonContent = () => (
		<>
			{/* Efecto de brillo al pasar el mouse */}
			{withShimmer && (
				<div
					className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
					style={{
						background:
							"linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
						transform: "skewX(-30deg) translateX(-100%)",
					}}
					onMouseEnter={(e) => {
						const target = e.currentTarget;
						target.style.transform = "skewX(-30deg) translateX(200%)";
						target.style.transition = "transform 0.8s ease";
					}}
				/>
			)}

			{/* Contenido del botón */}
			<div className="flex items-center gap-2 relative">
				{icon}
				<span style={{ color: textColor }}>{children}</span>
			</div>
		</>
	);

	const buttonStyles = {
		background: gradient,
		boxShadow: `0 4px 15px -3px ${glowColor}`,
	};

	const widthClass = fullWidth ? "w-full" : "";

	if (href) {
		return (
			<motion.a
				href={href}
				target={href.startsWith("http") ? "_blank" : undefined}
				rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
				className={`flex items-center justify-center gap-2 py-2 px-4 rounded-full transition-all duration-300 relative overflow-hidden group ${widthClass} ${className}`}
				style={buttonStyles}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.98 }}>
				<ButtonContent />
			</motion.a>
		);
	}

	return (
		<motion.button
			onClick={onClick}
			className={`flex items-center justify-center gap-2 py-2 px-4 rounded-full transition-all duration-300 relative overflow-hidden group ${widthClass} ${className}`}
			style={buttonStyles}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.98 }}>
			<ButtonContent />
		</motion.button>
	);
}
