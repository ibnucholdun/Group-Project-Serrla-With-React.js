import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import modulReducers from '../Reducers/modulReducers'
import instructurReducers from '../Reducers/instructurReducers'
import userReducers from '../Reducers/userReducers';

const allReducer = combineReducers({
  modul: modulReducers,
  instructur: instructurReducers,
  user: userReducers
})

const store = createStore(allReducer, applyMiddleware(thunk))

export default store