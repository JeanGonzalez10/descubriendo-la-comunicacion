"use client";

import { Colors } from "../sections/que-es-la-comunicacion/utilsComunicacion";

interface SectionSeparatorProps {
	gradientColor?: string;
	dotColor?: string;
}

export function SectionSeparator({
	gradientColor = Colors.accent.green,
	dotColor = Colors.accent.purple,
}: SectionSeparatorProps) {
	return (
		<div className="flex items-center gap-3 py-4">
			<div
				className="h-px flex-1"
				style={{
					background: `linear-gradient(to right, transparent, ${gradientColor}, transparent)`,
				}}></div>
			<div
				className="w-3 h-3 rounded-full"
				style={{
					background: dotColor,
				}}></div>
			<div
				className="h-px flex-1"
				style={{
					background: `linear-gradient(to right, transparent, ${gradientColor}, transparent)`,
				}}></div>
		</div>
	);
}
