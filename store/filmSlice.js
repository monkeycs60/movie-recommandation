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
			state.filmsList = state.filmsList.filter((movie) => movie.genres.includes(action.payload));
			state.totalFilms = state.filmsList.length;
		},
		//sort films by rate
		sortByRate: (state) => {
			state.filmsList = state.filmsList.sort((a, b) => {
				const ratingA = parseFloat(a.vote_average);
				const ratingB = parseFloat(b.vote_average);
				return ratingB - ratingA;
			});
			state.totalFilms = state.filmsList.length;
		},
		//sort films by year
		sortByYear: (state, action) => {
			state.filmsList = state.filmsList.filter((movie) => movie.release_date.includes(action.payload));
			state.totalFilms = state.filmsList.length;
		},
		//sort films by decade
		sortByDecade: (state, action) => {
			state.filmsList = state.filmsList.filter((movie) => movie.release_date.includes(action.payload));
			state.totalFilms = state.filmsList.length;
		},
		//sort films by popularity
		sortByPopularity: (state) => {
			state.filmsList = state.filmsList.sort((a, b) => {
				const popularityA = parseFloat(a.popularity);
				const popularityB = parseFloat(b.popularity);
				return popularityB - popularityA;
			});
			state.totalFilms = state.filmsList.length;
		},
		//sort by original language
		sortByLanguage: (state, action) => {
			state.filmsList = state.filmsList.filter((movie) => movie.original_language.includes(action.payload));
			state.totalFilms = state.filmsList.length;
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
	sortByRate,
	sortByYear,
	sortByDecade,
	sortByPopularity,
	sortByLanguage,
} = filmSlice.actions;

export default filmSlice.reducer;