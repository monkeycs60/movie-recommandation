import { useSelector, useDispatch } from 'react-redux';
import handleAnswerClick from '@/utils/onAnswerClickFunctions/generalClickHandler';
import Link from 'next/link';

const Questions = ({ shuffledQuestions, handleQuestionClick }) => {
    	const dispatch = useDispatch();
    	const filmFull = useSelector((state) => state.film);

	return (
        	<>
			<Link href='/'>
				<div className='homeHover absolute top-8 left-8 hidden rounded-xl p-4 text-center font-sans font-bold lg:block lg:w-24 lg:text-2xl xl:w-32 xl:p-6 xl:text-4xl 2xl:w-40 2xl:text-5xl'>
					<h1 className='w-4 xl:w-6 2xl:w-8'>On mate quoi ce soir ?</h1>
				</div>
			</Link>
			<img src="/moon-man.png" alt="" className='absolute bottom-4 w-[70px] rounded-2xl md:bottom-8 md:w-[120px] lg:right-4 lg:top-4 lg:w-[140px] xl:w-[180px] 2xl:w-[240px]' />
			<h2 className='text-center font-serif text-2xl font-bold text-yellow-50 md:text-left md:text-4xl lg:text-6xl'>
				{filmFull.questions[0]?.question}
			</h2>
			<div className='grid items-center gap-y-10 gap-x-20 md:gap-y-14 lg:grid-cols-2'>
				{filmFull.questions[0]?.answers.map((answer) => (
					<button className='w-[70vw] rounded-lg border-2 bg-yellow-50 p-4 font-sans text-sm font-bold text-darker  hover:scale-110 hover:border-2 hover:bg-yellow-600 hover:text-white md:p-8 md:text-xl lg:h-[12vh] lg:w-[28vw]  lg:p-4 ' onClick={() => {
						handleAnswerClick(answer, dispatch);
						handleQuestionClick(shuffledQuestions);
					}} key={answer}>{answer}</button>
				))}
			</div>
		</>
	);
};

export default Questions;