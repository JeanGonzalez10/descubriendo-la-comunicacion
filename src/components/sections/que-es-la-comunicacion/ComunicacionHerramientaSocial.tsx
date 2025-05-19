"use client";

import { motion } from "framer-motion";
import { itemVariants, Colors } from "./utilsComunicacion";
import {
	GlassCard,
	BorderDecorations,
	CornerDecorations,
	SectionSeparator,
	SectionTitle,
	VideoFrame,
} from "@/components/UI";

export function ComunicacionHerramientaSocial() {
	return (
		<div className="mt-32 mb-8">
			{" "}
			<SectionTitle
				mainText="IMPORTANCIA DE LA"
				secondaryText="COMUNICACIÓN COMO HERRAMIENTA SOCIAL"
				mainGradient={Colors.gradients.blue}
				secondaryColor={Colors.secondary.main}
			/>
			<GlassCard className="max-w-5xl mx-auto" withAnimation={true}>
				<div className="absolute inset-0 bg-gradient-to-b from-[#00CFFF]/5 via-[#2AFFA5]/5 to-[#9B5DE5]/5 opacity-20 rounded-xl"></div>

				{/* Ornamentos modernos con gradientes */}
				<BorderDecorations
					topGradient={Colors.gradients.blue}
					bottomGradient={Colors.gradients.pink}
					opacity={0.7}
				/>

				<CornerDecorations
					topLeftColor={Colors.primary.main}
					topRightColor={Colors.accent.purple}
					bottomLeftColor={Colors.accent.green}
					bottomRightColor={Colors.accent.orange}
					size={10}
					opacity={0.6}
				/>

				<div className="space-y-8 relative z-10">
					<motion.div variants={itemVariants} className="flex flex-col gap-6">
						<p
							className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed text-center italic mb-6 glow-text"
							style={{ color: Colors.primary.light }}>
							&ldquo;Las palabras tienen el poder de inspirar, unir y
							transformar nuestra realidad&rdquo;
						</p>
						<p className="text-xs sm:text-sm text-white/60 text-center">
							- Principios de la Comunicación Efectiva
						</p>
						<p className="text-base sm:text-lg text-white/90 leading-relaxed mt-4">
							La comunicación es una{" "}
							<span
								className="font-bold"
								style={{ color: Colors.accent.green }}>
								herramienta social
							</span>{" "}
							porque tiene el poder de influir en las actitudes y
							comportamientos de las personas. El comunicador utiliza esta
							herramienta para promover cambios dentro de la sociedad, denunciar
							injusticias o resaltar problemas, e incluso impulsar movimientos
							que favorezcan el bienestar común.
						</p>
						{/* Separador con estilo moderno */}
						<SectionSeparator
							gradientColor={Colors.accent.purple}
							dotColor={Colors.secondary.main}
						/>
						{/* Contenedor del video */}{" "}
						<VideoFrame
							src="https://www.youtube.com/embed/AcbAogO_ORA"
							title="Importancia de la comunicación como herramienta social"
							borderColor={Colors.primary.main}
							glowColor={Colors.primary.main}
						/>
					</motion.div>
				</div>
			</GlassCard>
		</div>
	);
}
