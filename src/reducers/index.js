import { combineReducers } from 'redux-immutable';
import homeReducer from './homeReducers';

export default function createReducer(asyncReducers) {
  const allReducer = combineReducers({
    home: homeReducer,
    ...asyncReducers,
  });

  const rootReducer = (state, action) => allReducer(state, action);

  return rootReducer;
}
