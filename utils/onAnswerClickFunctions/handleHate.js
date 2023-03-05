
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

export const handleHate1 = (dispatch) => {
	console.log('handleHate1 : l\'année 1996');
	dispatch(sortByExcludingYear(1996));
};

export const handleHate2 = (dispatch) => {
	console.log('handleHate2 : les films romantiques');
	dispatch(sortByExcludingGenre('Romance'));
};

export const handleHate3 = (dispatch) => {
	console.log('handleHate3 : ta belle-mère');
	dispatch(sortByExcludingResumeWords([
		'belle famille',
		'belle-famille',
		'belle mère',
		'belle-mère',
		'angoisse',
		'angoissant',
		'conflit',
		'tension',
		'autoritaire',
		'critique',
		'intrusive',
		'malaise',
		'famille',
		'évitement'
	]));
};

export const handleHate4 = (dispatch) => {
	console.log('handleHate4 : le cinéma français');
	dispatch(sortByExcludingCountry('French'));
};