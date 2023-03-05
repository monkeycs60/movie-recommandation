
import useFilmTitles from '@/hooks/useFilmTitles';
import SampleQuestions from './SampleQuestions';

const FilmTitles = () => {
	const { data, isLoading, isError} = useFilmTitles();
	
	return (
       
		<div className='h-full bg-yellow-50 text-darker'>
			<SampleQuestions data={data} />
		</div>
        
	);
};

export default FilmTitles;