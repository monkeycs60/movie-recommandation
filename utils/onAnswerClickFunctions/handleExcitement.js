import {
	sortByGenreSome,
	sortByPopularity,
	sortByDecade,
	sortByCountry,
} from '@/store/filmSlice';

export const handleExcitement1 = (dispatch) => {
	console.log('handleExcitement1 : le cinéma américain');
	dispatch(sortByCountry('en'));
};

export const handleExcitement2 = (dispatch) => {
	console.log('handleExcitement2 : les années 2000');
	dispatch(sortByDecade(200));
};

export const handleExcitement3 = (dispatch) => {
	console.log('handleExcitement3 : les comédies à l\'eau de rose');
	dispatch(sortByGenreSome(
		['Romance',
			'Comedy']
	));
};

export const handleExcitement4 = (dispatch) => {
	console.log('handleExcitement4 : les valeurs sûres');
	dispatch(sortByPopularity(200));
};