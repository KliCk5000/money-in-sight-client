import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// import reducers here
import calendarReducer from './calendarReducer';
import billsReducer from './billsReducer';

export default combineReducers({
  // imported reducers need to go here
  calendar: calendarReducer,
  bills: billsReducer,
  form: formReducer,
});
