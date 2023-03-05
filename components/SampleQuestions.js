import questions from '@/lib/questionsList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addQuestion, removeOneQuestion, questionOneResult } from '@/store/filmSlice';
import handleAnswerClick from '@/utils/handleAnswerClick';
import { useRouter } from 'next/router';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';

const SampleQuestions = (data) => {
	const [currentQuestion, setCurrentQuestion] = useState({question: '', answers: []});
	const [displayResult, setDisplayResult] = useState(false);
	const [finalResultList, setFinalResultList] = useState([]);

	const dispatch = useDispatch();
	const router = useRouter();
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
		if (questionsTotalRedux.length <= 2) {
			setDisplayResult(true);
			//crée un tableau avec les films sélectionnés et ne retenir maximum que 8 films sans utiliser questionOneSelection
			const resultList = filmFull.filmsList.map((film) => film);
			console.log('resultList', resultList);
			//tri cette liste au hasard et ne récupère que 10 résultats max
			const shuffledResultList = resultList.sort(() => Math.random() - 0.5);
			const finalResultList = shuffledResultList.slice(0, 10);
			setFinalResultList(finalResultList);
			console.log('finalResultList', finalResultList);

			return finalResultList;
		};
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
		<div className='relative flex h-full flex-col items-center justify-center gap-[10vh] bg-darker'>

			{displayResult ? (
				<div className='text-white'>
					<h1>Result</h1>
					<div className='flex flex-row items-center justify-center'>
						{finalResultList.map((film, index) => (
							<div
								key={film.title}
								className={`relative mx-4 transition-opacity duration-300 
          ${index === 0 ? 'opacity-100' : 'opacity-50 hover:opacity-100'}
          ${index === 1 || index === finalResultList.length - 1 ? 'opacity-25 hover:opacity-50' : ''}
        `}
							>
								<div className='absolute top-0 flex h-full w-full items-center justify-center'>
									<div className='bg-black bg-opacity-60 p-4'>
										<h2>{film.title}</h2>
										<img src={`https://image.tmdb.org/t/p/w400${film.poster_path}`} alt={film.title} />
										<p>{film.overview}</p>
										<p>{film.release_date.slice(0, 4)}</p>
									</div>
								</div>
								<img src={`https://image.tmdb.org/t/p/w400${film.poster_path}`} alt={film.title} />
							</div>
						))}
					</div>
					<button
						onClick={() => {
							router.reload();
						}}
					>Retenter ma chance ?</button>
					<button
						onClick={() => {
							router.push('/');
						}}
					>Retour à la case départ !</button>
				</div>
			) : (
				<>
					<img src="/moon-man.png" alt="" className='absolute right-4 top-4 w-[240px] rounded-2xl' />
					<h2 className='font-serif text-6xl font-bold text-yellow-50'>
						{filmFull.questions[0]?.question}
					</h2>
					<div className='grid grid-cols-2 gap-y-14 gap-x-20'>
						{filmFull.questions[0]?.answers.map((answer) => (
							<button className='rounded-lg bg-yellow-50 p-16 py-8 font-sans text-xl font-bold text-darker border-2 hover:text-white hover:scale-110 hover:border-2  hover:bg-yellow-600 ' onClick={() => {
								handleAnswerClick(answer, dispatch);
								getRandomQuestion(shuffledQuestions);
							}} key={answer}>{answer}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default SampleQuestions;
