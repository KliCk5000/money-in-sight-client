import dateFns from 'date-fns';

// filterBillsForDate
// bills is an array of all bills
// date is specific date you are wanting to run the function
export function filterBillsForDate(bills, date) {
  return bills.filter((bill) => dateFns.isSameDay(bill.date, date));
}

export function filterBillsForMonth(bills, date) {
  return bills.filter((bill) => dateFns.isSameMonth(bill.date, date));
}

export function filterAllBillsBeforeDate(bills, date) {
  return bills.filter((bill) => dateFns.isBefore(bill.date, date));
}

export function filterAllBillsBeforeAndOnDate(bills, date) {
  return bills.filter((bill) =>
    dateFns.isBefore(bill.date, date),
  );
}

// getBalanceForDate
// startingBalance is object that contains { startDate, balance }
// bills is an array of all bills
// date is specific date you are wanting to run the function
export function calcEndOfDayBalance(startingBalance = 0, bills) {
  let runningTotal = startingBalance;
  bills.forEach((bill) =>
    bill.type === 'income'
      ? (runningTotal += bill.amount)
      : (runningTotal -= bill.amount),
  );
  return runningTotal;
}
