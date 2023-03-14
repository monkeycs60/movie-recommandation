import QuestionsContainer from '@/components/questionsPage/QuestionsContainer';
import LoadingFetch from '@/components/loading/LoadingFetch';
import { Suspense } from 'react';

const Questions = () => {
	return (
		<div className='relative h-[100vh] bg-darker'>
			<Suspense fallback={<LoadingFetch />}>
				<QuestionsContainer />
			</Suspense>
		</div>
	);
};

export default Questions;
