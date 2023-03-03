
import useFilmTitles from '@/hooks/useFilmTitles';
import { useQuery } from '@tanstack/react-query';;
import { getCatFact } from './../pages/api/catCall';

const FilmTitles = () => {
	const { sortedMovies, data, isLoading, isError } = useFilmTitles();
    
	return (
       
		<div className='bg-emerald-700'>
			<h1 className='text-3xl font-bold'>Some Film Titles</h1>
			<p className='text-xl text-yellow-50'>{data[0][0].title}</p>
			{
				data.map((individualFetch) => {
					return individualFetch.map((movie) => {
						return <p 
							key={movie.id}
							className='text-xl text-yellow-50'>{movie.title}</p>;
					});
				})

			}

		</div>
        
	);
};

export default FilmTitles;