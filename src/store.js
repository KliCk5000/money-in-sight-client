import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

import fakeData from './fakeData.json';

const preloadedState = {
  calendar: {
    currentDate: new Date(),
    selectedDate: new Date(),
    startingBalance: 0,
    balances: [{ date: new Date('April 1, 2019'), balance: 10 }],
  },
};

const fakePreloadedState = Object.assign({}, fakeData, preloadedState);

console.log(fakePreloadedState);

const store = createStore(
  rootReducer,
  fakePreloadedState,
  composeWithDevTools(),
);

export default store;
