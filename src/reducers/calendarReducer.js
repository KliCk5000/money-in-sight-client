import { PREV_MONTH, NEXT_MONTH, SELECT_DATE } from '../actions/actionTypes';

export default function(state = [], action) {
  switch (action.type) {
    case PREV_MONTH: {
      const { currentDate } = action.payload;
      return {
        ...state,
        currentDate,
      };
    }
    case NEXT_MONTH: {
      const { currentDate } = action.payload;
      return {
        ...state,
        currentDate,
      };
    }
    case SELECT_DATE: {
      const { selectedDate } = action.payload;
      return {
        ...state,
        selectedDate,
      }
    }
    default:
      return state;
  }
}
