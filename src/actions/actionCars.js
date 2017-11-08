import { getCars } from '../api';

export function loadCars() {
	return {
		type: 'PROMISE',
		actions: ['CARS_LOADING', 'CARS_LOADED', 'CARS_LOAD_FAILURE'],
		payload: getCars(),
	};
}
