import {
	sortByGenreOne,
	sortByGenreThree,
	sortByRate,
} from '@/store/filmSlice';

export const handleSearch1 = (dispatch) => {
	console.log('handleSearch1 : la crème de la crème');
	dispatch(sortByRate(200));
};

export const handleSearch2 = (dispatch) => {
	console.log('handleSearch2 : le dépaysement');
	dispatch(sortByGenreThree(
		['Fantasy',
			'Action',
			'Science Fiction']
	));
};

export const handleSearch3 = (dispatch) => {
	console.log('handleSearch3 : un documentaire');
	dispatch(sortByGenreOne('Documentary'));
};

export const handleSearch4 = (dispatch) => {
	console.log('handleSearch4 : la nostalgie');
	dispatch(sortByGenreThree(
		['Romance',
			'History',
			'Drama']
	));
};