import { ActionTypes } from "../constants/action-types"

export const fetchCountriesList = (countries) => {
    return {type: ActionTypes.FETCH_COUNTRIES, payload: countries}
}