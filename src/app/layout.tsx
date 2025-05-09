import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	weight: ["300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	display: "swap",
});

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
			<body className={`${poppins.className} min-h-screen`}>{children}</body>
		</html>
	);
}
