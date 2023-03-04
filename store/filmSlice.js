import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export const filmSlice = createSlice({
	name: 'film',
	initialState: {
		filmsList: [],
		totalFilms: 0,
		questions: [],
		showQuestions: false,
	},
	reducers: {
		addFilms: (state, action) => {
			state.filmsList.push(...action.payload);
			state.totalFilms = state.filmsList.length;
		},
        	resetFilmsList: (state) => {
			if (state.filmsList.length > 1001) {
				state.filmsList = [];
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
} = filmSlice.actions;

export default filmSlice.reducer;