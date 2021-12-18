import { ActionTypes } from "../constants/action-types";

const initialState = {
    countries: []
}
export const countryReducer = (state=initialState, {type, payload}) => {
    console.log(payload)
    console.log(state)
    switch (type) {
        case ActionTypes.FETCH_COUNTRIES:
            return {...state, countries:payload};
        case ActionTypes.ADD_COUNTRY:
            return {...state, countries: payload};
        default:
            return state;
    }
}
