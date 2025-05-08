import { motion } from "framer-motion";

export function Introduction() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			className="max-w-4xl mx-auto text-center px-4">
			<div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10">
				<p className="text-white/90 text-xl leading-relaxed tracking-wide">
					¡Bienvenido a un mundo donde la magia no se lanza con varitas, sino
					con ideas, imágenes y palabras! Te invitamos a conocer nuestra{" "}
					<span className="text-yellow-400 font-semibold">
						rueda encantada de la comunicación
					</span>
					, inspirada en el universo de{" "}
					<span className="text-yellow-400 font-semibold">Harry Potter</span>,
					donde cada casa representa una de las cuatro carreras de Comunicación
					que ofrece la
					<span className="text-yellow-400 font-semibold hover:text-yellow-200">
						{" "}
						<a
							href="https://www.udem.edu.co"
							target="_blank"
							rel="noopener noreferrer">
							Universidad de Medellín
						</a>
					</span>
					. Descubre a qué estilo perteneces: ¿serás un estratega de las
					relaciones corporativas, un mago del diseño gráfico, un hechicero del
					entretenimiento digital o un narrador audiovisual? Da el giro, explora
					tu perfil y encuentra la carrera que hará brillar tu talento como
					nunca antes.
					<span className="block mt-4 text-2xl font-semibold text-yellow-400">
						¡La aventura apenas comienza!
					</span>
				</p>
			</div>
		</motion.div>
	);
}
