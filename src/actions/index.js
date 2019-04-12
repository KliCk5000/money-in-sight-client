import { NEXT_MONTH, PREV_MONTH, SELECT_DATE } from './actionTypes';
import dateFns from 'date-fns';

export const prevMonth = (currentDate) => ({
  type: PREV_MONTH,
  payload: {
    currentDate: dateFns.subMonths(currentDate, 1),
  },
});

export const nextMonth = (currentDate) => ({
  type: NEXT_MONTH,
  payload: {
    currentDate: dateFns.addMonths(currentDate, 1),
  },
});

export const selectDate = (selectedDate) => ({
  type: SELECT_DATE,
  payload: {
    selectedDate: selectedDate,
  },
});
