import questions from '@/lib/questionsList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addQuestion, removeOneQuestion } from '@/store/filmSlice';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import LoadingResult from '@/components/loading/LoadingResult';
import shuffledQuestions from '@/utils/resultComponent/shuffleQuestions';
import sortFinalResult from '@/utils/resultComponent/sortFinalResult';
import handleWheelGalery from '@/utils/resultComponent/handleWheelGalery';
import handleTouchEvents from '@/utils/resultComponent/handleTouchGalery';
import ScrollWarningMessage from './bodyComponents/ScrollWarningMessage';
import Results from './bodyComponents/Results';
import Questions from './bodyComponents/Questions';

const QuestionsAndResults = (data) => {
	const [displayResult, setDisplayResult] = useState(false);
	const [finalResultList, setFinalResultList] = useState([]);
	const [loader, setLoader] = useState(false);
	const [showScrollMessage, setShowScrollMessage] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	const dispatch = useDispatch();
	const router = useRouter();
	const filmFull = useSelector((state) => state.film);
	const baseUrlForPoster = 'https://image.tmdb.org/t/p/w300';
	const questionsTotalRedux = useSelector((state) => state.film.questions);

	// Récupère les questions mélangées
	useEffect(() => {
		dispatch(addQuestion(shuffledQuestions));
	}, [dispatch]);
	
	// Récupère les questions mélangées, supprime une question à chaque réponse et met fin au questionnaire après 5 questions
	const getRandomQuestion = (shuffledQuestions) => {
		if (shuffledQuestions.length <= 2) return null;
		if (questionsTotalRedux.length <= 2) {
			setLoader(true);
			setTimeout(() => {
				setLoader(false);
				setDisplayResult(true);
				const finalResultList = sortFinalResult(filmFull);
				setFinalResultList(finalResultList);

				return finalResultList;
			}, 3000);
		};
		const randomQuestion = questionsTotalRedux[Math.floor(Math.random() * questions.length)];
		dispatch(removeOneQuestion());

		return randomQuestion;
	};
	  
	// Permet le défilement de la galerie de films au scroll de la souris & touchpad & mobile
	  useEffect(() => {
		if (displayResult) {
			const handleScrollWrapper = (event) => {
				handleWheelGalery(currentIndex, finalResultList, setCurrentIndex, event);
			};
			window.addEventListener('wheel', handleScrollWrapper);

			const touchScroll = handleTouchEvents(currentIndex, finalResultList, setCurrentIndex, displayResult);
			return () => {
				window.removeEventListener('wheel', handleScrollWrapper);
				touchScroll();
			};
		}
	}, [currentIndex, finalResultList, displayResult]);

	// Si on clique sur une affiche de film adjacente, on affiche un message pour expliquer comment faire défiler la galerie
	const handleImageClick = () => {
		setShowScrollMessage(true);
		setTimeout(() => {
			setShowScrollMessage(false);
		}, 4000);
	};
	
	 return (
		loader ? <LoadingResult /> :
			<motion.div
			  initial={{ opacity: 0.4 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.4 }}
			 className='degrade relative flex h-full flex-col items-center justify-center gap-[10vh]'>
				{showScrollMessage && (
					<ScrollWarningMessage message="Utilise la molette de ta souris ou ton pouce pour faire défiler les films" />
				)}
				{!displayResult ? (
					<Questions handleQuestionClick={getRandomQuestion} shuffledQuestions={shuffledQuestions} />
				) : (
					<Results finalResultList={finalResultList} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} handleImageClick={handleImageClick} />
				)}
			</motion.div>
	);
};

export default QuestionsAndResults;