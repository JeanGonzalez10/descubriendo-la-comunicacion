import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Test Vocacional | Universidad de Medellín",
	description:
		"Descubre tu perfil de comunicador con nuestro Test Vocacional mágico",
};

import { Navigation } from "@/components/layout/Navigation";

export default function TestVocacionalLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="min-h-screen bg-gradient-to-bl from-black via-purple-950/10 to-black flex flex-col">
			<Navigation />
			<div className="flex-grow">{children}</div>
		</div>
	);
}
