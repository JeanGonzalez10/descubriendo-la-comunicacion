"use client";

interface FloatingElementProps {
	position: string; // Clase de posición (ej: "-top-8 -right-8")
	size: string; // Tamaño (ej: "w-16 h-16")
	color: string; // Color de fondo
	opacity?: number; // Opacidad
	animationDuration?: string; // Duración de animación
	animationDelay?: string; // Retraso de animación
	isHidden?: boolean; // Para control responsive
	className?: string; // Clases adicionales
}

interface FloatingElementsProps {
	elements: FloatingElementProps[];
	className?: string;
}

export function FloatingElements({
	elements,
	className = "",
}: FloatingElementsProps) {
	return (
		<div className={`absolute inset-0 pointer-events-none ${className}`}>
			{elements.map((element, index) => (
				<FloatingElement key={index} {...element} />
			))}
		</div>
	);
}

function FloatingElement({
	position,
	size,
	color,
	opacity = 0.8,
	animationDuration = "4s",
	animationDelay = "0s",
	isHidden = false,
	className = "",
}: FloatingElementProps) {
	const hiddenClass = isHidden ? "hidden sm:block" : "";

	return (
		<div
			className={`absolute ${position} ${size} opacity-${
				opacity * 100
			} z-0 ${hiddenClass} ${className}`}>
			<div
				className="absolute inset-0 rounded-full glow-effect"
				style={{
					background: color,
					animationDuration,
					animationDelay,
				}}
			/>
		</div>
	);
}
