import questions from '@/lib/questionsList';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const SampleQuestions = (data) => {
	const filmFull = useSelector((state) => state.film);
	console.warn('filmFull', filmFull);
	// fonction pour mélanger les questions de manière aléatoire
	const [questionsShuffled, setQuestionsShuffled] = useState([...questions]);
	const shuffleQuestions = (questions) => {
		const shuffled = questions.sort(() => Math.random() - 0.5);
		return shuffled;
	};

	// mélanger les questions
	const shuffledQuestions = shuffleQuestions(questions);
	console.log('ON LOGGG DE FOU', questionsShuffled);

	let randomQuestionTag = [];

	// fonction pour sélectionner une question aléatoire
	
	const getRandomQuestion = (questionsShuffled) => {
		if (questionsShuffled.length <= 2) return null;
		const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
		  setQuestionsShuffled([...questionsShuffled.filter((q) => q !== randomQuestion)]);
		randomQuestionTag.push(randomQuestion);
		return randomQuestion;
	};
	return (
		<div>
			<button onClick={() => getRandomQuestion(shuffledQuestions)}>Get a random question</button>
			<p>{randomQuestionTag?.question}</p>
			<div>
				{randomQuestionTag?.answers && randomQuestionTag.answers.map((answer) => {
					return <p
						key={answer}
					>{answer}</p>;
				})
				}
			</div>
		</div>
	);
};

export default SampleQuestions;