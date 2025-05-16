"use client";

import { Navigation } from "@/components/layout/Navigation";
import { MainTitle } from "@/components/sections/MainTitle";
import { CardCareer } from "@/components/sections/cardsCareer";
import { Introduction } from "@/components/sections/Introduction";
import { TeamPresentation } from "@/components/sections/TeamPresentation";
import { TestVocacional } from "@/components/sections/TestVocacional";
import { EntrevistaEstudiantes } from "@/components/sections/EntrevistaEstudiantes";

export default function Home() {
	return (
		<div className="flex flex-col items-center w-full relative">
			{/* Elementos decorativos para el fondo */}
			<div className="decorative-lines fixed inset-0 -z-5"></div>
			<div className="fixed top-[10%] left-[5%] w-16 h-16 rounded-full bg-[#00CFFF]/10 filter blur-xl animate-pulse-slow -z-5"></div>
			<div className="fixed top-[70%] right-[8%] w-24 h-24 rounded-full bg-[#FF3D7F]/10 filter blur-xl animate-pulse-slow -z-5"></div>
			<div className="fixed top-[40%] left-[80%] w-20 h-20 rounded-full bg-[#9B5DE5]/10 filter blur-xl animate-pulse-slow -z-5"></div>
			<div className="fixed top-[80%] left-[20%] w-32 h-32 rounded-full bg-[#2AFFA5]/10 filter blur-xl animate-pulse-slow -z-5"></div>

			<header className="w-full z-50 sticky top-0 bg-black/30 backdrop-blur-md border-b border-white/5">
				<Navigation />
			</header>
			<main className="flex flex-col items-center w-full max-w-[100vw] overflow-x-hidden relative z-10">
				{" "}
				{/* Título principal */}
				<section className="w-full flex items-center justify-center py-6 sm:py-8 md:py-12 lg:py-16 relative">
					<div className="absolute inset-0 bg-gradient-to-b from-[#00CFFF]/5 via-transparent to-transparent z-0"></div>
					<MainTitle />
				</section>{" "}
				{/* Separador con gradiente */}
				<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#00CFFF]/50 to-transparent my-3 sm:my-4 md:my-5 lg:my-6 relative overflow-hidden">
					<div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-75 animate-shine"></div>
				</div>
				{/* Introducción */}
				<section className="w-full flex items-center justify-center py-5 sm:py-6 md:py-8 lg:py-10">
					<Introduction />
				</section>{" "}
				{/* Separador con gradiente */}
				<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF3D7F]/50 to-transparent my-3 sm:my-4 md:my-5 lg:my-6 relative overflow-hidden">
					<div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-75 animate-shine"></div>
				</div>
				{/* CardCareer */}
				<section
					id="carreras"
					className="w-full flex items-center justify-center py-5 sm:py-6 md:py-8 lg:py-10">
					<CardCareer />
				</section>{" "}
				{/* Separador con gradiente */}
				<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#2AFFA5]/50 to-transparent my-3 sm:my-4 md:my-5 lg:my-6 relative overflow-hidden">
					<div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-75 animate-shine"></div>
				</div>{" "}
				{/* Presentación del equipo */}
				<section className="w-full flex items-center justify-center py-5 sm:py-6 md:py-8 lg:py-10">
					<TeamPresentation />
				</section>{" "}
				{/* Separador con gradiente */}
				<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#9B5DE5]/50 to-transparent my-3 sm:my-4 md:my-5 lg:my-6 relative overflow-hidden">
					<div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-75 animate-shine"></div>
				</div>
				{/* Test vocacional */}
				<section className="w-full flex items-center justify-center py-5 sm:py-6 md:py-8 lg:py-10 mb-3 sm:mb-4 md:mb-6 lg:mb-8">
					<TestVocacional />
				</section>{" "}
				{/* Separador con gradiente */}
				<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF8C42]/50 to-transparent my-3 sm:my-4 md:my-5 lg:my-6 relative overflow-hidden">
					<div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-75 animate-shine"></div>
				</div>
				{/* Entrevistas a Estudiantes */}
				<section className="w-full flex items-center justify-center py-5 sm:py-6 md:py-8 lg:py-10">
					<EntrevistaEstudiantes />
				</section>
			</main>
		</div>
	);
}
