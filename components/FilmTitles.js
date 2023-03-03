
import { useQuery } from '@tanstack/react-query';;
import { getCatFact } from './../pages/api/catCall';

const FilmTitles = () => {
	const { data, isLoading, isError } = useQuery(['catFact'], getCatFact, {
		staleTime: 1000 * 60 * 60 * 24,
		cacheTime: 1000 * 60 * 60 * 24,
	}, {suspense: true});
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