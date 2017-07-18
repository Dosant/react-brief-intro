import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const enhancer = composeWithDevTools(
  applyMiddleware(thunk, logger)  
);

const store = createStore(rootReducer, enhancer);

export default store;