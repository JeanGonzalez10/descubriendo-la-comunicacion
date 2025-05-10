export interface QuizQuestion {
	id: number;
	question: string;
	options: {
		id: string;
		text: string;
	}[];
}
