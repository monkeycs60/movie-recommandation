import { sortByGenre,
	sortByGenreSome,
	sortByGenreOne,
	sortByGenreThree,
	sortByExcludingGenre,
	sortByExcludingGenreSome,
	sortByPopularity,
	sortByYear,
	sortByExcludingYear,
	sortByDecade,
	sortByRate,
	sortByCountry,
	sortByExcludingCountry,
	sortByExcludingResumeWords,
} from '@/store/filmSlice';

export const handleAvoid1 = (dispatch) => {
	console.log('handleAvoid1 : avoir peur');
	dispatch(sortByExcludingGenreSome
	(['Horror',
		'Thriller',
		'War',
		'Mystery',
		'Crime',
	]));
};

export const handleAvoid2 = (dispatch) => {
	console.log('handleAvoid2 : te cultiver');
	dispatch(sortByExcludingResumeWords([
		'art',
		'artiste',
		'peintre',
		'intelligence',
		'intellectuel',
		'intellectuelle',
		'culture',
		'culturel',
		'culturelle',
		'réflexion',
		'réfléchir',
		'complexe',
		'complexité'
	]));
	dispatch(sortByExcludingGenre
	(['Documentary',
		'History',
	]));
};

export const handleAvoid3 = (dispatch) => {
	console.log('handleAvoid3 : De regarder le même film que ton petit cousin');
	dispatch(sortByExcludingResumeWords([
		'famille',
		'familial',
		'jeunesse',
		'adolescent',
		'petit',
		'petit',
		'enfant',
		'ado',
		'émerveillement',
		'naïf'
	]));
	dispatch(sortByExcludingGenre
	(['Family',
		'Animation',
	]));
};

export const handleAvoid4 = (dispatch) => {
	console.log('handleAvoid4 : De répondre à cette question');
};