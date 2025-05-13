"use client";

import { Navigation } from "@/components/layout/Navigation";
import { MainTitle } from "@/components/sections/MainTitle";
import { CircleWheel } from "@/components/sections/CircleWheel";
import { Introduction } from "@/components/sections/Introduction";
import { TeamPresentation } from "@/components/sections/TeamPresentation";
import { TestVocacional } from "@/components/sections/TestVocacional";
import { EntrevistaEstudiantes } from "@/components/sections/EntrevistaEstudiantes";

export default function Home() {
	return (
		<div className="flex flex-col items-center w-full">
			<header className="w-full z-50 sticky top-0 bg-black/20 backdrop-blur-sm">
				<Navigation />
			</header>
			<main className="flex flex-col items-center w-full max-w-[100vw] overflow-x-hidden">
				{" "}
				{/* Título principal */}
				<section className="w-full flex items-center justify-center py-6 sm:py-8 md:py-12 lg:py-16">
					<MainTitle />
				</section>
				{/* Separador con gradiente */}
				<div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-3 sm:my-4 md:my-5 lg:my-6" />
				{/* Introducción */}
				<section className="w-full flex items-center justify-center py-5 sm:py-6 md:py-8 lg:py-10">
					<Introduction />
				</section>
				{/* Separador con gradiente */}
				<div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-3 sm:my-4 md:my-5 lg:my-6" />
				{/* CircleWheel */}
				<section className="w-full flex items-center justify-center py-5 sm:py-6 md:py-8 lg:py-10">
					<CircleWheel />
				</section>
				{/* Separador con gradiente */}
				<div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-3 sm:my-4 md:my-5 lg:my-6" />{" "}
				{/* Presentación del equipo */}
				<section className="w-full flex items-center justify-center py-5 sm:py-6 md:py-8 lg:py-10">
					<TeamPresentation />
				</section>
				{/* Separador con gradiente */}
				<div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-3 sm:my-4 md:my-5 lg:my-6" />
				{/* Test vocacional */}
				<section className="w-full flex items-center justify-center py-5 sm:py-6 md:py-8 lg:py-10 mb-3 sm:mb-4 md:mb-6 lg:mb-8">
					<TestVocacional />
				</section>
				{/* Separador con gradiente */}
				<div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-3 sm:my-4 md:my-5 lg:my-6" />
				{/* Entrevistas a Estudiantes */}
				<section className="w-full flex items-center justify-center py-5 sm:py-6 md:py-8 lg:py-10">
					<EntrevistaEstudiantes />
				</section>
			</main>
		</div>
	);
}
