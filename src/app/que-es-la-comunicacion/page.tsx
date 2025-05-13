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
			<header className="w-full z-50 sticky top-0 bg-black/20 backdrop-blur-sm">
				<Navigation />
			</header>
			<main className="flex flex-col items-center w-full max-w-[100vw] overflow-x-hidden">
				{/* Fondo con efecto de estrellas */}
				<div className="absolute inset-0 -z-10 overflow-hidden">
					<div className="stars"></div>
				</div>

				{/* Componente principal */}
				<section className="w-full flex items-center justify-center py-5 sm:py-6 md:py-8 lg:py-10">
					<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20">
						{/* Título de la sección */}
						<TituloComunicacion />
						{/* Contenedor principal con la introducción */}
						<IntroduccionComunicacion />
						{/* Cita decorativa con estilo de hechizo */}
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
