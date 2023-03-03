import { getCatFact } from '@/pages/api/catCall';
import { useQuery } from '@tanstack/react-query';;
import { useMemo } from 'react';

const useFilmTitles = () => {
	const { data, isLoading, isError } = useQuery(['catFact'], getCatFact, {
		staleTime: 1000 * 60 * 60 * 24,
		cacheTime: 1000 * 60 * 60 * 24,
	}, {suspense: true});

	const sortedMovies = useMemo(() => {
		console.log('data', data);
	}, [data]);

	return { data, sortedMovies, isLoading, isError };
};

export default useFilmTitles;