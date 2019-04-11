import { NEXT_MONTH, PREV_MONTH } from './actionTypes';
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
