import { ActionTypes } from "../constants/action-types";

const initialState = {
    countries: []
}
export const countryReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.FETCH_COUNTRIES:
            return {...state, countries:payload};
        default:
            return state;
    }
}