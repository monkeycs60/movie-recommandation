
import useFilmTitles from '@/hooks/useFilmTitles';

const FilmTitles = () => {
	const { sortedMoviesByGenre, data, isLoading, isError } = useFilmTitles();
    
	return (
       
		<div className='bg-emerald-700'>
			<h1 className='text-3xl font-bold'>Some Film Titles</h1>
			<p className='text-xl text-yellow-50'>{data[0].title}</p>
			On mappe à travers les data et à chaque fois on prend le titre du film
			{data.map((movie) => (
				<p key={movie.id} className='text-xl text-yellow-50'>{movie.title}</p>
			))}
		</div>
        
	);
};

export default FilmTitles;