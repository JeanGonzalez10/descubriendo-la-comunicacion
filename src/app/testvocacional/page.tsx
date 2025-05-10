"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { quizQuestions, quizResults } from "@/data/QuizData";
import { useTheme } from "@/hooks/useTheme";

export default function TestVocacional() {
	useTheme();
	const [started, setStarted] = useState(false);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [answers, setAnswers] = useState<Record<string, number>>({
		A: 0,
		B: 0,
		C: 0,
		D: 0,
		E: 0,
	});
	const [showResult, setShowResult] = useState(false);
	const [result, setResult] = useState<string | null>(null);

	const handleStartQuiz = () => {
		setStarted(true);
	};

	const handleAnswer = (optionId: string) => {
		// Incrementar el contador para cada respuesta
		setAnswers((prev) => ({
			...prev,
			[optionId]: prev[optionId] + 1,
		}));

		// Avanzar a la siguiente pregunta o mostrar resultados
		if (currentQuestionIndex < quizQuestions.length - 1) {
			setCurrentQuestionIndex((prev) => prev + 1);
		} else {
			calculateResult();
		}
	};

	const calculateResult = () => {
		// Encontrar la respuesta con mayor puntuación
		let maxScore = 0;
		let maxType: string = "A";

		Object.entries(answers).forEach(([type, score]) => {
			if (score > maxScore) {
				maxScore = score;
				maxType = type;
			}
		});

		setResult(maxType);
		setShowResult(true);
	};

	const resetQuiz = () => {
		setStarted(false);
		setCurrentQuestionIndex(0);
		setAnswers({
			A: 0,
			B: 0,
			C: 0,
			D: 0,
			E: 0,
		});
		setShowResult(false);
		setResult(null);
	};

	// Efectos de animación para los elementos
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	const buttonVariants = {
		hover: {
			scale: 1.05,
			boxShadow: "0px 0px 8px rgba(255,255,255,0.5)",
			transition: { duration: 0.3 },
		},
		tap: { scale: 0.95 },
	};

	const currentQuestion = quizQuestions[currentQuestionIndex];

	return (
		<div className="min-h-screen flex items-center justify-center py-10 px-4">
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="w-full max-w-3xl mx-auto bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md p-6 sm:p-8 md:p-12 rounded-2xl border border-white/10 shadow-xl">
				{!started && !showResult ? (
					<motion.div
						variants={containerVariants}
						className="text-center space-y-8">
						<motion.h1
							variants={itemVariants}
							className="text-4xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">
							¿Qué tipo de comunicador mágico eres?
						</motion.h1>
						<motion.p
							variants={itemVariants}
							className="text-lg text-white/80 mb-8">
							Descubre cuál carrera de comunicación se adapta mejor a tu
							personalidad y habilidades.
						</motion.p>
						<motion.div variants={itemVariants} className="pt-4">
							<motion.button
								variants={buttonVariants}
								whileHover="hover"
								whileTap="tap"
								onClick={handleStartQuiz}
								className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-xl font-semibold text-white rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
								<span>Iniciar Test</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M14 5l7 7m0 0l-7 7m7-7H3"
									/>
								</svg>
							</motion.button>
						</motion.div>
					</motion.div>
				) : showResult ? (
					<motion.div
						variants={containerVariants}
						className="text-center space-y-8">
						{result && (
							<>
								<motion.div
									variants={itemVariants}
									className="text-6xl sm:text-8xl mb-4">
									{quizResults[result].emoji}
								</motion.div>
								<motion.h2
									variants={itemVariants}
									className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">
									{quizResults[result].house}
								</motion.h2>
								{quizResults[result].career && (
									<motion.h3
										variants={itemVariants}
										className="text-xl sm:text-2xl font-bold text-white/90">
										{quizResults[result].career}
									</motion.h3>
								)}
								<motion.p
									variants={itemVariants}
									className="text-lg text-white/80 mx-auto max-w-md">
									{quizResults[result].description}
								</motion.p>
								<motion.div variants={itemVariants} className="pt-6">
									<motion.button
										variants={buttonVariants}
										whileHover="hover"
										whileTap="tap"
										onClick={resetQuiz}
										className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-lg font-semibold text-white rounded-xl shadow-lg transition-all duration-300">
										Volver a intentar
									</motion.button>
								</motion.div>
							</>
						)}
					</motion.div>
				) : (
					<motion.div
						key={`question-${currentQuestionIndex}`}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.5 }}
						className="space-y-8">
						<h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
							Pregunta {currentQuestionIndex + 1} de {quizQuestions.length}
						</h2>
						<div className="bg-black/30 p-4 rounded-xl border border-white/5 mb-6">
							<p className="text-xl text-white/90">
								{currentQuestion.question}
							</p>
						</div>
						<div className="space-y-4">
							{currentQuestion.options.map((option) => (
								<motion.button
									key={option.id}
									whileHover={{
										scale: 1.02,
										backgroundColor: "rgba(255, 255, 255, 0.1)",
									}}
									whileTap={{ scale: 0.98 }}
									onClick={() => handleAnswer(option.id)}
									className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 flex items-center gap-3">
									<span
										className="w-8 h-8 flex items-center justify-center rounded-full font-bold text-black"
										style={{
											backgroundColor:
												option.id === "A"
													? "#36b37e"
													: option.id === "B"
													? "#ff5630"
													: option.id === "C"
													? "#4c9aff"
													: option.id === "D"
													? "#ffc400"
													: "#a0a0a0",
										}}>
										{option.id}
									</span>
									<span className="text-white/90">{option.text}</span>
								</motion.button>
							))}
						</div>
						<div className="flex justify-between mt-8 text-sm text-white/50">
							<div>
								Pregunta {currentQuestionIndex + 1} de {quizQuestions.length}
							</div>
							<div className="flex gap-1">
								{quizQuestions.map((_, idx) => (
									<div
										key={idx}
										className={`w-2 h-2 rounded-full ${
											idx === currentQuestionIndex
												? "bg-yellow-500"
												: idx < currentQuestionIndex
												? "bg-white/50"
												: "bg-white/20"
										}`}></div>
								))}
							</div>
						</div>
					</motion.div>
				)}

				{/* Elementos decorativos */}
				<div className="absolute -z-10 top-0 left-0 w-full h-full overflow-hidden">
					<div className="stars"></div>
				</div>
			</motion.div>
		</div>
	);
}
