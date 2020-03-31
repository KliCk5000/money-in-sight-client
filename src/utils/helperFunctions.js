import * as dateFns from "date-fns";

// filterBillsForDate
// bills is an array of all bills
// date is specific date you are wanting to run the function
export function filterBillsForDate(bills, date) {
  return bills.filter(bill => dateFns.isSameDay(bill.date, date));
}

export function filterBillsForMonth(bills, date) {
  return bills.filter(bill => dateFns.isSameMonth(bill.date, date));
}

export function filterAllBillsBeforeDate(bills, date) {
  return bills.filter(bill => dateFns.isBefore(bill.date, date));
}

export function filterAllBillsBeforeAndOnDate(bills, date) {
  return bills.filter(bill => dateFns.isBefore(bill.date, date));
}

// getBalanceForDate
// startingBalance is object that contains { startDate, balance }
// bills is an array of all bills
// date is specific date you are wanting to run the function
export function calcEndOfDayBalance(startingBalance = 0, bills) {
  let runningTotal = startingBalance;
  bills.forEach(bill => {
    if (bill.type === "income") {
      return (runningTotal += Number(bill.amount));
    } else if (bill.type === "expense") {
      return (runningTotal -= Number(bill.amount));
    } else {
      console.log("Error: invalid type of bill");
      return 0;
    }
  });
  return runningTotal;
}
