import { combineReducers, createStore, applyMiddleware } from 'redux';
import imageReducer from './reducers/imageReducer';
import createSagaMiddleware from 'redux-saga';
import mySaga from '../sagas/index';

const rootReducer = combineReducers({
    imageReducer,
});
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  )
  
  // then run the saga
  sagaMiddleware.run(mySaga);
  store.dispatch({type: 'Hello'});
export default store;