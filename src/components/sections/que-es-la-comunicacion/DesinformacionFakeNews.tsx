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

export function DesinformacionFakeNews() {
	return (
		<div className="mt-32 mb-8">
			<SectionTitle
				mainText="DESINFORMACIÓN Y"
				secondaryText="FAKE NEWS"
				mainGradient={Colors.gradients.pink}
				secondaryColor={Colors.accent.orange}
			/>

			<GlassCard className="max-w-5xl mx-auto" withAnimation={true}>
				<GeometricBackground
					showStars={false}
					showPattern={false}
					elements={[
						{
							size: "100%",
							gradient:
								"linear-gradient(to bottom, rgba(255,61,127,0.05), rgba(255,140,66,0.05), rgba(0,207,255,0.05))",
							position: "inset: 0",
						},
					]}
				/>
				{/* Ornamentos modernos con gradientes */}{" "}
				<BorderDecorations
					topGradient={Colors.gradients.pink}
					bottomGradient={Colors.gradients.mixed}
					opacity={0.7}
				/>{" "}
				<CornerDecorations
					topLeftColor={Colors.primary.main}
					topRightColor={Colors.secondary.main}
					bottomLeftColor={Colors.accent.orange}
					bottomRightColor={Colors.primary.main}
					size={10}
					opacity={0.6}
				/>
				<div className="space-y-8 relative z-10">
					<motion.div variants={itemVariants} className="flex flex-col gap-6">
						<p className="text-base sm:text-lg text-white/90 leading-relaxed">
							En la era de la información, la{" "}
							<span
								className="font-bold"
								style={{ color: Colors.accent.orange }}>
								sobrecarga de contenidos
							</span>{" "}
							y la velocidad con la que se propagan las noticias ha generado un
							terreno fértil para la desinformación y las noticias falsas (fake
							news). Este fenómeno representa un desafío significativo para la
							sociedad contemporánea y los profesionales de la comunicación.
						</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								{" "}
								<h3
									className="text-xl font-bold mb-4"
									style={{ color: Colors.secondary.main }}>
									¿Qué son las fake news?
								</h3>
								<p className="text-white/90">
									Las fake news son contenidos deliberadamente falsos que se
									presentan como noticias reales con el fin de:
								</p>
								<ul className="list-disc list-inside mt-3 space-y-2 text-white/80">
									<li>Influir en la opinión pública</li>
									<li>Generar confusión o pánico</li>
									<li>Polarizar a la sociedad</li>
									<li>Obtener beneficios económicos (clickbait)</li>
									<li>Dañar la reputación de personas o instituciones</li>
								</ul>
							</div>{" "}
							<ImageCard
								src="/images/noticias-falsas.png"
								alt="Representación de noticias falsas en medios"
								caption="La proliferación de noticias falsas en los medios"
								borderColor={Colors.secondary.main}
							/>
						</div>
						<SectionSeparator
							gradientColor={Colors.accent.orange}
							dotColor={Colors.primary.main}
						/>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<ImageCard
								src="/images/black-lives-matter.png"
								alt="Movimientos sociales afectados por la desinformación"
								caption="Desinformación y movimientos sociales"
								borderColor={Colors.accent.orange}
							/>

							<div>
								<h3
									className="text-xl font-bold mb-4"
									style={{ color: Colors.secondary.main }}>
									Impacto de la desinformación
								</h3>
								<p className="text-white/90">
									La desinformación tiene consecuencias tangibles en diversos
									ámbitos:
								</p>

								<ul className="list-disc list-inside mt-3 space-y-2 text-white/80">
									<li>Afecta procesos democráticos y electorales</li>
									<li>
										Compromete la salud pública (ej. información errónea sobre
										vacunas)
									</li>
									<li>Alimenta teorías conspirativas</li>
									<li>Erosiona la confianza en los medios tradicionales</li>
									<li>Profundiza divisiones sociales existentes</li>
								</ul>
							</div>
						</div>{" "}
						<SectionSeparator
							gradientColor={Colors.secondary.main}
							dotColor={Colors.secondary.main}
						/>
						<div>
							<h3
								className="text-xl font-bold mb-4 text-center"
								style={{ color: Colors.secondary.main }}>
								El rol del comunicador frente a la desinformación
							</h3>
							<p className="text-white/90 text-center">
								Los profesionales de la comunicación tienen la responsabilidad
								de combatir la desinformación mediante el ejercicio ético de su
								profesión, verificando fuentes, contextualizando información y
								educando al público sobre cómo detectar noticias falsas.
							</p>

							<div className="mt-6 p-4 border border-[#FF3D7F]/30 bg-[#FF3D7F]/5 rounded-lg">
								{" "}
								<h4
									className="text-center text-lg font-semibold mb-3"
									style={{ color: Colors.secondary.main }}>
									Herramientas contra la desinformación
								</h4>
								<div className="grid grid-cols-2 gap-3 text-white/80">
									<div className="p-2 border border-white/20 rounded">
										<p className="font-medium mb-1">Fact-checking</p>
										<p className="text-sm">
											Verificación sistemática de hechos y declaraciones
										</p>
									</div>
									<div className="p-2 border border-white/20 rounded">
										<p className="font-medium mb-1">Alfabetización mediática</p>
										<p className="text-sm">
											Educar al público sobre consumo crítico de información
										</p>
									</div>
									<div className="p-2 border border-white/20 rounded">
										<p className="font-medium mb-1">Transparencia</p>
										<p className="text-sm">
											Revelar fuentes y metodologías periodísticas
										</p>
									</div>
									<div className="p-2 border border-white/20 rounded">
										<p className="font-medium mb-1">Regulación tecnológica</p>
										<p className="text-sm">
											Políticas para plataformas digitales contra la
											desinformación
										</p>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</GlassCard>
		</div>
	);
}
