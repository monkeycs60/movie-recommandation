import questions from '@/lib/questionsList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addQuestion, removeOneQuestion } from '@/store/filmSlice';
import { sortByGenre,
	sortByPopularity,
	sortByYear,
	sortByDecade,
	sortByRate,
	sortByLanguage,
} from '@/store/filmSlice';

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
		// appel de la fonction appropriée en fonction de la réponse sélectionnée
		switch (answer) {
		case 'Au fond du trou':
			handleMood1();
			break;
		case 'Besoin d\'action':
			handleMood2();
			break;
		case 'Envie de rire':
			handleMood3();
			break;
		case 'Soif d\'inconnu':
			handleMood4();
			break;
		case 'L\'année 1996':
			handleHate1();
			break;
		case 'Les films romantiques':
			handleHate2();
			break;
		case 'Ta belle-mère':
			handleHate3();
			break;
		case 'Le cinéma français':
			handleHate4();
			break;
		case 'Le cinéma hong-kongais':
			handleExcitement1();
			break;
		case 'Les années 2000':
			handleExcitement2();
			break;
		case 'Les comédies à l\'eau de rose':
			handleExcitement3();
			break;
		case 'Les valeurs sûres':
			handleExcitement4();
			break;
		case 'Années 1980':
			handleEra1();
			break;
		case 'Années 2010':
			handleEra2();
			break;
		case 'Années 1990':
			handleEra3();
			break;
		case 'Cinéma très récent':
			handleEra4();
			break;
		case 'La crème de la crème':
			handleSearch1();
			break;
		case 'Le dépaysement':
			handleSearch2();
			break;
		case 'Un documentaire':
			handleSearch3();
			break;
		case 'La nostalgie':
			handleSearch4();
			break;
		case 'D\'avoir peur':
			handleAvoid1();
			break;
		case 'De te cultiver':
			handleAvoid2();
			break;
		case 'De regarder le même film que ton petit cousin':
			handleAvoid3();
			break;
		case 'De répondre à cette question':
			handleAvoid4();
			break;
		default:
			break;
		}
		console.log(`L'utilisateur a sélectionné la réponse : ${answer}`);
	};

	const handleMood1 = () => {
		console.log('handleMood1 : au fond du trou');
		dispatch(sortByGenre('Drama'));
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
