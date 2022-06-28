import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import myFirstReducer from './reducers';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';

const logger = createLogger({
  level: 'info',
  collapsed: true,
});
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ myFirstReducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware, logger))
);
sagaMiddleware.run(mySaga);
export default store;
