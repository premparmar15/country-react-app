import {combineReducers} from 'redux'
import { countryReducer } from './countryReducer'

const reducers = combineReducers({
    countries: countryReducer
})

export default reducers;