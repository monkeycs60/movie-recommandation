import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const movieApi = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	params: {
		api_key: apiKey,
		language: 'fr-FR',
		include_adult: false,
	}});

export async function getCatFact() {
	let moviesOfBeginning = [];
	for (let index = 1978; index < 2022; index++) {
		const res = await movieApi.get(`/discover/movie?&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&year=${index}`);
		moviesOfBeginning.push(res.data.results);
	}
	return moviesOfBeginning;
}
