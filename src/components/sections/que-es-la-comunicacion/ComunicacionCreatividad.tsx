"use client";

import { motion } from "framer-motion";
import { itemVariants, Colors } from "./utilsComunicacion";
import {
	GlassCard,
	BorderDecorations,
	CornerDecorations,
	GeometricBackground,
	SectionSeparator,
	SectionTitle,
	ImageCard,
} from "@/components/UI";

export function ComunicacionCreatividad() {
	return (
		<div className="mt-32 mb-8">
			<SectionTitle
				mainText="LA COMUNICACIÓN Y"
				secondaryText="LA CREATIVIDAD"
				mainGradient={Colors.gradients.purple}
				secondaryColor={Colors.accent.green}
			/>

			<GlassCard className="max-w-5xl mx-auto" withAnimation={true}>
				<GeometricBackground
					showStars={false}
					showPattern={false}
					elements={[
						{
							size: "100%",
							gradient:
								"linear-gradient(to bottom, rgba(155,93,229,0.05), rgba(42,255,165,0.05), rgba(0,207,255,0.05))",
							position: "inset: 0",
						},
					]}
				/>

				{/* Ornamentos modernos con gradientes */}
				<BorderDecorations
					topGradient={Colors.gradients.purple}
					bottomGradient={Colors.gradients.green}
					opacity={0.7}
				/>

				<CornerDecorations
					topLeftColor={Colors.primary.main}
					topRightColor={Colors.accent.purple}
					bottomLeftColor={Colors.accent.green}
					bottomRightColor={Colors.primary.main}
					size={10}
					opacity={0.6}
				/>

				<div className="space-y-8 relative z-10">
					<motion.div variants={itemVariants} className="flex flex-col gap-6">
						<p className="text-base sm:text-lg text-white/90 leading-relaxed">
							La comunicación y la creatividad establecen una{" "}
							<span
								className="font-bold"
								style={{ color: Colors.accent.green }}>
								relación simbiótica
							</span>{" "}
							donde ambas se potencian. La comunicación efectiva permite
							transmitir ideas creativas, mientras que la creatividad enriquece
							los procesos comunicativos con nuevas perspectivas, formatos y
							lenguajes.
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<h3
									className="text-xl font-bold mb-4"
									style={{ color: Colors.primary.light }}>
									La creatividad en la comunicación
								</h3>
								<p className="text-white/90">
									En un mundo saturado de información, la comunicación creativa
									es crucial para destacar y captar la atención del público.
									Permite desarrollar mensajes más persuasivos y memorables,
									facilitando:
								</p>

								<ul className="list-disc list-inside mt-3 space-y-2 text-white/80">
									<li>Generación de contenidos originales</li>
									<li>Estrategias de comunicación innovadoras</li>
									<li>Soluciones a problemas de comunicación complejos</li>
									<li>Narrativas y experiencias impactantes</li>
								</ul>
							</div>

							<ImageCard
								src="/images/Freedom.png"
								alt="Expresión creativa a través de la comunicación"
								caption="La libertad creativa en la comunicación"
								borderColor={Colors.accent.purple}
							/>
						</div>

						<SectionSeparator
							gradientColor={Colors.accent.purple}
							dotColor={Colors.primary.main}
						/>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<ImageCard
								src="/images/escultura.png"
								alt="Arte como forma de comunicación"
								caption="El arte como expresión comunicativa"
								borderColor={Colors.accent.green}
							/>

							<div>
								<h3
									className="text-xl font-bold mb-4"
									style={{ color: Colors.primary.light }}>
									El lenguaje creativo
								</h3>
								<p className="text-white/90">
									La creatividad permite a los comunicadores expresarse a través
									de múltiples lenguajes y formatos, adaptándose a diferentes
									públicos y contextos. La comunicación creativa:
								</p>

								<ul className="list-disc list-inside mt-3 space-y-2 text-white/80">
									<li>Trasciende barreras culturales y lingüísticas</li>
									<li>
										Combina elementos visuales, sonoros, textuales y
										experienciales
									</li>
									<li>Adapta mensajes a diferentes plataformas y medios</li>
									<li>Estimula el pensamiento lateral y la innovación</li>
								</ul>
							</div>
						</div>

						<SectionSeparator
							gradientColor={Colors.accent.purple}
							dotColor={Colors.secondary.main}
						/>

						<div>
							<h3
								className="text-xl font-bold mb-4 text-center"
								style={{ color: Colors.accent.green }}>
								La comunicación creativa en la era digital
							</h3>
							<p className="text-white/90 text-center">
								El entorno digital ha multiplicado exponencialmente las
								posibilidades creativas en la comunicación, dando lugar a nuevas
								narrativas transmedia, realidades aumentadas, experiencias
								interactivas y formatos híbridos que combinan lo mejor de
								diferentes disciplinas comunicativas.
							</p>

							<div className="mt-6 p-4 border border-[#2AFFA5]/30 bg-[#2AFFA5]/5 rounded-lg">
								<p
									className="text-center text-lg font-semibold"
									style={{ color: Colors.accent.green }}>
									&quot;La creatividad es la inteligencia divirtiéndose, y la
									comunicación es su campo de juego favorito.&quot;
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</GlassCard>
		</div>
	);
}
