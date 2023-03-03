
import useFilmTitles from '@/hooks/useFilmTitles';
import SampleQuestions from './SampleQuestions';
import { useContext } from 'react';
import FilmListContext from '@/contexts/FilmListContextProvider';

const FilmTitles = () => {
	const { filmList } = useContext(FilmListContext);
	console.log(filmList);
	const { sortedMoviesByGenre, data, isLoading, isError } = useFilmTitles();
	//push data to context
	// filmList.setFilmList(data);
	return (
       
		<div className='bg-emerald-700'>
			<h1 className='text-3xl font-bold'>Some Film Titles</h1>
			<p className='text-xl text-yellow-50'>{data[0].title}</p>

			<SampleQuestions data={data} />
		</div>
        
	);
};

export default FilmTitles;