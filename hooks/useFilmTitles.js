import { getCatFact } from '@/pages/api/catCall';
import { useQuery } from '@tanstack/react-query';;
import { useMemo } from 'react';
import movieGenres from '@/lib/movieGenres';
import movieCountryByISO from '@/lib/movieCountryByISO';

const useFilmTitles = () => {
	const { data, isLoading, isError } = useQuery(['catFact'], getCatFact, {
		staleTime: 1000 * 60 * 60 * 24,
		cacheTime: 1000 * 60 * 60 * 24,
	}, {suspense: true});

	console.log('data', data);

	const sortedMoviesByGenre = useMemo(() => {
		console.log(data);
		const moviesByGenre = {};
		movieGenres.genres.forEach(genre => {
			moviesByGenre[genre.name] = data.filter(movie => movie.genre_ids.includes(genre.id));
		});
		console.log(moviesByGenre);
	}, [data]);

	const sortedMoviesByRate = useMemo(() => {
		const sortedMovies = data.slice().sort((a, b) => {
			const ratingA = parseFloat(a.vote_average);
			const ratingB = parseFloat(b.vote_average);
			return ratingB - ratingA;
		});
		console.log('les meilleurs', sortedMovies);
		return sortedMovies;
	}, [data]);

	//i want to dynamically get the movie of a given year (by their release date)
	const sortedMoviesByYear = useMemo(() => {
		const moviesByYear = {};
		for (let index = 1978; index < 2023; index++) {
			moviesByYear[index] = data.filter(movie => movie.release_date.includes(index.toString()));
		}
		console.log(moviesByYear);
	}, [data]);

	const sortedMoviesByDecade = useMemo(() => {
		const moviesByDecade = {};
		for (let index = 1970; index < 2021; index += 10) {
			moviesByDecade[index] = data.filter(movie => movie.release_date.includes(index.toString().slice(0, 3)));
		}
		console.log(moviesByDecade);
	}, [data]);

	const sortedMoviesByPopularity = useMemo(() => {
		const moviesByPopularity = [];
		moviesByPopularity.push(data.sort((a, b) => b.vote_count - a.vote_count));
		console.log('les plus populaires', moviesByPopularity);
	}, [data]);

	//sort by original language
	const sortedMoviesByLanguage = useMemo(() => {
		const moviesByLanguage = {};
		data.forEach(movie => {
			const languageName = movieCountryByISO[movie.original_language] || movie.original_language;
			if (moviesByLanguage[languageName]) {
				moviesByLanguage[languageName].push(movie);
			} else {
				moviesByLanguage[languageName] = [movie];
			}
		});
		console.log(moviesByLanguage);
	}, [data]);
	
	return { data, sortedMoviesByGenre, isLoading, isError };
};

export default useFilmTitles;