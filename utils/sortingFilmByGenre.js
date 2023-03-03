import movieGenres from '@/lib/movieGenres';
import useFilmTitles from '@/hooks/useFilmTitles';

const SortingFilmByGenre = () => {
	const { data } = useFilmTitles();

	const sortedMovies = useMemo(() => {
		console.log(data);
	}, [data]);

	return { data, sortedMovies };
};