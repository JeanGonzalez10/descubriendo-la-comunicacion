"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Colors } from "../sections/que-es-la-comunicacion/utilsComunicacion";

interface ImageCardProps {
	src: string;
	alt: string;
	caption?: string;
	borderColor?: string;
	aspectRatio?: string;
	hover?: boolean;
	glowEffect?: boolean;
}

export function ImageCard({
	src,
	alt,
	caption,
	borderColor = Colors.primary.main,
	aspectRatio = "4/3",
	hover = true,
	glowEffect = true,
}: ImageCardProps) {
	const MotionComponent = hover ? motion.div : "div";
	const hoverProps = hover
		? {
				whileHover: { scale: 1.02 },
				transition: { duration: 0.3 },
		  }
		: {};

	const glowStyles = glowEffect
		? {
				boxShadow: `0 0 8px ${borderColor}`,
		  }
		: {};

	return (
		<MotionComponent
			className="relative overflow-hidden rounded-lg shadow-lg h-full"
			{...hoverProps}>
			<div className={`relative aspect-[${aspectRatio}] w-full h-full`}>
				<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
				<Image
					src={src}
					alt={alt}
					className="w-full h-full object-cover"
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>

				{/* Esquinas decorativas */}
				<div
					className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 rounded-tl pointer-events-none z-20"
					style={{
						borderColor: borderColor,
						...(glowEffect && glowStyles),
					}}></div>
				<div
					className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 rounded-tr pointer-events-none z-20"
					style={{
						borderColor: borderColor,
						...(glowEffect && glowStyles),
					}}></div>
				<div
					className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 rounded-bl pointer-events-none z-20"
					style={{
						borderColor: borderColor,
						...(glowEffect && glowStyles),
					}}></div>
				<div
					className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 rounded-br pointer-events-none z-20"
					style={{
						borderColor: borderColor,
						...(glowEffect && glowStyles),
					}}></div>

				{caption && (
					<div className="absolute bottom-0 left-0 right-0 p-3 z-20">
						<p className="text-xs sm:text-sm text-white/90 italic line-clamp-3">
							{caption}
						</p>
					</div>
				)}
			</div>
		</MotionComponent>
	);
}
