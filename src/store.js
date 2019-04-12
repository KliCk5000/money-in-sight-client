import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

import fakeData from './fakeData.json';

const preloadedState = {
  "calendar": {
    currentDate: new Date()
  }
}

const fakePreloadedState = Object.assign({}, fakeData, preloadedState);

const store = createStore(rootReducer, fakePreloadedState, composeWithDevTools());

export default store;