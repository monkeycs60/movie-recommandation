import questions from '@/lib/questionsList';
// fonction pour mélanger les questions de manière aléatoire
const shuffleQuestions = (questions) => {
	const shuffled = questions.sort(() => Math.random() - 0.5);
	return shuffled;
};

// mélanger les questions
const shuffledQuestions = shuffleQuestions(questions);

export default shuffledQuestions;