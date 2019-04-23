import { ADD_TRANSACTION, DELETE_TRANSACTION } from '../actions/actionTypes';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TRANSACTION: {
      const {newTransaction} = action.payload;
      return [...state, newTransaction];
    }
    case DELETE_TRANSACTION: {
      const {deleteTransaction} = action.payload;
      console.log(state);
      return state.filter((item) => !(item.id === deleteTransaction))
    }
    default:
      return state;
  }
}
