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
	return (
		<div className="min-h-screen bg-gradient-to-bl from-black via-blue-950/10 to-black parchment-bg scroll-border flex flex-col">
			<div className="relative z-10 flex-grow">{children}</div>
		</div>
	);
}
