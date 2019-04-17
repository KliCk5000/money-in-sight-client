import dateFns from 'date-fns';

export function filterBillsForDate(bills, date) {
  return bills.filter((bill) => dateFns.isSameDay(bill.date, date));
}