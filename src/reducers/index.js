import { combineReducers } from 'redux';
// import reducers here
import calendarReducer from './calendarReducer';
import billsReducer from './billsReducer';

export default combineReducers({
  // imported reducers need to go here
  calendar: calendarReducer,
  bills: billsReducer
});