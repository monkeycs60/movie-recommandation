import FilmTitles from '@/components/FilmTitles';
import LoadingFetch from '@/components/LoadingFetch';
import { Suspense } from 'react';

const Questions = () => {
	return (
		<div className='relative h-[100vh] bg-darker'>
			<Suspense fallback={<LoadingFetch />}>
				<FilmTitles />
			</Suspense>
		</div>
	);
};

export default Questions;
