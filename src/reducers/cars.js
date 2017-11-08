export default function (state = [], action){
	switch (action.type) {
	case "CARS_LOADED":
		return action.data;
	default:
		return state;
	}
}
