import { QuizQuestion } from "@/types/quizQuestion";
import { QuizResult } from "@/types/quizResult";

export const quizQuestions: QuizQuestion[] = [
	{
		id: 1,
		question:
			"¿Qué sueles hacer cuando hay que organizar una salida con tus amigos?",
		options: [
			{
				id: "A",
				text: "Tomas el control: armas el plan, haces el grupo de WhatsApp y hasta reservas si toca",
			},
			{
				id: "B",
				text: "Propones algo diferente, tipo escape room, karaoke raro o algo que sorprenda",
			},
			{
				id: "C",
				text: "Piensas en cómo capturar el momento: grabas, haces fotos o un mini vlog",
			},
			{
				id: "D",
				text: "Diseñas la invitación, el cartel o haces que todo se vea estéticamente top",
			},
			{
				id: "E",
				text: 'Dices "me avisan cuando ya esté listo", prefieres solo aparecer si te interesa',
			},
		],
	},
	{
		id: 2,
		question:
			"¿Qué haces cuando ves algo que no está funcionando en un trabajo en grupo?",
		options: [
			{
				id: "A",
				text: "Lo resuelves con estrategia, propones soluciones y haces que todos se alineen",
			},
			{
				id: "B",
				text: "Sugieres algo creativo, aunque sea arriesgado, para mejorar las cosas",
			},
			{
				id: "C",
				text: "Tomas nota, analizas bien y propones ideas claras con buena lógica",
			},
			{
				id: "D",
				text: "Te ofreces a hacer las presentaciones o el diseño, porque eso se te da bien",
			},
			{
				id: "E",
				text: "Prefieres no meterte mucho, haces tu parte y ya",
			},
		],
	},
	{
		id: 3,
		question: "¿Qué tipo de contenido disfrutas más?",
		options: [
			{
				id: "A",
				text: "Documentales o podcasts de liderazgo, política, marcas o economía",
			},
			{
				id: "B",
				text: "Streams, TikToks creativos, YouTubers que inventan cosas nuevas",
			},
			{
				id: "C",
				text: "Series con buena historia, películas bien hechas, cine indie",
			},
			{
				id: "D",
				text: "Publicidad bien pensada, marcas con diseño brutal, reels estéticos",
			},
			{
				id: "E",
				text: "Videos de ciencia, tecnología, teorías del universo o programación",
			},
		],
	},
	{
		id: 4,
		question: "¿Cómo sueles expresarte mejor?",
		options: [
			{
				id: "A",
				text: "Hablando claro y directo, convenciéndote de lo que digo",
			},
			{
				id: "B",
				text: "Con ideas originales, memes o formas poco comunes",
			},
			{
				id: "C",
				text: "Usando imágenes, frases exactas o referencias que impacten",
			},
			{
				id: "D",
				text: "Con diseños, dibujos, o cosas que se vean bien y tengan sentido",
			},
			{
				id: "E",
				text: "No me gusta mucho expresarme, prefiero que hablen otros o hacerlo por escrito",
			},
		],
	},
	{
		id: 5,
		question: "¿Qué te gustaría que la gente valorara de ti?",
		options: [
			{
				id: "A",
				text: "Que sé liderar y soy confiable cuando hay que tomar decisiones",
			},
			{
				id: "B",
				text: "Que siempre traigo ideas fuera de lo común y no le tengo miedo a probar",
			},
			{
				id: "C",
				text: "Que tengo buen ojo para ver cosas que otros no notan",
			},
			{
				id: "D",
				text: "Que soy buena persona, creativo y siempre doy lo mejor",
			},
			{
				id: "E",
				text: "Que soy lógico, tranquilo y prefiero trabajar en lo que me apasiona (aunque no sea comunicación)",
			},
		],
	},
];

export const quizResults: Record<string, QuizResult> = {
	A: {
		type: "A",
		house: "Slytherin",
		career: "Comunicación y Relaciones Corporativas",
		description:
			"Te gusta liderar, organizar y moverte con inteligencia. Lo tuyo es el mundo corporativo y estratégico.",
		emoji: "🐍",
	},
	B: {
		type: "B",
		house: "Gryffindor",
		career: "Comunicación y Entretenimiento Digital",
		description:
			"Tienes iniciativa, te encanta lo nuevo y no te da miedo salirte del molde. Eres un creador nato.",
		emoji: "🦁",
	},
	C: {
		type: "C",
		house: "Ravenclaw",
		career: "Comunicación y Lenguajes Audiovisuales",
		description:
			"Te gusta analizar, observar y comunicar con profundidad. Ves el mundo en imágenes y significados.",
		emoji: "🦅",
	},
	D: {
		type: "D",
		house: "Hufflepuff",
		career: "Comunicación Gráfica Publicitaria",
		description:
			"Valoras lo visual, el detalle y la conexión con los demás. Eres constante y muy creativo.",
		emoji: "🦡",
	},
	E: {
		type: "E",
		house: "Squib",
		career: "",
		description:
			"No te va mucho el mundo de la comunicación, ¡y está bien! Tu magia va por otro camino más técnico o lógico.",
		emoji: "🧹",
	},
};
