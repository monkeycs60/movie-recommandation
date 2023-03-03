import FilmTitles from '@/components/FilmTitles';
import LoadingFetch from '@/components/LoadingFetch';
import { Suspense } from 'react';

const Questions = () => {
	return (
		<div className='relative'>
			<h1 className='text-4xl text-white'>Questions</h1>
			<Suspense fallback={<LoadingFetch />}>
				<FilmTitles />
			</Suspense>
            
		</div>
	);
};

export default Questions;
