"use client";

import { Navigation } from "@/components/layout/Navigation";
import { MainTitle } from "@/components/sections/MainTitle";
import { CircleWheel } from "@/components/sections/CircleWheel";
import { Introduction } from "@/components/sections/Introduction";
import { TeamPresentation } from "@/components/sections/TeamPresentation";

export default function Home() {
	return (
		<div className="flex flex-col items-center w-full gap-20">
			<header className="w-full z-50 sticky top-0 bg-black/20 backdrop-blur-sm">
				<Navigation />
			</header>
			<main className="flex flex-col items-center w-full gap-32 py-32">
				<section className="w-full flex items-center justify-center">
					<MainTitle />
				</section>
				<section className="w-full flex items-center justify-center">
					<Introduction />
				</section>
				<section className="w-full flex items-center justify-center">
					<CircleWheel />
				</section>
				<section className="w-full flex items-center justify-center">
					<TeamPresentation />
				</section>
			</main>
		</div>
	);
}
