export function getCars(){
	return fetch('/cars')
		.then((res) => res.json());
}