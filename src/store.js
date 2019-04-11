import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const preloadedState = {
  "calendar": {
    currentDate: new Date()
  }
}

const store = createStore(rootReducer, preloadedState, composeWithDevTools());

export default store;