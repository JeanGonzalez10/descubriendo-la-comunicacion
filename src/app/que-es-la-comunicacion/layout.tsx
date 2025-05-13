import { Metadata } from "next";
import "./comunicacion.css";

export const metadata: Metadata = {
	title: "¿Qué es la Comunicación? | Universidad de Medellín",
	description:
		"Descubre la importancia de la comunicación como base fundamental para la sociedad, construyendo identidad, cultura y desarrollo personal.",
};

export default function ComunicacionLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// Generar estrellas de fondo al estilo de Hogwarts
	const stars = Array.from({ length: 50 }).map((_, i) => {
		const size = Math.random() > 0.8 ? "large" : "";
		const left = `${Math.random() * 100}%`;
		const top = `${Math.random() * 100}%`;
		const duration = `${3 + Math.random() * 7}s`;
		const delay = `${Math.random() * 5}s`;
		return (
			<div
				key={`star-${i}`}
				className={`hogwarts-star ${size}`}
				style={{
					left,
					top,
					animationDuration: duration,
					animationDelay: delay,
				}}
			/>
		);
	});

	// Generar plumas flotantes
	const quills = Array.from({ length: 5 }).map((_, i) => {
		const left = `${10 + Math.random() * 80}%`;
		const top = `${Math.random() * 100}%`;

		return (
			<div key={`quill-${i}`} className="quill" style={{ left, top }}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					fill="currentColor">
					<path d="M160 480c0 17.7-14.3 32-32 32s-32-14.3-32-32V347.3C60.7 330.7 32 292.4 32 248c0-48.6 26.8-90.5 66.2-112.3C89.4 91.4 89 44.3 89 43.2c0-6.8 4.1-13 10.4-15.6S111.8 26 118 30.8c1.6 1.2 67.3 50.9 93.5 162.2c4.7 19.9 4.7 40.8 0 60.6c-4.5 19-27.1 106-68.5 188.5c-3.2 6.3-9.8 10-16.7 9.8s-13.2-4.4-16-10.9L65.6 329.5c-10.5 19.5-17.6 41.4-17.6 64.8c0 33.9 21.8 54.1 49.9 54.1c5.5 0 10.9-.7 16-2c7.9-2 16.1 2.8 18.1 10.7s-2.8 16.1-10.7 18.1c-7.7 2-15.7 3.1-24.3 3.1c-25.8 0-51.7-13-67.2-35.1C18.8 431.8 16 418.4 16 404.1V271.8c-5.2-7-8-15.5-8-24.5V216c0-12.4 4.9-23.7 12.9-32c8-8.4 19.3-13.2 31.1-13.2h42s-7.5-15-7.5-32c0-32 17-72 96-72c30.8 0 35.5 8 59.1 8c25.1 0 31.9-8 31.9-8c30.2 0 53 37.5 53 72c0 25-14.5 47.4-40 79.4c-1.7 2.2-3.5 4.4-5.3 6.8V296c0 66.3-53.7 120-120 120c-12.3 0-24.2-1.9-35.4-5.3V480zm48-120c48.6 0 88-39.4 88-88v-40.2c48.7-69.4 64-112.1 64-143.8c0-16.9-9.5-40-21-40c-5.3 0-9 12.5-44.5 12.5c-22.6 0-39.1-7-73.6-7c-48.1 0-64 19.9-64 40c0 17 11.3 36.4 11.3 36.4H48c-4.4 0-8.9 1.9-12.3 5.4s-5.7 8-5.7 12.6v31.4c0 4.5 2 8.7 5.3 11.4l15.8 13.3c3.7 3.1 5.9 7.7 5.9 12.6V363c0 17.6 14.4 32 32 32h25.3c12 8.2 26.4 12.9 41.7 12.9h52z" />
				</svg>
			</div>
		);
	});
	return (
		<div className="min-h-screen bg-gradient-to-bl from-black via-blue-950/10 to-black parchment-bg scroll-border flex flex-col">
			{/* Estrellas mágicas */}
			<div className="hogwarts-stars">{stars}</div>

			{/* Plumas flotantes */}
			{quills}

			<div className="relative z-10 flex-grow">{children}</div>
		</div>
	);
}
