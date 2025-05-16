"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";

interface HoverCardProps {
	children: ReactNode;
	backgroundImage?: string;
	backgroundOverlay?: string;
	hoverColor?: string;
	className?: string;
	layoutId?: string;
	onClick?: () => void;
	cornerSize?: number;
	cornerColor?: string;
}

export function HoverCard({
	children,
	backgroundImage,
	backgroundOverlay = "bg-gradient-to-t from-black/90 to-transparent",
	hoverColor,
	className = "",
	layoutId,
	onClick,
}: HoverCardProps) {
	const BaseCard = layoutId ? motion.div : "div";

	return (
		<BaseCard
			layoutId={layoutId}
			onClick={onClick}
			className={`group relative rounded-3xl overflow-hidden cursor-pointer ${className}`}
			whileHover={
				!layoutId
					? {
							scale: 1.03,
							transition: { duration: 0.2 },
					  }
					: undefined
			}>
			{/* Fondo con imagen */}
			{backgroundImage && (
				<div className="absolute inset-0 overflow-hidden rounded-3xl transform group-hover:scale-110 transition-transform duration-700">
					<Image
						src={backgroundImage}
						alt="Background"
						fill
						className="object-cover"
					/>
					<div className={`absolute inset-0 ${backgroundOverlay}`} />

					{/* Overlay de color hover */}
					{hoverColor && (
						<div
							className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
							style={{
								background: `linear-gradient(180deg, transparent 0%, ${hoverColor} 100%)`,
							}}
						/>
					)}
				</div>
			)}

			{/* Contenido */}
			{children}
		</BaseCard>
	);
}
