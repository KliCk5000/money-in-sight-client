import * as actionTypes from './actionTypes';
import dateFns from 'date-fns';

export const prevMonth = (currentDate) => ({
  type: actionTypes.PREV_MONTH,
  payload: {
    currentDate: dateFns.subMonths(currentDate, 1),
  },
});

export const nextMonth = (currentDate) => ({
  type: actionTypes.NEXT_MONTH,
  payload: {
    currentDate: dateFns.addMonths(currentDate, 1),
  },
});

export const selectDate = (selectedDate) => ({
  type: actionTypes.SELECT_DATE,
  payload: {
    selectedDate: selectedDate,
  },
});

export const addTransaction = (transaction) => ({
  type: actionTypes.ADD_TRANSACTION,
  payload: {
    newTransaction: transaction,
  },
});

export const deleteTransaction = (transactionID) => ({
  type: actionTypes.DELETE_TRANSACTION,
  payload: {
    deleteTransaction: transactionID,
  },
});
