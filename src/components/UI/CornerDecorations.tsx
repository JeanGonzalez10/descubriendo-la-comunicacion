"use client";

import { Colors } from "../sections/que-es-la-comunicacion/utilsComunicacion";

interface CornerDecorationsProps {
	topLeftColor?: string;
	topRightColor?: string;
	bottomLeftColor?: string;
	bottomRightColor?: string;
	size?: number;
	rounded?: boolean;
	opacity?: number;
}

export function CornerDecorations({
	topLeftColor = Colors.primary.main,
	topRightColor = Colors.accent.purple,
	bottomLeftColor = Colors.accent.green,
	bottomRightColor = Colors.accent.orange,
	size = 10,
	rounded = true,
	opacity = 0.6,
}: CornerDecorationsProps) {
	const roundedClass = rounded ? "rounded-tl-lg" : "";
	const roundedClassTR = rounded ? "rounded-tr-lg" : "";
	const roundedClassBL = rounded ? "rounded-bl-lg" : "";
	const roundedClassBR = rounded ? "rounded-br-lg" : "";

	return (
		<>
			<div
				className={`absolute top-2 left-2 w-${size} h-${size} border-t-2 border-l-2 ${roundedClass}`}
				style={{
					borderColor: topLeftColor,
					opacity: opacity,
				}}></div>
			<div
				className={`absolute top-2 right-2 w-${size} h-${size} border-t-2 border-r-2 ${roundedClassTR}`}
				style={{
					borderColor: topRightColor,
					opacity: opacity,
				}}></div>
			<div
				className={`absolute bottom-2 left-2 w-${size} h-${size} border-b-2 border-l-2 ${roundedClassBL}`}
				style={{
					borderColor: bottomLeftColor,
					opacity: opacity,
				}}></div>
			<div
				className={`absolute bottom-2 right-2 w-${size} h-${size} border-b-2 border-r-2 ${roundedClassBR}`}
				style={{
					borderColor: bottomRightColor,
					opacity: opacity,
				}}></div>
		</>
	);
}
