import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const movieApi = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	params: {
		api_key: apiKey,
		language: 'fr-FR',
		include_adult: false,
		sort_by: 'vote_average.desc',
		'vote_count.gte': 300,
		include_video: false,
		with_watch_monetization_types: 'flatrate',
  
	}});

export async function getCatFact() {
	let moviesOfTheYear = [];
	// L'api TMDB délivre 20 requêtes par page
	// Pour chaque année depuis 1978, on récupère aléatoirement 2 pages de 20 films parmi les 4 premières pages, 
	// soit les 40 films des 80 films les mieux notés de chaque année
	for (let index = 1978; index < 2023; index++) {
		const res = await movieApi.get(`/discover/movie?&primary_release_year=${index}&page=1`);
		const resNextPage = await movieApi.get(`/discover/movie?&primary_release_year=${index}&page=2`); 
		const resNextPage2 = await movieApi.get(`/discover/movie?&primary_release_year=${index}&page=3`);
    
		moviesOfTheYear.push(res.data.results, resNextPage.data.results, resNextPage2.data.results);
	}
	// Conversion des multiples arrays en un seul array
	const moviesOfTheYearFlat = moviesOfTheYear.flat();
	//randomly reduce the array to 1000 movies
	const moviesOfTheYearFlatRandom = moviesOfTheYearFlat.sort(() => Math.random() - 0.5).slice(0, 1000);
	return moviesOfTheYearFlatRandom;
}
