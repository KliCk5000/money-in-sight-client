import { combineReducers } from 'redux';
// import reducers here
import calendarReducer from './calendarReducer';

export default combineReducers({
  // imported reducers need to go here
  calendar: calendarReducer
});