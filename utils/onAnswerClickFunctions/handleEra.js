import {
	sortByYear,
	sortByDecade,
} from '@/store/filmSlice';
	
export const handleEra1 = (dispatch) => {
	console.log('handleEra1 : années 1980');
	dispatch(sortByDecade(198));
};

	 export const handleEra2 = (dispatch) => {
	console.log('handleEra2 : années 2010');
	dispatch(sortByDecade(201));
};

	 export const handleEra3 = (dispatch) => {
	console.log('handleEra3 : années 1990');
	dispatch(sortByDecade(199));
};

	 export const handleEra4 = (dispatch) => {
	console.log('handleEra4 : cinéma très récent');
	dispatch(sortByYear(202));
};
