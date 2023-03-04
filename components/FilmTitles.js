
import useFilmTitles from '@/hooks/useFilmTitles';
import SampleQuestions from './SampleQuestions';

const FilmTitles = () => {
	const { data, isLoading, isError} = useFilmTitles();
	
	return (
       
		<div className='bg-emerald-700'>
			<h1 className='text-3xl font-bold'>Some Film Titles</h1>
			<p className='text-xl text-yellow-50'>{data[0].title}</p>

			<SampleQuestions data={data} />
		</div>
        
	);
};

export default FilmTitles;