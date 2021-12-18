import { ActionTypes } from "../constants/action-types"

export const fetchCountriesList = (countries) => {
    return {type: ActionTypes.FETCH_COUNTRIES, payload: countries}
}
export const addCountries = (country) => {
    return {type: ActionTypes.ADD_COUNTRY, payload: country}
}