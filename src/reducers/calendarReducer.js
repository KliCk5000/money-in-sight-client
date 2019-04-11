import { PREV_MONTH, NEXT_MONTH } from '../actions/actionTypes';

export default function(state = [], action) {
  switch (action.type) {
    case PREV_MONTH: {
      const { currentDate } = action.payload;
      console.log('State', state);
      console.log('currentDate', currentDate);
      console.log('action:', action);
      return {
        ...state,
        currentDate,
      };
    }
    case NEXT_MONTH: {
      const { currentDate } = action.payload;
      console.log('State', state);
      console.log('currentDate', currentDate);
      return {
        ...state,
        currentDate,
      };
    }
    default:
      return state;
  }
}
