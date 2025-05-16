"use client";

import { Colors } from "../sections/que-es-la-comunicacion/utilsComunicacion";

interface VideoFrameProps {
	src: string;
	title: string;
	borderColor?: string;
	glowColor?: string;
	rounded?: boolean;
	onLoad?: () => void;
}

export function VideoFrame({
	src,
	title,
	borderColor = Colors.primary.main,
	glowColor = Colors.primary.main,
	rounded = true,
	onLoad,
}: VideoFrameProps) {
	const roundedClass = rounded ? "rounded-lg" : "";

	return (
		<div
			className={`w-full aspect-video overflow-hidden ${roundedClass} shadow-2xl relative`}>
			<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 via-transparent to-[#1A1A1A]/50 pointer-events-none z-10"></div>{" "}
			<iframe
				className="w-full h-full"
				src={src}
				title={title}
				onLoad={onLoad}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen></iframe>
			{/* Marcos decorativos en las esquinas del video */}
			<div
				className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 rounded-tl pointer-events-none z-20"
				style={{
					borderColor: borderColor,
					boxShadow: `0 0 10px ${glowColor}`,
				}}></div>
			<div
				className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 rounded-tr pointer-events-none z-20"
				style={{
					borderColor: borderColor,
					boxShadow: `0 0 10px ${glowColor}`,
				}}></div>
			<div
				className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 rounded-bl pointer-events-none z-20"
				style={{
					borderColor: borderColor,
					boxShadow: `0 0 10px ${glowColor}`,
				}}></div>
			<div
				className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 rounded-br pointer-events-none z-20"
				style={{
					borderColor: borderColor,
					boxShadow: `0 0 10px ${glowColor}`,
				}}></div>
		</div>
	);
}
