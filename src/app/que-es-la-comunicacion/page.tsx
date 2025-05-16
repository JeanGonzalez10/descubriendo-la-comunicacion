"use client";

import { Navigation } from "@/components/layout/Navigation";
import { TituloComunicacion } from "@/components/sections/que-es-la-comunicacion/TituloComunicacion";
import { IntroduccionComunicacion } from "@/components/sections/que-es-la-comunicacion/IntroduccionComunicacion";
import { CitaDecorada } from "@/components/sections/que-es-la-comunicacion/CitaDecorada";
import { ComunicacionHerramientaSocial } from "@/components/sections/que-es-la-comunicacion/ComunicacionHerramientaSocial";
import { DesinformacionFakeNews } from "@/components/sections/que-es-la-comunicacion/DesinformacionFakeNews";
import { ComunicacionCreatividad } from "@/components/sections/que-es-la-comunicacion/ComunicacionCreatividad";

export default function QueComunicacionPage() {
	return (
		<div className="flex flex-col items-center w-full">
			{" "}
			<header className="w-full z-50 sticky top-0 bg-black/30 backdrop-blur-md border-b border-white/5">
				<Navigation />
			</header>
			<main className="flex flex-col items-center w-full max-w-[100vw] overflow-x-hidden">
				<div className="absolute inset-0 -z-10 overflow-hidden">
					<div className="stars"></div>
					<div className="geometric-pattern"></div>
					<div
						className="geometric-element"
						style={{
							width: "300px",
							height: "300px",
							background:
								"radial-gradient(circle, rgba(0,207,255,0.2) 0%, transparent 70%)",
							top: "15%",
							left: "5%",
						}}></div>
					<div
						className="geometric-element"
						style={{
							width: "250px",
							height: "250px",
							background:
								"radial-gradient(circle, rgba(255,61,127,0.15) 0%, transparent 70%)",
							bottom: "10%",
							right: "5%",
						}}></div>
					<div
						className="geometric-element"
						style={{
							width: "200px",
							height: "200px",
							background:
								"radial-gradient(circle, rgba(42,255,165,0.15) 0%, transparent 70%)",
							top: "60%",
							left: "15%",
						}}></div>
					<div
						className="geometric-element"
						style={{
							width: "180px",
							height: "180px",
							background:
								"radial-gradient(circle, rgba(155,93,229,0.15) 0%, transparent 70%)",
							top: "30%",
							right: "15%",
						}}></div>
				</div>

				{/* Componente principal */}
				<section className="w-full flex items-center justify-center py-5 sm:py-6 md:py-8 lg:py-10">
					<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20">
						{/* Título de la sección */}
						<TituloComunicacion />
						{/* Contenedor principal con la introducción */}
						<IntroduccionComunicacion />
						{/* Cita decorativa */}
						<CitaDecorada />
						{/* Sección: Comunicación como herramienta social */}
						<ComunicacionHerramientaSocial />{" "}
						{/* Sección: Desinformación y fake news */}
						<DesinformacionFakeNews />
						{/* Sección: La comunicación y la creatividad */}
						<ComunicacionCreatividad />
					</div>
				</section>
			</main>
		</div>
	);
}
