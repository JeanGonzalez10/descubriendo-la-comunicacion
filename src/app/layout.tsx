import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Comunicación Social",
	description: "Comunicación como herramienta en el ámbito social",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es">
			<body className={`${inter.className} min-h-screen`}>{children}</body>
		</html>
	);
}
