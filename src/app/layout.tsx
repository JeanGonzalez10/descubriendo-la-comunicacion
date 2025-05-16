import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";

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
			<body
				className={`${poppins.className} min-h-screen flex flex-col overflow-x-hidden`}>
				<div className="creative-background fixed inset-0 w-full h-full -z-10"></div>
				<div className="creative-overlay fixed inset-0 w-full h-full -z-10"></div>
				<div className="flex-grow relative z-0">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
