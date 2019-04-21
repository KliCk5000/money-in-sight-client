import { ADD_TRANSACTION } from '../actions/actionTypes';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TRANSACTION: {
      const {newTransaction} = action.payload;
      return [...state, newTransaction];
    }
    default:
      return state;
  }
}
