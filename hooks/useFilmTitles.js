import { getCatFact } from '@/pages/api/catCall';
import { useQuery } from '@tanstack/react-query';;
import { useEffect } from 'react';
import movieGenres from '@/lib/movieGenres';
import movieCountryByISO from '@/lib/movieCountryByISO';
import { useDispatch } from 'react-redux';
import { addFilms, resetFilmsList } from '@/store/filmSlice';

const useFilmTitles = () => {
	const { data, isLoading, isError } = useQuery(['catFact'], getCatFact, {
		staleTime: 1000 * 60 * 60 * 24,
		cacheTime: 1000 * 60 * 60 * 24,
	}, {suspense: true});

	const dispatch = useDispatch();

	console.log('data', data);

	  useEffect(() => {
		dispatch(resetFilmsList());
	}, [dispatch]);

	useEffect(() => {
		if (data) {
			const films = data.map((item) => ({
				id: item.id,
				title: item.title,
				release_date: item.release_date,
				overview: item.overview,
				poster_path: item.poster_path,
				genres: item.genre_ids.map((genreId) => movieGenres.genres.find((genre) => genre.id === genreId).name),
				original_language: movieCountryByISO[item.original_language],
				vote_average: item.vote_average,
			}));
			dispatch(addFilms(films));
		}
	}, [data, dispatch]);
	
	return { data, isLoading, isError };
};

export default useFilmTitles;