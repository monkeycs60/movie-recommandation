import questions from '@/lib/questionsList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addQuestion, removeOneQuestion, questionOneResult } from '@/store/filmSlice';
import handleAnswerClick from '@/utils/handleAnswerClick';

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
		// push the filmlist in the state "questiontwo" and then use it in the component
		console.log('film', filmFull.questionOneSelection);
		setCurrentQuestion(randomQuestion);
		//on push les résultats dans un state unique pour chaque question
		dispatch(questionOneResult());
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
					<button onClick={() => {
						handleAnswerClick(answer, dispatch);
						getRandomQuestion(shuffledQuestions);
					}} key={answer}>{answer}</button>
				))}
				
			</div>
		</div>
	);
};

export default SampleQuestions;
