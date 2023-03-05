import { sortByGenre,
	sortByGenreSome,
	sortByGenreOne,
	sortByGenreThree,
	sortByExcludingGenre,
	sortByPopularity,
	sortByYear,
	sortByExcludingYear,
	sortByDecade,
	sortByRate,
	sortByCountry,
	sortByExcludingCountry,
	sortByExcludingResumeWords,
} from '@/store/filmSlice';

export const handleMood1 = (dispatch) => {
	console.log('handleMood1 : au fond du trou');
	dispatch(sortByGenreThree(
		['Romance',
			'Family',
			'Comedy']
	));
};

export const handleMood2 = (dispatch) => {
	console.log('handleMood2 : besoin d\'action');
	dispatch(sortByGenreSome(
		['Action',
			'Adventure',
			'Horror',
			'War']
	));
};

export const handleMood3 = (dispatch) => {
	console.log('handleMood3 : envie de rire');
	dispatch(sortByGenreSome(
		['Comedy',
			'Family',
			'Animation']
	));
};

export const handleMood4 = (dispatch) => {
	console.log('handleMood4 : soif d\'inconnu');
	dispatch(sortByGenreSome(
		['Mystery',
			'Fantasy',
			'History',
			'Science Fiction']
	));
};