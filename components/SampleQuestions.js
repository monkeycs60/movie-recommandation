import questions from '@/lib/questionsList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addQuestion, removeOneQuestion } from '@/store/filmSlice';

const SampleQuestions = (data) => {
	const dispatch = useDispatch();
	const filmFull = useSelector((state) => state.film);
	console.warn(filmFull);
	// fonction pour mélanger les questions de manière aléatoire
	const shuffleQuestions = (questions) => {
		const shuffled = questions.sort(() => Math.random() - 0.5);
		return shuffled;
	};

	// mélanger les questions
	const shuffledQuestions = shuffleQuestions(questions);

	useEffect(() => {
		dispatch(addQuestion(shuffledQuestions));
	}, [shuffledQuestions, dispatch]);

	// fonction pour sélectionner une question aléatoire
	
	const getRandomQuestion = (questionsShuffled) => {
		if (questionsShuffled.length <= 2) return null;
		const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
		dispatch(removeOneQuestion());
		return randomQuestion;
	};
	return (
		<div>
			<button onClick={() => getRandomQuestion(shuffledQuestions)}>Get a random question</button>
			<p>
				{filmFull.questions[0]?.question}
			</p>
			<div>
				{filmFull.questions[0]?.answers.map((answer) => (
					<p key={answer}>{answer}</p>
				))}
				
			</div>
		</div>
	);
};

export default SampleQuestions;