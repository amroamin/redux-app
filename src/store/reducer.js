import { counter } from './countReducer';
import { log } from './loggReducer';
import {combineReducers} from 'redux'

export const reducers = combineReducers({
  counter,
  log
})