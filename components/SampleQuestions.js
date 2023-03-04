import questions from '@/lib/questionsList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addQuestion, removeOneQuestion } from '@/store/filmSlice';

const SampleQuestions = (data) => {
    	const [currentQuestion, setCurrentQuestion] = useState({question: '', answers: []});

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
	const questionsTotalRedux = useSelector((state) => state.film.questions);
	
	const getRandomQuestion = (shuffledQuestions) => {
		if (shuffledQuestions.length <= 2) return null;
		const randomQuestion = questionsTotalRedux[Math.floor(Math.random() * questions.length)];
		dispatch(removeOneQuestion());
		setCurrentQuestion(randomQuestion);
		return randomQuestion;
	};

	const handleAnswerClick = (answer) => {
		// faire quelque chose avec la réponse sélectionnée
		console.log(`L'utilisateur a sélectionné la réponse : ${answer}`);
	};

	return (
		<div>
			<button onClick={() => getRandomQuestion(shuffledQuestions)}>Get a random question</button>
			<p>
				{filmFull.questions[0]?.question}
			</p>
			<div>
				{filmFull.questions[0]?.answers.map((answer) => (
					<button onClick={() => {
						handleAnswerClick(answer);
						getRandomQuestion(shuffledQuestions);
					}} key={answer}>{answer}</button>
				))}
				
			</div>
		</div>
	);
};

export default SampleQuestions;