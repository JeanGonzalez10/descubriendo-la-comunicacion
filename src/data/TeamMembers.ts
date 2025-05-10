import { TeamMember } from "@/types/teamMember";

const colors = {
	CRC_green: "#4CAF50",
	CED_red: "#E57373",
	CLA_blue: "#2196F3",
	CGP_yellow: "#FFC107",
};

export const teamMembers: TeamMember[] = [
	{
		id: "ana-arredondo",
		name: "Ana María Rodríguez Arredondo",
		career: "Comunicación Gráfica Publicitaria",
		image: "/images/integrantes/ana-arredondo.jpg",
		description:
			"Soy Ana María Rodríguez Arredondo, estudió comunicación gráfica publicitaria, me encanta el mercadeo, el diseño, pasar tiempo con las personas que quiero. Cocinar y escuchar música son mis momentos favoritos.",
		color: colors.CGP_yellow,
	},
	{
		id: "ana-maria-restrepo",
		name: "Ana María Rodríguez Restrepo",
		career: "Comunicación y Lenguajes Audiovisuales",
		image: "/images/integrantes/ana-maria-restrepo.jpg",
		description:
			" Ana María Rodriguez Restrepo y estudio Comunicación y Lenguajes Audiovisuales. Desde muy pequeña siempre he amado el tema del arte, amo dibujar, escuchar música y me encanta las artes visuales. Me considero una persona apasionada por lo que estudia, alguien alegre, extrovertido, trabajador y siempre dispuesta a aprender.",
		color: colors.CLA_blue,
	},
	{
		id: "isabella-loaiza",
		name: "Isabella Loaiza Gil",
		career: "Comunicación y Lenguajes Audiovisuales",
		image: "/images/integrantes/isabella-loaiza.jpg",
		description:
			"Soy Isabella Loaiza Gil, estudiante de comunicación y lenguajes audiovisuales. Desde pequeña me ha apasionado el cine, el teatro, la música, escribir y en general contar historias. Me considero una persona líder, entusiasta, carismática e incluso espontánea pero al mismo tiempo me gusta llevar un control de las cosas.",
		color: colors.CLA_blue,
	},
	{
		id: "macla-rendon",
		name: "María Clara Rendón Carmona",
		career: "Comunicación y Relaciones Corporativas",
		image: "/images/integrantes/macla-rendon.jpg",
		description:
			"Soy María Clara Rendón Carmona, estudiante de comunicación y relaciones corporativas. Soy una persona muy versátil y siempre estoy dispuesta a tener nuevas experiencias. Soy amable, simpática y algo perfeccionista, sobre todo creativa.",
		color: colors.CRC_green,
	},
	{
		id: "susana-restrepo",
		name: "Susana Restrepo",
		career: "Comunicación y Relaciones Corporativas",
		image: "/images/integrantes/susana-restrepo.jpg",
		description:
			"Soy Susana Restrepo, estudiante de comunicación y relaciones corporativas. Me considero una persona muy activa y social, me encanta conocer el mundo y conectar con las personas.",
		color: colors.CRC_green,
	},
	{
		id: "valeria-benitez",
		name: "Valeria Benítez",
		career: "Comunicación y Relaciones Corporativas",
		image: "/images/integrantes/valeria-benitez.jpg",
		description:
			"Soy Valeria Benítez Cardozo. Estudiante de comunicación y relaciones corporativas. Me considero una persona extrovertida y sociable. Me encanta escuchar música, amo la moda, amo el tema empresarial, me gusta entrenar, y hacer planes con mis amigos y familiares. Me considero una persona con un carácter de liderazgo, amo ayudar a las demás personas, y me interesa el tema de crear lazos entre compañías y personas que aporten a mi vida personal y laboral.",
		color: colors.CRC_green,
	},
];
