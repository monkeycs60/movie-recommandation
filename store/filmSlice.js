import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export const filmSlice = createSlice({
	name: 'film',
	initialState: {
		filmsList: [],
		totalFilms: 0,
		questions: [],
		totalQuestions: 0,
		showQuestions: false,
	},
	reducers: {
		addFilms: (state, action) => {
			state.filmsList.push(...action.payload);
			state.totalFilms = state.filmsList.length;
		},
		resetFilmsList: (state) => {
			if (state.filmsList.length > 998) {
				state.filmsList = [];
			}
		},
		addQuestion: (state, action) => {
			state.questions.push(...action.payload);
			state.questions = state.questions.filter((v, i, a) => a.findIndex((t) => (t.question === v.question)) === i);
			state.totalQuestions = state.questions.length;
		},
		removeOneQuestion: (state) => {
			state.questions.shift();
			state.totalQuestions = state.questions.length;
		},
		//sort films by genre
		sortByGenre: (state, action) => {
			const filteredList = state.filmsList.filter((movie) => movie.genres.includes(action.payload));
			if(filteredList.length > 0) {
				state.filmsList = filteredList;
				state.totalFilms = state.filmsList.length;
			}
		},
		//sort films that match one or more genres
		sortByGenreSome: (state, action) => {
			const filteredList = state.filmsList.filter((movie) => action.payload.some((genre) => movie.genres.includes(genre)));
			if(filteredList.length > 0) {
				state.filmsList = filteredList;
				state.totalFilms = state.filmsList.length;
			}
		},
		//sort films by genre but only if they have just one genre
		sortByGenreOne: (state, action) => {
			const filteredList = state.filmsList.filter((movie) => movie.genres.includes(action.payload) && movie.genres.length === 1);
			if(filteredList.length > 0) {
				state.filmsList = filteredList;
				state.totalFilms = state.filmsList.length;
			}
		},
		//sort film by genre : it receives 3 genres parameters, it must sort every film which genres.length === 1 are equal to one of the 3 genres parameters, and every film which genres.length === 2 are equal to two of the 3 genres parameters, and every film which genres.length === 3 are equal to all 3 genres parameters
		sortByGenreThree: (state, action) => {
			const filteredList = state.filmsList.filter((movie) => {
				if (movie.genres.length === 1) {
					return movie.genres.includes(action.payload[0]) || movie.genres.includes(action.payload[1]) || movie.genres.includes(action.payload[2]);
				} else if (movie.genres.length === 2) {
					return (
						(movie.genres.includes(action.payload[0]) && movie.genres.includes(action.payload[1])) ||
						(movie.genres.includes(action.payload[0]) && movie.genres.includes(action.payload[2])) ||
						(movie.genres.includes(action.payload[1]) && movie.genres.includes(action.payload[2]))
					);
				} else  {
					return (
						movie.genres.includes(action.payload[0]) &&
						movie.genres.includes(action.payload[1]) &&
						movie.genres.includes(action.payload[2])
					);
				}
			});
			if(filteredList.length > 0) {
				state.filmsList = filteredList;
				state.totalFilms = state.filmsList.length;
			}
		},
		//exclude one genre
		sortByExcludingGenre: (state, action) => {
			const filteredList = state.filmsList.filter((movie) => !movie.genres.includes(action.payload));
			if(filteredList.length > 0) {
				state.filmsList = filteredList;
				state.totalFilms = state.filmsList.length;
			}
		},
		//sort by excluding multiple genres
		sortByExcludingGenreSome: (state, action) => {
			const filteredList = state.filmsList.filter((movie) => !action.payload.some((genre) => movie.genres.includes(genre)));
			if(filteredList.length > 0) {
				state.filmsList = filteredList;
				state.totalFilms = state.filmsList.length;
			}
		},
		//sort films by rate
		sortByRate: (state, action) => {
			const filteredList = state.filmsList.sort((a, b) => {
				const ratingA = parseFloat(a.vote_average);
				const ratingB = parseFloat(b.vote_average);
				return ratingB - ratingA;
			});
			if(filteredList.length > 0) {
				state.filmsList = filteredList.slice(0, action.payload);
				state.totalFilms = state.filmsList.length;
			}
		},
		//sort films by year
		sortByYear: (state, action) => {
			const filteredList = state.filmsList.filter((movie) => movie.release_date.includes(action.payload));
			if(filteredList.length > 0) {
				state.filmsList = filteredList;
				state.totalFilms = state.filmsList.length;
			}
		},
		//sort film by excluding a year
		sortByExcludingYear: (state, action) => {
			const filteredList = state.filmsList.filter((movie) => !movie.release_date.includes(action.payload));
			if(filteredList.length > 0) {
				state.filmsList = filteredList;
				state.totalFilms = state.filmsList.length;
			}
		},
		//sort films by decade
		sortByDecade: (state, action) => {
			const filteredList = state.filmsList.filter((movie) => movie.release_date.includes(action.payload));
			if(filteredList.length > 0) {
				state.filmsList = filteredList;
				state.totalFilms = state.filmsList.length;
			}
		},
		//sort films by popularity
		sortByPopularity: (state, action) => {
			const filteredList = state.filmsList.sort((a, b) => {
				const popularityA = parseFloat(a.popularity);
				const popularityB = parseFloat(b.popularity);
				return popularityB - popularityA;
			});
			if(filteredList.length > 0) {
				state.filmsList = filteredList.slice(0, action.payload);
				state.totalFilms = state.filmsList.length;
			}
		},
		//sort by original language
		sortByCountry: (state, action) => {
			const filteredList = state.filmsList.filter((movie) => movie.original_language.includes(action.payload));
			if(filteredList.length > 0) {
				state.filmsList = filteredList;
				state.totalFilms = state.filmsList.length;
			}
		},
		//exclude by country
		sortByExcludingCountry: (state, action) => {
			const filteredList = state.filmsList.filter((movie) => !movie.original_language.includes(action.payload));
			if(filteredList.length > 0) {
				state.filmsList = filteredList;
				state.totalFilms = state.filmsList.length;
			}
		},
		//exclude films whose overview contains some of these words
		sortByExcludingResumeWords: (state, action) => {
			const filteredList = state.filmsList.filter((movie) => !action.payload.some((word) => movie.overview.includes(word)));
			if(filteredList.length > 0) {
				state.filmsList = filteredList;
				state.totalFilms = state.filmsList.length;
			}
		},
	},
	extraReducers: (builder) => {
		builder.addCase(HYDRATE, (state, action) => {
			return { ...state, ...action.payload.filmsList };
		});
	},
});

export const {
	addFilms,
	resetFilmsList,
	addQuestion,
	removeOneQuestion,
	sortByGenre,
	sortByGenreSome,
	sortByGenreOne,
	sortByGenreThree,
	sortByExcludingGenre,
	sortByExcludingGenreSome,
	sortByRate,
	sortByYear,
	sortByExcludingYear,
	sortByDecade,
	sortByPopularity,
	sortByCountry,
	sortByExcludingCountry,
	sortByExcludingResumeWords,
} = filmSlice.actions;

export default filmSlice.reducer;