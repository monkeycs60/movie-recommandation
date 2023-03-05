import {  QueryClient, useQuery } from '@tanstack/react-query';
import { getMoviePosters } from '@/pages/api/TMDBMoviesCall';

const FilmPosterMosaic = () => {
//useQuery FOR MOvIES posters
	const { data, isLoading, isError } = useQuery(['moviePosters'], getMoviePosters, {
		staleTime: 1000 * 60 * 60 * 24,
		cacheTime: 1000 * 60 * 60 * 24,
	});

	console.log('data des POSTERS', data);

	return (
		<div className='flex flex-wrap justify-center'>
			<h1>Salut les gens</h1>
		</div>
	);
};

export default FilmPosterMosaic;