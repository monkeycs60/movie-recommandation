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
} = filmSlice.actions;

export default filmSlice.reducer;