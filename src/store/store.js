import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { fromJS } from 'immutable';
import createReducer from '../reducers';

const composeEnhancers = compose(
  applyMiddleware(thunk),
  global.reduxNativeDevTools ?
    global.reduxNativeDevTools(/*options*/) :
    noop => noop
);

const store = createStore(createReducer(), fromJS({}), composeEnhancers);

export default store;
