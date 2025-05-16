"use client";

import { Colors } from "../sections/que-es-la-comunicacion/utilsComunicacion";

interface BorderDecorationsProps {
	topGradient?: string;
	bottomGradient?: string;
	opacity?: number;
}

export function BorderDecorations({
	topGradient = Colors.gradients.blue,
	bottomGradient = Colors.gradients.pink,
	opacity = 0.7,
}: BorderDecorationsProps) {
	return (
		<>
			<div
				className="absolute top-0 left-0 w-full h-2"
				style={{
					background: topGradient,
					opacity: opacity,
				}}></div>
			<div
				className="absolute bottom-0 left-0 w-full h-2"
				style={{
					background: bottomGradient,
					opacity: opacity,
				}}></div>
		</>
	);
}
