const sortByGenre = (movies, genre) => {
	const sortedMovies = movies.filter(movie => movie.genres.includes(genre));
	return sortedMovies;
};