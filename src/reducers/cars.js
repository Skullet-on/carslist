const initialState = {
	cars: [{
		brand: "VW",
		model: "Passat",
	},
	{
		brand: "Audi",
		model: "A4",
	}]
}
export default function carsList(state = initialState, action){
	switch (action.type) {
	case "SET_CARS":
		return { ...state, cars: action.payload }
	default:
		return state
	}
}
