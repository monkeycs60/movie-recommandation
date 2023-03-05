import questions from '@/lib/questionsList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addQuestion, removeOneQuestion } from '@/store/filmSlice';
import { sortByGenre,
	sortByGenreSome,
	sortByGenreOne,
	sortByGenreThree,
	sortByExcludingGenre,
	sortByPopularity,
	sortByYear,
	sortByExcludingYear,
	sortByDecade,
	sortByRate,
	sortByCountry,
	sortByExcludingCountry,
	sortByExcludingResumeWords,
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
		dispatch(sortByGenreThree(
			['Romance',
				'Family',
				'Comedy']
		));
	};
 
	const handleMood2 = () => {
		console.log('handleMood2 : besoin d\'action');
		dispatch(sortByGenreSome(
			['Action',
				'Adventure',
				'Horror',
				'War']
		));
	};

	const handleMood3 = () => {
		console.log('handleMood3 : envie de rire');
		dispatch(sortByGenreSome(
			['Comedy',
				'Family',
				'Animation']
		));
	};

	const handleMood4 = () => {
		console.log('handleMood4 : soif d\'inconnu');
		dispatch(sortByGenreSome(
			['Mystery',
				'Fantasy',
				'History',
				'Science Fiction']
		));
	};

	const handleHate1 = () => {
		console.log('handleHate1 : l\'année 1996');
		dispatch(sortByExcludingYear(1996));
	};

	const handleHate2 = () => {
		console.log('handleHate2 : les films romantiques');
		dispatch(sortByExcludingGenre('Romance'));
	};

	const handleHate3 = () => {
		console.log('handleHate3 : ta belle-mère');
		dispatch(sortByExcludingResumeWords([
			'belle famille',
			'belle-famille',
			'belle mère',
			'belle-mère',
			'angoisse',
			'angoissant',
			'conflit',
			'tension',
			'autoritaire',
			'critique',
			'intrusive',
			'malaise',
			'famille',
			'évitement'
		]));
	};

	const handleHate4 = () => {
		console.log('handleHate4 : le cinéma français');
		dispatch(sortByExcludingCountry('French'));
	};

	const handleExcitement1 = () => {
		console.log('handleExcitement1 : le cinéma américain');
		dispatch(sortByCountry('en'));
	};

	const handleExcitement2 = () => {
		console.log('handleExcitement2 : les années 2000');
		dispatch(sortByDecade(200));
	};

	const handleExcitement3 = () => {
		console.log('handleExcitement3 : les comédies à l\'eau de rose');
		dispatch(sortByGenreSome(
			['Romance',
				'Comedy']
		));
	};

	const handleExcitement4 = () => {
		console.log('handleExcitement4 : les valeurs sûres');
		dispatch(sortByPopularity(200));
	};

	const handleEra1 = () => {
		console.log('handleEra1 : années 1980');
		dispatch(sortByDecade(198));
	};

	const handleEra2 = () => {
		console.log('handleEra2 : années 2010');
		dispatch(sortByDecade(201));
	};

	const handleEra3 = () => {
		console.log('handleEra3 : années 1990');
		dispatch(sortByDecade(199));
	};

	const handleEra4 = () => {
		console.log('handleEra4 : cinéma très récent');
		dispatch(sortByYear(202));
	};

	const handleSearch1 = () => {
		console.log('handleSearch1 : la crème de la crème');
		dispatch(sortByRate(200));
	};

	const handleSearch2 = () => {
		console.log('handleSearch2 : le dépaysement');
		dispatch(sortByGenreThree(
			['Fantasy',
				'History',
				'Science Fiction']
		));
	};

	const handleSearch3 = () => {
		console.log('handleSearch3 : un documentaire');
		dispatch(sortByGenreOne('Documentary'));
	};

	const handleSearch4 = () => {
		console.log('handleSearch4 : la nostalgie');
		dispatch(sortByGenreThree(
			['Romance',
				'History',
				'Drama']
		));
	};

	const handleAvoid1 = () => {
		console.log('handleAvoid1 : avoir peur');
		dispatch(sortByExcludingGenre
		(['Horror',
			'Thriller',
			'War',
			'Mystery',
			'Crime',
		]));
	};

	const handleAvoid2 = () => {
		console.log('handleAvoid2 : te cultiver');
		dispatch(sortByExcludingResumeWords([
			'art',
			'artiste',
			'peintre',
			'intelligence',
			'intellectuel',
			'intellectuelle',
			'culture',
			'culturel',
			'culturelle',
			'réflexion',
			'réfléchir',
			'complexe',
			'complexité'
		]));
		dispatch(sortByExcludingGenre
		(['Documentary',
			'History',
		]));
	};

	const handleAvoid3 = () => {
		console.log('handleAvoid3 : De regarder le même film que ton petit cousin');
		dispatch(sortByExcludingResumeWords([
			'famille',
			'familial',
			'jeunesse',
			'adolescent',
			'petit',
			'petit',
			'enfant',
			'ado',
			'émerveillement',
			'naïf'
		]));
		dispatch(sortByExcludingGenre
		(['Family',
			'Animation',
		]));
	};

	const handleAvoid4 = () => {
		console.log('handleAvoid4 : De répondre à cette question');
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
